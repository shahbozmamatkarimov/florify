import { defineStore } from "pinia";
import axios from "axios";

export const usePaymentStore = defineStore("payment", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const router = useRouter();

  const payment = reactive({
    id: "",
    order_id: "",
    amount: "",
    currency: "UZS",
    info: {
      email: "",
      data: {
        myProp: "myProp",
      },
    },
    status: "",
  });

  function sendPaymentData() {
    const token = localStorage.getItem("token");
    axios
      .post(baseUrl + "/transaction/pay", payment, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        if (res.data?.data?.transaction?.status == "FAIL") {
          localStorage.setItem(
            `transaction_id${payment.order_id}`,
            res.data.data.transaction.id
          );
        } else if (res.data?.data?.transaction?.status == "SUCCESS") {
          localStorage.removeItem("addToCart");
        }
        router.push("/orders");
      })
      .catch((err) => {
        console.log(err);
        router.push("/orders");
      });
  }

  return { payment, sendPaymentData };
});
