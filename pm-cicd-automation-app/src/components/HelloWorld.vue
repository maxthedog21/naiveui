<template>
  <n-button> naive-ui </n-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui';
export default defineComponent({
   name: "Test",
   components: {
     NButton
   }
 })
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
