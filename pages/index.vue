<template>
  <div class="bg-blue">
    <p>index page</p>
    <p>name:{{ name }}</p>
  </div>
</template>
<script setup lang="ts">
const store = useUser();
const { name: name } = storeToRefs(store);
</script>
