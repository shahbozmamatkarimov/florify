import { defineStore } from "pinia";
import axios from "axios";

export const useLoadingStore = defineStore("loading", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;

  const store = reactive({
    loadingTypes: [],
    page: 1,
    limit: 8,
    isOpen: false,
  });

  function addLoading(type) {
    if (!store.loadingTypes?.includes(type)) {
      store.loadingTypes.push(type);
    }
  }

  function removeLoading(type) {
    if (store.loadingTypes?.includes(type)) {
      store.loadingTypes = store.loadingTypes?.filter(
        (loading) => loading !== type
      );
    }
  }

  function isLoadingType(type) {
    return store.loadingTypes?.includes(type);
  }

  return { store, addLoading, removeLoading, isLoadingType };
});
