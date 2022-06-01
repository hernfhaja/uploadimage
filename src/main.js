import Vue from "vue";
import App from "./App.vue";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import router from "./router";
import "./index.css";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBuyakkpFZPQg-dOiEJ796w6MpZAlgNPo0",
  authDomain: "utidboon-d6b4c.firebaseapp.com",
  projectId: "utidboon-d6b4c",
  storageBucket: "utidboon-d6b4c.appspot.com",
  messagingSenderId: "132558938003",
  appId: "1:132558938003:web:fe88fea482e14774c7d266",
  measurementId: "G-1RK8SBKLKM",
};

// Initialize Firebase
/* eslint-disable */
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);

export default {
  components: {},
  app,
  analytics,
  auth,
  storage,
};
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
