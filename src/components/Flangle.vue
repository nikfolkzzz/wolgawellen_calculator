<template>
  <div class="container">
    <h1>Фланец</h1>
    <div>
      <button @click="flType = true" :class="{active:flType === true}">КРУГЛЫЙ</button>
      <button @click="flType = false" :class="{active:flType === false}">ПРЯМОУГОЛЬНЫЙ</button>
    </div>
    <div class="circle-form" v-if="flType">
      <label for>
        <input @change="sizeC.dMax=$event.target.value" type="text" name id :value="sizeC.dMax" />
        d_max
      </label>
      <label for>
        <input @change="sizeC.dMin=$event.target.value" type="text" name id :value="sizeC.dMin" />
        d_min
      </label>
      <label for>
        <input @change="sizeC.thick=$event.target.value" type="text" name id :value="sizeC.thick" />
        толщина
      </label>
      <label for>
        <input @change="sizeC.dens=$event.target.value" type="text" name id :value="sizeC.dens" />
        плотность материала (кг/м3)
      </label>
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
export default {
  data() {
    return {
      sizeC: {
        dMax: 200,
        dMin: 100,
        thick: 5,
        dens: 7850,
      },
      flType: true,
      mass: 2,
    };
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

