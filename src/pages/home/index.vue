<!--
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Copyright (c) 2021 by the author of the rodneysostras.me project. All rights reserved.       │
│ This owner-supplied source code has no limitations on the condition imposed on the           │
│ maintenance of the copyright notice.                                                         │
│ For more information, read the LICENSE file at the root of the project.                      │
│ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<template>
    <section id="home">
        <Navbar />
        <Info />
        <a href="#about" target="_self" title="Sobre mim"><ScrollDown /></a>
        <Hexagon />
    </section>
</template>

<script>
import Info from './components/info';
import Hexagon from './components/hexagon';
import Navbar from './components/navbar';
import ScrollDown from './components/scrolldown';
export default {
    name: 'Home',
    components: {
        Info,
        Hexagon,
        Navbar,
        ScrollDown,
    },
};
</script>

<style>
#home {
    position: relative;
    height: 100vh;
    width: 100%;
}
</style>
