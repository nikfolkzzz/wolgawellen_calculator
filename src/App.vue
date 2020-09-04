<template>
  <div id="app">
    <Flangle />
  </div>
</template>

<script>
import Flangle from "./components/Flangle";
export default {
  name: "App",
  components: {
    Flangle,
  },

  data() {
    return {
      flType: "circle",
    };
  },

  methods: {
    choseCircle() {
      this.flType = "circle";
      console.log(this.flType);
    },

    choseSquare() {
      this.flType = "scuare";
      console.log(this.flType);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
