import { defineStore } from "pinia";

export const useAuthStore = defineStore("isLogged", () => {
  const router = useRouter();
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.baseURL;

  const store = reactive({
    phone: "+998",
    otp: [],
    loginModal: false,
    otpModal: false,
    isVerified: true,
    isLoading: false,
  });

  function handleSubmit() {
    store.loginModal = true;
    store.isLoading = true;
    console.log(store.phone);
    fetch(baseUrl + "/client/sendSMS", {
      method: "POST",
      body: JSON.stringify({
        phone: store.phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message == "Telefon raqamingizga tasdiqlash kodi yuborildi") {
          store.loginModal = false;
          store.otpModal = true;
          store.isVerified = true;
        } else {
          store.isVerified = false;
        }
        store.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
        store.loginModal = false;
        store.isLoading = false;
      });
  }

  function verifyOtp() {
    store.isLoading = true;
    console.log(store.phone);
    console.log(store.otp);
    fetch(baseUrl + "/client/signup", {
      method: "POST",
      body: JSON.stringify({
        phone: store.phone,
        code: store.otp.join(""),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message === "Tizimga kirildi") {
          store.otpModal = false;
          store.isVerified = true;
          store.isLoading = false;
          console.log('object');
          localStorage.setItem("user_id", res.client.id);
          localStorage.setItem("phone", res.client.phone);
          return;
        }
        store.isVerified = false;
        store.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
        store.loginModal = true;
        store.otpModal = false;
      });
  }

  return { store, handleSubmit, verifyOtp };
});
