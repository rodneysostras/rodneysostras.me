<template>
    <Home />
    <About />
    <Footer />
</template>

<script>
import './assets/css/style.css';
import Home from './pages/home';
import About from './pages/about';
import Footer from './pages/footer';

export default {
    name: 'App',
    components: {
        Home,
        About,
        Footer,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html,
body,
#app {
    height: 100vh;
    width: 100%;
}

html {
    box-sizing: border-box;
}
</style>
