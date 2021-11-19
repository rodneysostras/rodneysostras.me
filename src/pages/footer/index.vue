<!--
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Copyright (c) 2021 by the author of the rodneysostras.me project. All rights reserved.       │
│ This owner-supplied source code has no limitations on the condition imposed on the           │
│ maintenance of the copyright notice.                                                         │
│ For more information, read the LICENSE file at the root of the project.                      │
│ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
  <footer id="copyright">
    Copyright © {{ new Date().getFullYear() }} Rodney Sostras
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
#copyright {
  text-align: center;
}
</style>
