<!--
 ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
 │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
 │ This owner-supplied source code has no limitations on the condition imposed on the           │
 │ maintenance of the copyright notice.                                                         │
 │ For more information, read the LICENSE file at the root of the project.                      │
 │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
 └──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
  <div id="hexagon">
    <div v-for="i in row" :key="i" class="row">
      <div v-for="x in hex" :key="x" class="hex"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hexagon",
  data: () => {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    };
  },
  computed: {
    hex: function () {
      return Math.round(this.innerWidth / 30);
    },
    row: function () {
      return Math.round(this.innerHeight / 25);
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
#hexagon {
  --size: 30px;
  --margin: 2px;
  --bg: #191919;
  --color: #242424;

  height: 100vh;
  width: 100%;

  background: var(--bg);
  overflow: hidden;
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

#hexagon .row {
  margin-top: calc(var(--margin) - var(--size) * 0.52);
  overflow: hidden;
  white-space: nowrap;
}

#hexagon .row:nth-child(even) {
  margin-left: calc(var(--margin) - var(--size) * 0.6885);
}

#hexagon .hex {
  position: relative;
  display: inline-block;
  height: var(--size);
  width: calc(var(--size) * 1.1547);
  margin: var(--margin);
  background: var(--color);

  transition: 2s;
}

#hexagon .hex:before {
  position: absolute;
  content: "";
  top: calc(var(--margin) / 2);
  left: calc(var(--margin) / 2);
  height: calc(100% - var(--margin));
  width: calc(100% - var(--margin));
  background-color: var(--bg);
  z-index: 1;
}

#hexagon .hex,
#hexagon .hex:before {
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

#hexagon .hex:hover {
  background-color: #0f0;
  transition: 0s;
}
</style>
