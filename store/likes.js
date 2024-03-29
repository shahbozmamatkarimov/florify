import { defineStore } from "pinia";
import { useAuthStore, useLoadingStore } from "@/store";
import axios from "axios";

export const useLikeStore = defineStore("add_to_like", () => {
  const authStore = useAuthStore();
  const isLoading = useLoadingStore();
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.baseURL;

  const store = reactive({
    allFavorites: [],
    isLoading: true,
    pagination: {
      currentPage: 1,
      total_count: 1,
      total_pages: 1,
    },
  });

  function getFavorites() {
    isLoading.addLoading("getAllFavorites");
    const client_id = isLoading.store.salesman_id;
    axios
      .get(
        baseUrl +
          `/like/pagination/${client_id}/${store.pagination.currentPage}/${isLoading.store.limit}`
      )
      .then((res) => {
        console.log(res.data);
        const client_id = isLoading.store.salesman_id;
        if (client_id) {
          for (let i = 0; i < res.data.data.records?.length; i++) {
            console.log(i);
            res.data.data.records[i].product.likes = true;
          }
        }
        store.allFavorites.push(...res.data.data.records);
        store.pagination = res.data.data.pagination;
        isLoading.removeLoading("getAllFavorites");
      })
      .catch((err) => {
        isLoading.removeLoading("getAllFavorites");
        console.log(err);
      });
  }

  return { store, getFavorites };
});
