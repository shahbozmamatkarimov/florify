<template>
  <main></main>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const paymentStatus = ref(null);
const initiatePayment = async (orderDetails) => {
  // Call your backend API to get payment details
  try {
    const widget = new cp.CloudPayments();
    widget.pay(
      "auth", // или 'charge'
      {
        //options
        publicId: "test_api_00000000000000000000001", //id из личного кабинета
        description: "Оплата товаров в florify.uz", //назначение
        amount: 10, //сумма
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
          //действие при успешной оплате
        },
        onFail: function (reason, options) {
          console.log(reason, options, "options2");
          // fail
          // действие при неуспешной оплате
        },
        onComplete: function (paymentResult, options) {
          console.log(paymentResult, options, "options3");
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

onBeforeMount(() => {
  pay();
});
</script>

<style lang="scss" scoped></style>
