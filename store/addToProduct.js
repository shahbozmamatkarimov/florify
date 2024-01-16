import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore } from "@/store";
export const useAddToCartStore = defineStore("addtocart", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();

  const store = reactive({
    totalCount: 0,
    products: "",
    total_price: 0,
  });

  const addcart = reactive({
    client_id: "",
    product_id: "",
  });

  function totalPrice() {
    store.total_price = 0;
    for (let i = 0; i < store.products.length; i++) {
      console.log(store.products[i]);
      store.total_price +=
        store.products[i].price * store.products[i].client_quantity;
    }
  }

  function addToCart() {
    let product = JSON.parse(localStorage.getItem("addToCart")) || [];
    let is_defined = false;
    for (let i = 0; i < product.length; i++) {
      if (product[i].id == addcart.product_id) {
        product[i].client_quantity += 1;
        localStorage.setItem("addToCart", JSON.stringify(product));
        is_defined = true;
      }
    }

    if (is_defined) {
      return;
    }

    axios
      .get(baseUrl + `/product/id/${addcart.product_id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data?.statusCode == 200) {
          res.data.data.product.client_quantity = 1;
          product.push(res.data?.data?.product);
          localStorage.setItem("addToCart", JSON.stringify(product));
          store.totalCount = product?.length;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAddToCart() {
    store.products = JSON.parse(localStorage.getItem("addToCart")) || [];
    isLoading.addLoading("addToCarts");
    totalPrice();
  }

  return { store, addcart, addToCart, getAddToCart, totalPrice };
});
