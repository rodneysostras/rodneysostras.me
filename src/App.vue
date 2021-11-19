<template>
  <Home />
  <Footer />
</template>

<script>
import "./assets/css/style.css";
import Home from "./pages/home";
import Footer from "./pages/footer";

export default {
  name: "App",
  components: {
    Home,
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

.info {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  text-align: center;
  transform: translateX(-50%) translateY(-70%);
  user-select: none;
}
</style>
