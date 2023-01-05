<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import RequestDataTable from './components/RequestTable.vue';
import RequestView from './views/RequestView.vue';
import { NGrid } from "naive-ui";
</script>

<template>
  <RequestView></RequestView>
</template>

<style scoped>
</style>
