<template>
  <div id="app">
    <UploadImage />
    <VueUploadMultipleImage
      @upload-success="uploadImageSuccess"
      @before-remove="beforeRemove"
      @edit-image="editImage"
      @mark-is-primary="markIsPrimary"
      @limit-exceeded="limitExceeded"
      :data-images="images"
      id-upload="myIdUpload"
      id-edit="myIdEdit"
      :max-image="20"
      primary-text="Default"
      browse-text="Drag pictures"
      mark-is-primary-text="Set as default"
      popup-text="รูป"
      :multiple="true"
      :show-edit="true"
      :show-delete="true"
      :show-add="true"
    />
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
import UploadImage from "./components/UploadImage.vue";
import VueUploadMultipleImage from "vue-upload-multiple-image";
// import googleapi from "googleapi";

// const { google } = require("googleapis");
// const path = require("path");
// const fs = require("fs");

// const CLIENT_ID =
//   "1079548728317-tg1d2na7pfqnqvorigjcd9koe95ek5qa.apps.googleusercontent.com";
// const CLIENT_SECRET = "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";
// const REDIRECT_URI = "https://developers.google.com/oauthplayground";
// const REFRESH_TOKEN =
//   "1//04xgw4yDGxWYkCgYIARAAGAQSNwF-L9IrNjxcd54k4I0bV_o7nOIRXyqv6hyFCXy3U_ttXx2ZNHI1x52tshuKxYSGA8S3ztit7vA";

// const oauth2Client = new google.auth.OAuth2(
//   CLIENT_SECRET,
//   REDIRECT_URI,
//   REFRESH_TOKEN
// );

// oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// const drive = google.drive({
//   version: "v3",
//   auth: oauth2Client,
// });

// const filePath = path.join(__dirname, "./assets/logo.png");

export default {
  name: "App",
  components: {
    UploadImage,
    VueUploadMultipleImage,
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("upload success data ", formData, index, fileList);
      // UploadImage api
      // axios
      //   .post("", formData)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      //google drive
      // async function uploadFile() {
      //   try {
      //     const res = await drive.files.crete({
      //       requestBody: {
      //         name: "logo.png",
      //         mimeType: "image/png",
      //       },
      //       media: {
      //         mimeType: "image/png",
      //         body: fs.createReadStream(filePath),
      //       },
      //     });
      //     console.log(response.data);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
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
