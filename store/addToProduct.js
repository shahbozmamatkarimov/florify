import { defineStore } from "pinia";
import axios from "axios";

export const useAddToCartStore = defineStore("addtocart", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;

  const store = reactive({});

  const addcart = reactive({
    client_id: "",
    product_id: "",
  });

  function addToCart() {
    axios
      .post(baseUrl + "/cart", addcart)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { store, addToCart, addcart };
});
