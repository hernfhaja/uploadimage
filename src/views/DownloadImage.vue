<template>
  <div id="downloadImage">
    <h1>Download Image</h1>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :color="counterThemeColorClass"
          fab
          ripple
          v-bind="attrs"
          v-on="on"
          @click.prevent="downloadResumePdf"
        >
          <v-icon :color="themeColorClass" x-large
            >mdi-file-account-outline</v-icon
          >
        </v-btn>
      </template>
      <span class="font-weight-bold">download resume</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "downloadImage",
  components: {},
  methods: {},
};
</script>
