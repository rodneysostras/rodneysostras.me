<template>
    <Home />
    <About />
    <Education />
    <Projects />
    <Contacts />
    <Footer />
</template>

<script>
import './assets/css/style.css';
import Home from './pages/home';
import About from './pages/about';
import Education from './pages/education';
import Projects from './pages/projects';
import Contacts from './pages/contacts';
import Footer from './pages/footer';

export default {
    name: 'App',
    components: {
        Home,
        About,
        Education,
        Projects,
        Contacts,
        Footer,
    },
};
</script>

<style></style>
