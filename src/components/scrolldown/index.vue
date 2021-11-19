<!--
 ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
 │ Copyright (c) 2021 by the author of the rodneysostras.me project. All rights reserved.       │
 │ This owner-supplied source code has no limitations on the condition imposed on the           │
 │ maintenance of the copyright notice.                                                         │
 │ For more information, read the LICENSE file at the root of the project.                      │
 │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
 └──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
  <div class="scrolldown">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "ScrollDown",
};
</script>

<style>
.scrolldown {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.scrolldown span {
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 5px solid #ffac00;
  border-right: 5px solid #ffac00;
  transform: rotate(45deg);
  margin: -10px;
  animation: scrolldown 2s infinite;
}
.scrolldown span:nth-child(2) {
  animation-delay: -0.2s;
}

.scrolldown span:nth-child(3) {
  animation-delay: -0.4s;
}

@keyframes scrolldown {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>
