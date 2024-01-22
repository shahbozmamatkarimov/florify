<template>
  <main></main>
</template>

<script setup>
// import cp from 'cloudpayments';
import { usePaymentStore } from "@/store";

useHead({
  title: "Payment",
  meta: [{ name: "florify", content: "private info" }],
});

definePageMeta({
  layout: false,
});

const usePayment = usePaymentStore();

const router = useRouter();

const paymentStatus = ref(null);
const initiatePayment = async () => {
  // Call your backend API to get payment details
  // try {
    const widget = new cp.CloudPayments();
    console.log(router.currentRoute.value.query.amount);
    usePayment.payment.amount = +router.currentRoute.value.query.amount;
    usePayment.payment.order_id = +router.currentRoute.value.query.order_id;
    const is_cancelled = router.currentRoute.value.query.status;
    if (is_cancelled) {
      usePayment.payment.id = localStorage.getItem(
        `transaction_id${usePayment.payment.order_id}`
      );
    }
    widget.pay(
      "auth", // или 'charge'
      {
        //options 
        // 9860030321826932 06/26
        publicId: "test_api_00000000000000000000001", //id из личного кабинета
        description: "Оплата товаров в florify.uz", //назначение
        amount: +router.currentRoute.value.query.amount, //сумма
        currency: "UZS", //валюта
        accountId: "user@example.com", //идентификатор плательщика (необязательно)
        invoiceId: "1234567", //номер заказа  (необязательно)
        email: "user@example.com", //email плательщика (необязательно)
        skin: "mini", //дизайн виджета (необязательно)
        autoClose: 3, //время в секундах до авто-закрытия виджета (необязательный)
        data: {
          myProp: "myProp value",
        },
      },
      {
        onSuccess: function (options) {
          console.log(options, "options1");
          // success
        },
        onFail: function (reason, options) {
          console.log(reason, options, "options2");
          if (reason == "User has cancelled") {
            router.push("/orders");
          }
          // fail
          // действие при неуспешной оплате
        },
        onComplete: function (paymentResult, options) {
          console.log(paymentResult, options, "options3");
          usePayment.payment.info.email = paymentResult.email;
          usePayment.payment.status = paymentResult.success
            ? "SUCCESS"
            : "FAIL";
          usePayment.sendPaymentData();
          //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
          //например вызов вашей аналитики Facebook Pixel
        },
      }
    );
  // } catch (error) {
  //   console.error("Error initiating payment:", error);
  //   paymentStatus.value = "error";
  // }
};

function pay() {
  initiatePayment();
}

onMounted(() => {
  pay();
});
</script>

<style lang="scss" scoped></style>
