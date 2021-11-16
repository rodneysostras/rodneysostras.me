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
  <header class="header container">
    <nav class="nav container">
      <a href="#" class="logo">&lt;Rodney Sostras /&gt;</a>
      <div class="nav-menu">
        <ul class="nav-list">
          <Item url="#home" name="home" />
          <Item url="#skill" name="skill" />
          <Item url="#about" name="about" />
          <Item url="#contact" name="contact" />
        </ul>
        <div class="nav-close"></div>
      </div>
      <div class="nav-toggle"></div>
    </nav>
  </header>
</template>

<script>
import Item from "./item";
export default {
  name: "NavBar",
  components: {
    Item,
  },
};
</script>

<style>
.nav {
  display: flex;
  align-items: center;
  height: 3rem;
}

.nav-menu {
  flex: 1;
}

.nav-list {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  list-style: none;
}
</style>
