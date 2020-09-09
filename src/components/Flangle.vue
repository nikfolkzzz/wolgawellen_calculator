<template>
  <div class="container">
    <h1>Фланец</h1>
    <div class="menu">
      <button class="btn btn--menu" @click="flType = true" :class="{active:flType === true}">КРУГЛЫЙ</button>
      <button
        class="btn btn--menu"
        @click="flType = false"
        :class="{active:flType === false}"
      >ПРЯМОУГОЛЬНЫЙ</button>
    </div>

    <div class="circle-form" v-if="flType">
      <img class="img-draw" src="../assets/crFL.svg" alt />
      <div class="form-container">
        <label for>
          <input
            @change="size.circle.dMax=$event.target.value; "
            type="text"
            :value="size.circle.dMax"
          />
          d_max
        </label>
        <label for>
          <input
            @change="size.circle.dMin=$event.target.value"
            type="text"
            :value="size.circle.dMin"
          />
          d_min
        </label>
        <label for>
          <input
            @change="size.circle.thick=$event.target.value"
            type="text"
            :value="size.circle.thick"
          />
          толщина
        </label>
        <label for>
          <input
            @change="size.circle.dens=$event.target.value"
            type="text"
            :value="size.circle.dens"
          />
          плотность материала (кг/м3)
        </label>
      </div>
    </div>

    <div class="square-form" v-if="!flType">
      <img class="img-draw" src="../assets/sqFL.svg" alt />
      <div class="form-container">
        <label for>
          <input @change="size.square.a1=$event.target.value" type="text" :value="size.square.a1" />
          a1
        </label>
        <label for>
          <input @change="size.square.b1=$event.target.value" type="text" :value="size.square.b1" />
          b1
        </label>

        <label for>
          <input @change="size.square.a2=$event.target.value" type="text" :value="size.square.a2" />
          a2
        </label>
        <label for>
          <input @change="size.square.b2=$event.target.value" type="text" :value="size.square.b2" />
          b2
        </label>
        <label for>
          <input
            @change="size.square.thick=$event.target.value"
            type="text"
            :value="size.square.thick"
          />
          толщина
        </label>
        <label for>
          <input
            @change="size.square.dens=$event.target.value"
            type="text"
            :value="size.square.dens"
          />
          плотность материала (кг/м3)
        </label>
      </div>
    </div>
    <div class="footer">
      <button
        class="btn btn__calc"
        :class="{active:size.square.mass !==0 ||size.circle.mass !==0 }"
        @click="calcFlMass"
      >Рассчитать массу</button>

      <p v-if="flType">Масса круглого фланца :{{size.circle.mass}} кг</p>
      <p v-if="!flType">Масса квадратного фланца :{{size.square.mass}} кг</p>
    </div>
  </div>
</template>

<style scoped>
</style>


<script>
import circleFlangMass from "../helpers/circleFlangMass";
import squareFlangMass from "../helpers/squareFlangMass";
export default {
  data() {
    return {
      size: {
        circle: {
          dMax: 200,
          dMin: 100,
          thick: 5,
          dens: 7850,
          mass: 0,
        },
        square: {
          a1: 100,
          a2: 50,
          b1: 80,
          b2: 30,
          thick: 5,
          dens: 7850,
          mass: 0,
        },
      },
      flType: false,
      mass: 2,
    };
  },

  methods: {
    calcFlMass() {
      if (this.flType) {
        this.size.circle.mass = circleFlangMass(
          this.size.circle.dMin,
          this.size.circle.dMax,
          this.size.circle.thick,
          this.size.circle.dens
        );
      } else {
        this.size.square.mass = squareFlangMass(
          this.size.square.a1,
          this.size.square.a2,
          this.size.square.b1,
          this.size.square.b2,
          this.size.square.thick,
          this.size.square.dens
        );
      }
    },
  },
};
</script>

