<template>
  <div
    id="app "
    class="bg-cover bg-gradient-to-l from-cyan-200 to-blue-400 ... absolute top-0 right-0 bottom-0 left-0 p-5"
  >
    <div id="nav" class="" style="display: none">
      <router-link to="/">upload</router-link> |
      <router-link to="/download">download</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
