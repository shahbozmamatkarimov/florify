<template>
  
</template>

<script setup>
import axios from "axios";
import { useProductsStore, useImageCountStore, useAuthStore } from "@/store";

const productStore = useProductsStore();
const authStore = useAuthStore();
const useImageCounter = useImageCountStore();
const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));

function addToLike(id, isLiked) {
  document.getElementById(id)?.classList?.toggle("hidden");
  document.getElementById("id" + id)?.classList?.toggle("hidden");

  let method = "POST";
  if (isLiked == "nolike") {
    method = "POST";
  } else {
    method = "DELETE";
  }
  let product_id = id;
  const client_id = localStorage.getItem("user_id");
  axios
    .post(baseUrl + "/like", {
      client_id,
      product_id,
    })
    .then((res) => {
      console.log(res.data);
      if (res.data.statusCode === 400) {
        document.getElementById(id)?.classList?.toggle("hidden");
        document.getElementById("id" + id)?.classList?.toggle("hidden");
        authStore.store.loginModal = true;
      }
    })
    .catch((err) => {
      document.getElementById(id)?.classList?.toggle("hidden");
      document.getElementById("id" + id)?.classList?.toggle("hidden");
      authStore.store.loginModal = true;
      console.log(err);
    });
}

watch(()=> productStore.state.sliderStep, ()=> {
     const image = document.querySelector(".mainSlider");
    image.style.transform = `translateX(-${
      productStore.state.sliderStep * 100
    }%)`;
})

onMounted(() => {
  productStore.getAllProducts();
  useImageCounter.imageCount();
});
</script>

<style lang="scss" scoped>
@media (max-width: 580px) {
  .card .img {
    height: 9rem;
  }
}

@media (max-width: 500px) {
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .card .img {
    height: 12rem;
  }
  .carousel {
    height: 10rem;
  }
  .filter {
    gap: 1.4rem;
  }
  .filter select {
    font-size: 16px;
    padding: 0 30px 0 5px;
    border-radius: 5px;
  }

  .filter select:first-child {
    padding-left: 10px;
  }
}

@media (max-width: 400px) {
  .filter {
    gap: 0.5rem;
  }
  .filter select {
    font-size: 10px;
    padding: 0 30px 0 5px;
    border-radius: 5px;
  }
}

@media (max-width: 450px) {
  .card .img {
    height: 10rem;
  }
}

@media (max-width: 350px) {
  .card .img {
    height: 9rem;
  }
  .cards {
    gap: 0.5rem;
  }
}
</style>
