<template>
  <div class="container">
    <h1>Дефлектор</h1>
    <div class="menu">
      <button
        class="btn btn--menu"
        @click="dfType = true"
        :class="{ active: dfType === true }"
      >КРУГЛЫЙ</button>
      <button
        class="btn btn--menu"
        @click="dfType = false"
        :class="{ active: dfType === false }"
      >ПРЯМОУГОЛЬНЫЙ</button>
    </div>
    <div class="circle-form" v-if="dfType">
      <img class="img-draw img-draw--def" src="../assets/crDEF.svg" alt />
      <div class="form-container">
        <label for>
          <input @change="size.circle.a=$event.target.value" type="text" :value="size.circle.a" />
          a
        </label>
        <label for>
          <input
            @change="size.circle.thick=$event.target.value"
            type="text"
            :value="size.circle.thick"
          />
          толщина листа
        </label>
        <label for>
          <input @change="size.circle.H=$event.target.value  " type="text" :value="size.circle.H" />
          D
        </label>
        <label for>
          <input @change="size.circle.l=$event.target.value" type="text" :value="size.circle.l" />
          l
        </label>
        <label for>
          <input
            @change="size.circle.alfa=$event.target.value"
            type="text"
            :value="size.circle.alfa"
          />
          alfa
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

    <div class="square-form" v-if="!dfType">
      <img class="img-draw img-draw--def" src="../assets/sqDEF.svg" alt />
      <div class="form-container">
        <label for>
          <input @change="size.square.a=$event.target.value" type="text" :value="size.square.a" />
          a
        </label>
        <label for>
          <input
            @change="size.square.thick=$event.target.value"
            type="text"
            :value="size.square.thick"
          />
          толщина листа
        </label>
        <label for>
          <input @change="size.square.A=$event.target.value" type="text" :value="size.square.A" />
          A - высота
        </label>
        <label for>
          <input @change="size.square.B=$event.target.value" type="text" :value="size.square.B" />
          B - ширина
        </label>

        <label for>
          <input @change="size.square.l=$event.target.value" type="text" :value="size.square.l" />
          l
        </label>
        <label for>
          <input
            @change="size.square.alfa=$event.target.value"
            type="text"
            :value="size.square.alfa"
          />
          alfa
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

    <div class="square-form" v-if="!dfType"></div>
    <div class="footer">
      <button class="btn btn__calc" @click="calcMass">Рассчитать массу</button>

      <p v-if="dfType">Масса круглого дефлектора :{{size.circle.mass}} кг</p>
      <p v-if="!dfType">Масса квадратного дефлектора :{{size.square.mass}}кг</p>
    </div>
  </div>
</template>

<script>
import circleDefMass from "../helpers/circleDefMass";
import squareDefMass from "../helpers/squareDefMass";
export default {
  data() {
    return {
      dfType: false,
      size: {
        circle: {
          a: 40,
          thick: 10,
          H: 200,
          l: 137.04,
          alfa: 10,
          dens: 7850,
          mass: 0,
        },
        square: {
          a: 40,
          thick: 10,
          A: 200,
          B: 200,
          l: 137.04,
          alfa: 10,
          dens: 7850,
          mass: 0,
        },
      },
    };
  },

  methods: {
    calcMass() {
      if (this.dfType) {
        this.size.circle.mass = circleDefMass(
          this.size.circle.a,
          this.size.circle.thick,
          this.size.circle.H,
          this.size.circle.l,
          this.size.circle.alfa,
          this.size.circle.dens
        );
      } else {
        this.size.square.mass = squareDefMass(
          this.size.square.a,
          this.size.square.thick,
          this.size.square.A,
          this.size.square.B,
          this.size.square.l,
          this.size.square.alfa,
          this.size.square.dens
        );
      }
    },
  },
};
</script>
