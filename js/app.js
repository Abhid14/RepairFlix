// framework7
var $$ = Dom7;
app = new Framework7({
  id: "RepairFlix",
  root: "#app",
  theme: "md",
  routes,
});
// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyAqh32TWjbBZUNVAUxW_vwTsJMsWxNq5os",
  authDomain: "repairflixapi.firebaseapp.com",
  projectId: "repairflixapi",
  storageBucket: "repairflixapi.appspot.com",
  messagingSenderId: "595252406764",
  appId: "1:595252406764:web:71c2361b7e1e56135ef8c9"
};
firebase.initializeApp(firebaseConfig);
let isAuthenticated = false;
setTimeout(function () {
  if (!isAuthenticated) {
    document.getElementById("intro").click();
  }
}, 300);
function getNext(n) {
  globalThis.swiper = document.querySelector(".swiper-container").swiper;
  if (n > 0) {
      globalThis.swiper = document.querySelector(".swiper-login").swiper;
      swiper.slideTo(n);
  } else {
      swiper.slideNext();
  }
}