<template>
  <div id="app">
    <Flangle />
    <Deflector />
  </div>
</template>

<script>
import Flangle from "./components/Flangle";
import Deflector from "./components/Deflector";

export default {
  name: "App",
  components: {
    Flangle,
    Deflector,
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

.container {
  width: 80%;
  margin: 0 auto;
}
.circle-form,
.square-form {
  display: flex;
  justify-content: flex-start;
  align-items: start;
  box-shadow: inset 5 1 4 #000;
}

label {
  margin-bottom: 20px;
  display: flex;
}

label input {
  width: 50px;
  margin-right: 20px;
}
.btn {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 150px;
  outline: none;
  background-color: #fff;
  border: 2px solid lightgreen;
  font-weight: bold;
}

.btn:hover {
  background-color: lightgreen;
}
.active {
  background-color: #6fcf97;
  color: white;
  transition: ease 0.25s;
}
.img-draw {
  width: 150px;
  margin-right: 50px;
  border: 1px dashed #000;
}

.img-draw--def {
  width: 350px;
}
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

h1 {
  text-align: start;
}

.menu {
  text-align: start;
  margin-bottom: 50px;
}

.footer {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.btn--menu {
  margin-right: 15px;
}

body {
}
</style>
