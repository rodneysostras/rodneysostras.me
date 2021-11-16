<!--
 ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
 │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
 │ This owner-supplied source code has no limitations on the condition imposed on the           │
 │ maintenance of the copyright notice.                                                         │
 │ For more information, read the LICENSE file at the root of the project.                      │
 │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
 └──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
  <main class="mainhex">
    <div v-for="i in row" :key="i" class="row">
      <div v-for="x in hex" :key="x" class="hex"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Introduction",
  data: () => {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    };
  },
  computed: {
    hex: function () {
      return Math.round(this.innerWidth / 65.725) + 2;
    },
    row: function () {
      return Math.round(this.innerHeight / 50) + 4;
    },
  },
  mounted() {
    window.onresize = () => {
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;
    };
  },
};
</script>

<style>
.mainhex {
  height: 100vh;
  width: 100%;
  background-color: #000;
  overflow: hidden;
  animation: animate 4s linear infinite;

  --size: 50px;
  --margin: 4px;
}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
.mainhex .row {
  margin-top: -13px;
  overflow: hidden;
  white-space: nowrap;
}

.mainhex .row:nth-child(even) {
  margin-left: -32px;
}

.mainhex .hex {
  position: relative;
  display: inline-block;
  height: var(--size);
  width: calc(var(--size) * 1.1547);
  margin-left: 7px;
  background: #111;

  transition: 2s;
}

.mainhex .hex:before {
  position: absolute;
  content: "";
  top: calc(var(--margin) / 2);
  left: calc(var(--margin) / 2);
  height: calc(100% - var(--margin));
  width: calc(100% - var(--margin));
  background-color: #000;
  z-index: 1;
}

.mainhex .hex,
.mainhex .hex:before {
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.mainhex .hex:hover {
  background-color: #0f0;
  transition: 0s;
}
</style>
