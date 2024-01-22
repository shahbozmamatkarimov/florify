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
    logOutModal: false,
    isUpdate: false,
    user: "",
    error: "",
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
          isLoading.store.name = res.data?.data?.client?.name;
          isLoading.store.isLogin = true;
          store.registerModal = false;
          store.otpModal = false;
          store.isVerified = true;
          store.isLoading = false;
          console.log("object");
          localStorage.setItem("name", isLoading.store.name);
          localStorage.setItem("token", res.data.token);
          store.registerModal = true;
          store.isVerified = true;
          return;
        } else {
          store.isVerified = false;
        }
        store.isVerified = false;
        store.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
        store.isLoading = false;
        store.isVerified = false;
      });
  }

  function updateUser(name) {
    isLoading.addLoading("updateUser");
    console.log(isLoading.store.salesman_id);
    axios
      .patch(
        baseUrl + `/client/${isLoading.store.salesman_id}`,
        {
          phone: store.user,
          name: name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        isLoading.removeLoading("updateUser");
        console.log(res.data);
        isLoading.store.name = res.data?.data?.client?.name;
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("updateUser");
      });
  }

  function getUser() {
    axios
      .get(baseUrl + `/client/${isLoading.store.salesman_id}`)
      .then((res) => {
        console.log(res.data.data.client, "--------------------------------");
        store.user = res.data.data.client?.phone;
        isLoading.store.name = res.data.data.client?.name;
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("updateUser");
      });
  }

  function logOut() {
    isLoading.store.salesman_id = "";
    isLoading.store.name = "";
    localStorage.removeItem("token");
    store.logOutModal = false;
    isLoading.store.isLogin = false;
  }

  return { store, handleSubmit, verifyOtp, logOut, updateUser, getUser };
});
