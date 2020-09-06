<template >
  <div>
    <form action>
      <!-- <label v-for="item in Object.value(size)" :key="item.name" for></label> -->
      <!-- <h1>{{title}}</h1> -->
    </form>
  </div>
</template>


<script>
console.log();
export default {
  props: {
    size: Object,
    title: String,
  },
};
</script>
