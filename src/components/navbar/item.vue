<!--
 ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
 │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
 │ This owner-supplied source code has no limitations on the condition imposed on the           │
 │ maintenance of the copyright notice.                                                         │
 │ For more information, read the LICENSE file at the root of the project.                      │
 │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
 └──────────────────────────────────────────────────────────────────────────────────────────────┘
-->

<template>
  <li class="nav-item">
    <a href="#{{url}}" class="nav-link">{{ title }}</a>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    url: {
      type: String,
      default: "#",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.nav-item {
  display: inline-block;
  padding: 10px;
}

.nav-link {
  text-transform: uppercase;
}
</style>
