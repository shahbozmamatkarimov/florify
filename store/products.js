import axios from "axios";
import { defineStore } from "pinia";
import { useLoadingStore } from "./isLoading";

export const useProductsStore = defineStore("products", () => {
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();

  const state = reactive({
    categories: [],
    products: [],
    isLoading: true,
    currentPage: 0,
    total_count: 0,
    total_pages: 0,
    page: 1,
    showProduct: [],
    getById: "",
    isCategory: 0,
    sliderStep: 0,
    openEditModal: false,
    getDataCount: 0,
    categoryPageId: "",
    isTodays: false,
    todaysSlider: false,
    addToProductDrawer: false,
  });

  const search = reactive({
    search: "",
  })

  const todays = reactive({
    pagination: {
      currentPage: 1,
      total_pages: 1,
    },
    page: 1,
  });

  const allProducts = computed(() => state.products);
  const showProductById = computed(() => state.categories);

  async function getAllProducts() {
    isLoading.addLoading("getAllProducts");
    state.products = {};
    let step;
    let url;
    axios
      .get(baseUrl + "/category")
      .then((res) => {
        console.log(res.data);
        state.categories = res.data;
        state.isLoading = false;
        state.getDataCount = 0;
        state.getDataCount = res.data?.length;
        for (let i = 0; i < state.getDataCount; i++) {
          getProductByCategoryId(res.data[i].id, 1, i);
        }

        if (router.currentRoute.value.query?.categories == "todays") {
          console.log(res.data);
          router.push("/?categories=todays");
          getTodays();
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getProductByCategoryId(id, page, index) {
    console.log(page);
    isLoading.addLoading("getProductByCategory");
    axios
      .get(
        baseUrl + `/product/categoryId/${id}:${page}:${isLoading.store.limit}`
      )
      .then((res) => {
        const client_id = localStorage.getItem("user_id");
        if (client_id) {
          for (let i = 0; i < res.data.data.records?.length; i++) {
            for (let like of res.data.data.records[i].likes) {
              if (like.client_id == client_id) {
                res.data.data.records[i].likes = true;
                break;
              }
            }
          }
        } else {
          for (let i = 0; i < res.data.data.records?.length; i++) {
            for (let like of res.data.data.records[i].likes) {
              res.data.data.records[i].likes = false;
              break;
            }
          }
        }
        if (page !== 1) {
          let old_data = state.products[id]?.data.records || [];
          res.data.data.records = [...old_data, ...res.data.data.records];
        }
        console.log(res.data);
        state.products[id] = res.data;
        console.log(res.data);
        isLoading.removeLoading("getProductByCategory");
        if (index + 1 === state.getDataCount) {
          isLoading.removeLoading("getAllProducts");
        }
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getProductByCategory");
      });
  }

  function getTodays() {
    isLoading.addLoading("getProductByCategory");

    axios
      .get(
        baseUrl +
          `/product/present/${todays.pagination.currentPage}:${isLoading.store.limit}`
      )
      .then((res) => {
        console.log(res.data);
        todays.pagination = res.data?.data.pagination;
        if (todays.pagination.currentPage == 1) {
          console.log(state.categories);
          state.showProduct = [];
          state.todaysSlider = true;
        }
        state.showProduct.push(...res.data?.data.records);
        isLoading.removeLoading("getProductByCategory");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getProductByCategory");
      });
  }

  function getOneProduct(id, index) {
    if (!state.categories?.length) {
      getAllProducts()
    }
    state.categoryPageId = index - 1;
    state.isCategory = index;
    state.sliderStep = index;
    if (index == 0) {
      getAllProducts();
      state.isTodays = true;
      return;
    }
    state.isTodays = false;
    state.openEditModal = true;
    state.isLoading = true;
    if (id == "today") {
      router.push("/?categories=todays");
      getTodays();
      return;
    }
    router.push(
      `/?page=${state.categoryPageId + 1}&categories=${
        state.categories[state.categoryPageId].en
      }`
    );
    getProductByCategoryId(id, 1);
  }

  function getById(id) {
    state.isLoading = true;
    axios
      .get(baseUrl + `/product/getById/${id}`)
      .then((res) => {
        console.log(res.data);
        state.getById = res.data;
        state.isLoading = false;
      })
      .catch((err) => {
        state.isLoading = false;
        console.log(err);
      });
  }

  return {
    state,
    getAllProducts,
    getOneProduct,
    getTodays,
    allProducts,
    showProductById,
    getProductByCategoryId,
    getById,
    todays,
    search,
  };
});
