<template>
  <div class="container">
    <h1>Фланец</h1>
    <div>
      <button @click="flType = true" :class="{active:flType === true}">КРУГЛЫЙ</button>
      <button @click="flType = false" :class="{active:flType === false}">ПРЯМОУГОЛЬНЫЙ</button>
    </div>
    <div class="circle-form" v-if="flType">
      <FormGen :title="'jojo'" :size="sizeC" />
    </div>

    <div class="square-form" v-if="!flType">
      <label for>
        <input type="text" name id />
        a1
      </label>
      <label for>
        <input type="text" name id />
        b1
      </label>

      <label for>
        <input type="text" name id />
        a2
      </label>
      <label for>
        <input type="text" name id />
        b2
      </label>
      <label for>
        <input type="text" name id />
        толщина
      </label>
    </div>

    <button @click="calcFlMass">Рассчитать массу</button>

    <p>Масса:{{mass}} кг</p>
  </div>
</template>

<style scoped>
.circle-form,
.square-form {
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: inset 5 1 4 #000;
}

label {
  margin-bottom: 20px;
}

label input {
  width: 50px;
}

.active {
  background-color: lightgreen;
}
</style>


<script>
import FormGen from "../components/FormGen";
export default {
  data() {
    return {
      sizeC: {
        dMax: {
          name: "dmax",
          value: 200,
        },
        dMin: {
          name: "dmin",
          value: 100,
        },
        thick: {
          name: "толщина",
          value: 5,
        },
        dens: {
          name: "плотность ",
          value: 7850,
        },
      },
      flType: true,
      mass: 2,
    };
  },
  components: {
    FormGen,
  },
  methods: {
    calcFlMass() {
      if (this.flType) {
        const mass =
          (((3.14 / 4) *
            (Math.pow(this.sizeC.dMax / 1000, 2) -
              Math.pow(this.sizeC.dMin / 1000, 2)) *
            this.sizeC.thick) /
            1000) *
          this.sizeC.dens;

        this.mass = mass.toFixed(2);
      }
    },
  },
};
</script>

