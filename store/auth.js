import { defineStore } from "pinia";
import axios from "axios";
import { useProductsStore } from "./products";
import { useLoadingStore } from "./isLoading";

export const useAuthStore = defineStore("isLogged", () => {
  const router = useRouter();
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.baseURL;
  const useProducts = useProductsStore();
  const isLoading = useLoadingStore();

  const store = reactive({
    phone: "+998",
    name: "",
    otp: [],
    loginModal: false,
    otpModal: false,
    isVerified: true,
    isLoading: false,
    registerModal: false,
  });

  function handleSubmit() {
    store.loginModal = true;
    store.isLoading = true;
    console.log(store.phone);
    axios
      .post(
        baseUrl + "/otp/sendOtp",
        {
          phone: store.phone,
          name: store.name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.statusCode == 201) {
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
    console.log(store.name);
    console.log(store.phone);
    console.log(store.otp);
    axios
      .post(
        baseUrl + "/client/register",
        {
          phone: store.phone,
          name: store.name,
          code: store.otp.join(""),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.statusCode == 201) {
        isLoading.store.salesman_id = res.data?.data?.client?.id;
          isLoading.store.isLogin = true;
          store.registerModal = false;
          store.otpModal = false;
          store.isVerified = true;
          store.isLoading = false;
          console.log("object");
          // localStorage.setItem("phone", res.data.data.client.phone);
          localStorage.setItem("token", res.data.token);
          store.registerModal = true;
          return;
        }
        store.isVerified = false;
        store.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
        store.isLoading = false;
      });
  }

  return { store, handleSubmit, verifyOtp };
});
