import Vue from "vue";
import VueRouter from "vue-router";
import UploadImage from "../views/UploadImage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: UploadImage,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
