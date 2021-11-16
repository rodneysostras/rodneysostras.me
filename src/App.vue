<template>
  <Introduction />
  <footer>Copyright © {{ new Date().getFullYear() }} Rodney Sostras</footer>
</template>

<script>
import "./assets/css/style.css";
import Introduction from "./pages/introduction";

export default {
  name: "App",
  components: {
    Introduction,
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
