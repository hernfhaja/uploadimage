<template>
  <div id="app">
    <UploadImage />
    <div
      id="my-strictly-unique-vue-upload-multiple-image"
      style="display: flex; justify-content: center"
    >
      <VueUploadMultipleImage
        @upload-success="uploadImageSuccess"
        @before-remove="beforeRemove"
        @edit-image="editImage"
        @mark-is-primary="markIsPrimary"
        @limit-exceeded="limitExceeded"
        id-upload="myIdUpload"
        id-edit="myIdEdit"
        :data-images="images"
        :max-image="20"
        primary-text=""
        browse-text="คลิกตรงนี้เพื่อส่งรูป"
        mark-is-primary-text="ให้เป็นรูปแรก"
        popup-text="รูป"
        dragText="กรุณาเลือกรูปของท่าน"
        :multiple="true"
        :show-edit="true"
        :show-delete="true"
        :show-add="true"
      />
    </div>

    <button @click="onUpload">upload</button>
  </div>
</template>

<script>
import UploadImage from "./components/UploadImage.vue";
import VueUploadMultipleImage from "vue-upload-multiple-image";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";

export default {
  name: "App",
  components: {
    UploadImage,
    VueUploadMultipleImage,
  },
  data() {
    return {
      images: [{ image: 1, id: 1 }],
      test: { name: "hahah", id: 12 },
    };
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("formData", formData);
      console.log("index", index);
      console.log("fileList", fileList[0]);
    },
    beforeRemove(index, removeCallBack) {
      console.log("index", index);
      var r = confirm("remove image");
      if (r == true) {
        removeCallBack();
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    markIsPrimary(index, fileList) {
      console.log("markIsPrimary data", index, fileList);
    },
    limitExceeded(amount) {
      console.log("limitExceeded data", amount);
    },
    onUpload(e) {
      console.log(e);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
