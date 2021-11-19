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
  <header class="container-header">
    <nav class="container-nav">
      <a href="/" target="_self" class="logo">
        <span>&lt;</span>
        <span class="logo-name">Rodney Sostras</span>
        <span>/&gt;</span>
      </a>
      <input id="menu-btn" type="checkbox" name="menu-btn" />
      <label for="menu-btn" class="nav-toggle">
        <span></span>
      </label>
      <ul class="nav-menu">
        <li>
          <a href="#about" target="_self"><span>SOBRE</span></a>
        </li>
        <li>
          <a href="#resume" target="_self"><span>CURRICULO</span></a>
        </li>
        <li>
          <a href="#projects" target="_self"><span>PROJETOS</span></a>
        </li>
        <li>
          <a href="#contact" target="_self"><span>CONTATO</span></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.container-header {
  position: absolute;
  width: 100%;
  z-index: 9999;
  background-color: #191919;
}
.container-header .container-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
}

.container-header .container-nav .logo {
  display: flex;
  align-items: center;
  font-size: 1.25em;
  text-decoration: none;
  font-family: sans-serif;
  margin-top: 0.188rem;
  line-height: normal;
  color: #868e96;
  cursor: pointer;
}

.container-header .container-nav .logo-name {
  font-family: "Agustina Regular" !important;
  font-weight: bold;
  font-variant-ligatures: no-common-ligatures;
  padding: 0 10px;
  color: #ffac00;
  transition: 0.3s all ease;
  white-space: nowrap;
}

.container-header .container-nav span.logo-name:hover {
  color: #e5e5e5 !important;
}

.container-header .container-nav .nav-toggle {
  position: relative;
  display: none;
  padding: 23px 20px;
  float: right;
  cursor: pointer;
  user-select: none;
}

.container-header .container-nav .nav-toggle > span {
  display: block;
  position: relative;
  height: 2px;
  width: 18px;
  background-color: #e5e5e5;
}
.container-header .container-nav .nav-toggle > span::after,
.container-header .container-nav .nav-toggle > span::before {
  content: "";
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  background-color: #e5e5e5;
  transition: all 0.2s ease-out;
}

.container-header .container-nav .nav-toggle > span::before {
  top: 5px;
}

.container-header .container-nav .nav-toggle > span::after {
  top: -5px;
}

.container-header .container-nav #menu-btn:checked ~ .nav-toggle > span {
  background-color: transparent !important;
}

.container-header .container-nav #menu-btn:checked ~ .nav-toggle > span::before,
.container-header .container-nav #menu-btn:checked ~ .nav-toggle > span::after {
  top: 0;
}

.container-header
  .container-nav
  #menu-btn:checked
  ~ .nav-toggle
  > span::before {
  transform: rotate(-45deg);
}

.container-header .container-nav #menu-btn:checked ~ .nav-toggle > span::after {
  transform: rotate(45deg);
}

.container-header .container-nav #menu-btn {
  display: none;
}

@media screen and (max-width: 600px) {
  .container-header .container-nav .nav-toggle {
    display: block;
  }
}

.container-header .nav-menu {
  color: #e5e5e5;
  white-space: nowrap;
  list-style: none;
  overflow: hidden;
}
@media screen and (min-width: 600px) {
  .container-header .nav-menu li {
    display: inline-block;
  }
}

.container-header .nav-menu li a {
  display: inline-block;
  padding: 0.7rem 1.25rem;
}

.container-header .nav-menu li span {
  position: relative;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 400;
}
.container-header .nav-menu li span:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background: #ffac00;
  visibility: visible;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
.container-header .nav-menu li a:hover span:before {
  visibility: visible;
  transform: scaleX(1);
}

@media screen and (max-width: 600px) {
  .container-header .nav-menu {
    display: block;
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    max-height: 0;
    background: #191919;
    transition: max-height 0.2s ease-out;
  }

  .container-header .container-nav #menu-btn:checked ~ .nav-menu {
    max-height: 100vh;
    height: 100vh;
  }

  .container-header .nav-menu li a {
    display: block;
  }
}
</style>
