import Vue from "vue";
import VueRouter from "vue-router";
import UploadImage from "../views/UploadImage.vue";
import DownloadImage from "../views/DownloadImage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "uploadImage",
    component: UploadImage,
  },
  {
    path: "/download",
    name: "download",
    component: DownloadImage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
