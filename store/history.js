import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useHistoryStore = defineStore("history", () => {
  const authStore = useAuthStore();
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.baseURL;

  const store = reactive({
    allHistory: "",
    isLoading: true,
    currentPage: 0,
    total_count: 0,
    total_pages: 0,
    page: 1,
  });

  function getHistory() {
    store.isLoading = true;
    const client_id = localStorage.getItem("user_id");
    fetch(baseUrl + "/watched/clientId/" + client_id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        store.allHistory = res;
        store.isLoading = false;
      })
      .catch((err) => {
        store.isLoading = false;
        console.log(err);
      });
  }

  function addToWatched(product_id) {
    const client_id = localStorage.getItem("user_id");
    fetch(baseUrl + "/watched", {
      method: "POST",
      body: JSON.stringify({
        client_id,
        product_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        document.getElementById(id)?.classList?.toggle("hidden");
        document.getElementById("id" + id)?.classList?.toggle("hidden");
        authStore.store.loginModal = true;
        console.log(err);
      });
  }

  return { store, getHistory, addToWatched };
});
