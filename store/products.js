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
    salesmanProduct: [],
    salesman_pagination: {
      currentPage: 1,
    },
    getById: "",
    isCategory: 0,
    sliderStep: 0,
    openEditModal: false,
    getDataCount: 0,
    categoryPageId: "",
    isTodays: false,
    todaysSlider: false,
    addToProductDrawer: false,
    search_products: [],
    isSearchingModal: false,
    isAddressModal: false,
    addvertising: "",
    salesmanProducts: [],
    menu: false,
  });

  const search = reactive({
    search: "",
    pagination: {},
  });

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
        res = res.data;
        if (!res.data.statusCode == 200) {
          isLoading.removeLoading("getAllProducts");
          return;
        }
        state.categories = res.data.categories;
        state.isLoading = false;
        state.getDataCount = 0;
        state.getDataCount = res.data.categories?.length;
        for (let i = 0; i < state.getDataCount; i++) {
          getProductByCategoryId(res.data.categories[i].id, 1, i);
        }
        if (router.currentRoute.value.query?.categories == "todays") {
          console.log(res.data);
          router.push("/?categories=todays");
          getTodays();
          return;
        }
      })
      .catch((err) => {
        isLoading.removeLoading("getAllProducts");
        console.log(err);
      });
  }

  function getProductByCategoryId(id, page, index) {
    isLoading.addLoading("getProductByCategory");
    const client_id = isLoading.store.salesman_id;
    axios
      .get(
        baseUrl + `/product/categoryId/${id}/${page}/${isLoading.store.limit}`
      )
      .then((res) => {
        console.log(res);

        if (client_id) {
          for (let i = 0; i < res.data.data.records?.length; i++) {
            for (let like of res.data.data?.records[i]?.likes) {
              if (like.client_id == client_id) {
                res.data.data.records[i].likes = true;
                break;
              }
            }
          }
        } else {
          for (let i = 0; i < res.data.data.records?.length; i++) {
            for (let like of res.data.data.records[i]?.likes) {
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
        console.log(state.products);
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

  function searchProduct(is_show) {
    state.isSearchingModal = true;
    if (is_show != "show_more") {
      search.pagination.currentPage = 1;
    }
    isLoading.addLoading("getSearchProducts");
    axios
      .get(
        baseUrl +
          `/product/search/${search.pagination.currentPage}?query=${search.search}`
      )
      .then((res) => {
        console.log(res);
        if (is_show == "show_more") {
          state.search_products.push(...res.data?.data?.records);
        } else {
          state.search_products = res.data?.data?.records;
        }
        search.pagination = res.data?.data?.pagination;
        isLoading.removeLoading("getSearchProducts");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getSearchProducts");
      });
  }

  function getAdvertising() {
    isLoading.addLoading("getAdvertising");
    axios
      .get(baseUrl + "/advertising")
      .then((res) => {
        console.log(res);
        isLoading.removeLoading("getAdvertising");
        state.addvertising = res.data?.data?.advertisings;
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getAdvertising");
      });
  }

  function getSalesmanProCategory(category_id, salesman_id) {
    isLoading.addLoading("getSalesmanProCategory");
    axios
      .get(
        baseUrl +
          `/product/salesmanIdCategoryId/${salesman_id}/${category_id}/${state.salesman_pagination.currentPage}/10`
      )
      .then((res) => {
        console.log(res);
        isLoading.removeLoading("getSalesmanProCategory");
        state.salesman_pagination = res.data?.data?.pagination;

        const client_id = isLoading.store.salesman_id;
        if (client_id) {
          for (let i = 0; i < res.data.data.records?.length; i++) {
            for (let like of res.data.data?.records[i]?.likes) {
              if (like.client_id == client_id) {
                res.data.data.records[i].likes = true;
                break;
              }
            }
          }
        } else {
          for (let i = 0; i < res.data.data.records?.length; i++) {
            for (let like of res.data.data.records[i]?.likes) {
              res.data.data.records[i].likes = false;
              break;
            }
          }
        }

        if (state.salesman_pagination.currentPage == 2) {
          state.salesmanProduct.push(...res.data?.data?.records);
        } else {
          state.salesmanProduct = res.data?.data?.records;
        }
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getSalesmanProCategory");
      });
  }

  function getTodays() {
    isLoading.addLoading("getProductByCategory");

    axios
      .get(
        baseUrl +
          `/product/presents/${todays.pagination.currentPage}/${isLoading.store.limit}`
      )
      .then((res) => {
        console.log(res.data);
        todays.pagination = res.data?.data.pagination;
        if (todays.pagination.currentPage == 1) {
          console.log(state.categories);
          state.showProduct = [];
          state.todaysSlider = true;
        }
        const client_id = isLoading.store.salesman_id;

        if (client_id) {
          for (let i = 0; i < res.data.data.records?.length; i++) {
            for (let like of res.data.data?.records[i]?.likes) {
              if (like.client_id == client_id) {
                res.data.data.records[i].likes = true;
                break;
              }
            }
          }
        } else {
          for (let i = 0; i < res.data.data.records?.length; i++) {
            for (let like of res.data.data.records[i]?.likes) {
              res.data.data.records[i].likes = false;
              break;
            }
          }
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
      getAllProducts();
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
        state.categories[state.categoryPageId].uz
      }`
    );
    console.log("object");
    getProductByCategoryId(id, 1);
  }

  function getById(id) {
    const client_id = isLoading.store.salesman_id;
    state.isLoading = true;
    axios
      .get(baseUrl + `/product/id/${id}`)
      .then((res) => {
        console.log(res.data);
        getSalesmanProducts(res.data.data?.product.salesman_id);
        state.getById = res.data.data.product;
        state.isLoading = false;

        if (client_id) {
          for (let like of state.getById?.likes) {
            if (like?.client_id == client_id) {
              state.getById.likes = true;
              break;
            }
          }
        } else {
          state.getById.likes = false;
        }
        console.log(state.getById);
      })
      .catch((err) => {
        state.isLoading = false;
        console.log(err);
      });
  }

  function getSalesmanProducts(salesmanId) {
    isLoading.addLoading("getSalesmanProducts");
    const client_id = isLoading.store.salesman_id;
    axios
      .get(baseUrl + `/product/salesmanId/${salesmanId}/1/25/on_sale`)
      .then((res) => {
        if (
          res.message === "Token vaqti tugagan!" ||
          res.message === "Token topilmadi!"
        ) {
          router.push("/login");
        }
        console.log(res);
        state.salesmanProducts = res.data?.data?.records;
        if (client_id) {
          for (let i = 0; i < state.salesmanProducts?.length; i++) {
            for (let like of state.salesmanProducts[i]?.likes) {
              if (like.client_id == client_id) {
                state.salesmanProducts[i].likes = true;
                break;
              }
            }
          }
        } else {
          for (let i = 0; i < state.salesmanProducts?.length; i++) {
            for (let like of state.salesmanProducts[i]?.likes) {
              state.salesmanProducts[i].likes = false;
              break;
            }
          }
        }
        isLoading.removeLoading("getSalesmanProducts");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getSalesmanProducts");
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
    searchProduct,
    getAdvertising,
    getSalesmanProducts,
    getSalesmanProCategory,
  };
});
