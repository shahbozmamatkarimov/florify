import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const useHistoryStore = defineStore("watched", () => {
  const isLoading = useLoadingStore();
  const authStore = useAuthStore();
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.baseURL;

  const store = reactive({
    allHistory: [],
    isLoading: true,
    pagination: {
      currentPage: 1,
      total_count: 1,
      total_pages: 1,
    },
  });

  function getHistory() {
    isLoading.addLoading("getAllHistory");
    const client_id = isLoading.store.salesman_id;
    axios
      .get(
        baseUrl +
          `/watched/pagination/${store.pagination.currentPage}/${isLoading.store.limit}`
      )
      .then((res) => {
        console.log(res.data);
        const client_id = isLoading.store.salesman_id;
        if (client_id) {
          for (let i = 0; i < res?.data?.data?.records?.length; i++) {
            for (let like of res.data?.data?.records[i]?.product?.likes) {
              if (like.client_id == client_id) {
                res.data.data.records[i].product.likes = true;
                break;
              }
            }
          }
        } else {
          for (let i = 0; i < res?.data?.data?.records?.length; i++) {
            for (let like of res.data?.data?.records[i]?.product?.likes) {
              res.data.data.records[i].product.likes = false;
              break;
            }
          }
        }
        console.log(res);
        store.allHistory.push(...res.data?.data?.records);
        store.pagination = res.data?.data?.pagination;
        isLoading.removeLoading("getAllHistory");
      })
      .catch((err) => {
        isLoading.removeLoading("getAllHistory");
        console.log(err);
      });
  }

  function addToWatched(product_id) {
    const client_id = isLoading.store.salesman_id;
    if (client_id) {
      axios
        .post(baseUrl + "/watched", {
          client_id,
          product_id,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          if (
            err.response.data.message ==
            "Mahsulot allaqachon ko'rilganlar ro'yxatiga qo'shilgan!"
          ) {
            return;
          }
          authStore.store.loginModal = true;
          console.log(err);
        });
    }
  }

  function getUserHistory() {
    isLoading.addLoading("getAllHistory");
    const client_id = isLoading.store.salesman_id;
    axios
      .get(baseUrl + `/watched/pagination/1/25`)
      .then((res) => {
        console.log(res, '----------------------------------------------------------------');
        const client_id = isLoading.store.salesman_id;
        if (client_id) {
          for (let i = 0; i < res.data.data.records?.length; i++) {
            for (let like of res.data.data.records[i].product.likes) {
              if (like.client_id == client_id) {
                res.data.data.records[i].product.likes = true;
                break;
              }
            }
          }
        } else {
          for (let i = 0; i < res.data.data.records?.length; i++) {
            for (let like of res.data.data.records[i].product.likes) {
              res.data.data.records[i].product.likes = false;
              break;
            }
          }
        }
        store.allHistory = res.data.data.records;
        isLoading.removeLoading("getAllHistory");
      })
      .catch((err) => {
        isLoading.removeLoading("getAllHistory");
        console.log(err);
      });
  }

  return { store, getHistory, addToWatched, getUserHistory };
});
