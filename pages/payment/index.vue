<template>
  <main></main>
</template>

<script setup>
import { usePaymentStore } from "@/store";
definePageMeta({
  layout: false,
});

const usePayment = usePaymentStore();

const router = useRouter();

const paymentStatus = ref(null);
const initiatePayment = async (orderDetails) => {
  // Call your backend API to get payment details
  try {
    const widget = new cp.CloudPayments();
    console.log(router.currentRoute.value.query.amount);
    usePayment.payment.amount = +router.currentRoute.value.query.amount;
    usePayment.payment.order_id = router.currentRoute.value.query.order_id;
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
  } catch (error) {
    console.error("Error initiating payment:", error);
    paymentStatus.value = "error";
  }
};

function pay() {
  const orderDetails = {
    amount: "data.amount",
    currency: "USD", // Change as per your requirement
    accountId: "data.accountId",
    invoiceId: "data.invoiceId",
  };

  initiatePayment(orderDetails);
}

onMounted(() => {
  pay();
});
</script>

<style lang="scss" scoped></style>
