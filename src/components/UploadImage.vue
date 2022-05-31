<template>
  <div class="uploadImage">
    <!-- popup -->
    <div id="popup" class="popup" :style="{ display: popupData.display }">
      <h3>ส่งสำเร็จ</h3>
      <button @click="reloadPage">กด ส่งอีกรูป</button>
    </div>

    <!-- uploadimage -->
    <div class="text-3xl font-bold underline">
      <h1>ส่งรูป ผู้ร่วงลับ</h1>
      <div class="div-uploadImage">
        เลือกรูปภาพ
        <input
          id="uploadImage"
          class="input-uploadImage"
          type="file"
          @change="previewImage"
          accept="image/*"
        />
      </div>
    </div>
    <img id="uploadPreview" class="uploadPreview" />
    <div v-if="imageData != null">
      <p>
        ดำเนินการ: {{ uploadValue.toFixed() + "%" }}
        <progress id="progress" :value="uploadValue" max="100"></progress>
      </p>
      <br />
      <button @click="onUpload" class="button-sendImage">ส่งภาพ</button>
    </div>
  </div>
</template>
<script src="https://cdn.tailwindcss.com"></script>
<script>
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default {
  name: "uploadImage",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      storage: getStorage(),
      storageRef: null,
      popupData: {
        display: "none",
      },
    };
  },

  methods: {
    previewImage(event) {
      const oFReader = new FileReader();
      oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

      oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
      };

      this.uploadValue = 0;
      this.picture = event.file;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      const file = this.imageData;

      const storage = this.storage;
      const storageRef = ref(storage, `${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      const metadata = {
        contentType: "image/jpeg",
      };

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          this.uploadValue = progress;
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              console.log("storage/unauthorized", error.code);
              break;
            case "storage/canceled":
              // User canceled the upload
              console.log("storage/canceled", error.code);
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              console.log("storage/unknown", error.code);
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            this.picture = downloadURL;
          });
        }
      );

      this.openpopup();
    },
    openpopup() {
      this.popupData.display = "block";
    },
    closeFunction() {
      this.popupData.display = "none";
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style>
img.preview {
  width: 200px;
}

.div-uploadImage {
  padding: 5px 10px;
  background: #00ad2d;
  border: 1px solid #00ad2d;
  position: relative;
  color: #fff;
  border-radius: 2px;
  text-align: center;
  float: center;
  cursor: pointer;
}

.input-uploadImage {
  position: absolute;
  z-index: 1000;
  opacity: 0;
  cursor: pointer;
  right: 0;
  top: 0;
  height: 100%;
  font-size: 24px;
  width: 100%;
}

.uploadPreview {
  padding: 10px;
  width: 500px;
}

.button-sendImage {
  background: #00ad2d;
}

#popup {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 30%;
  height: 10%;
  top: 35%;
  border: black;
  left: 30%;
  background-color: rgba(241, 215, 173);
  border-radius: 5px;
}
</style>
