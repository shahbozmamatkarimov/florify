<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5 pb-20">
    <h1 class="font-bold mb-5">{{ $t("terms_of_use[0]") }}</h1>
    <p>{{ $t("terms_of_use[1][1][1]") }}</p>
    <p>{{ $t("terms_of_use[1][1][2]") }}</p>
    <p>{{ $t("terms_of_use[1][1][3]") }}</p>
    <p>{{ $t("terms_of_use[1][1][4]") }}</p>
    <p>{{ $t("terms_of_use[1][1][5]") }}</p>
    <p>{{ $t("terms_of_use[1][1][6]") }}</p>
    <p>{{ $t("terms_of_use[1][1][7]") }}</p>
    <p>{{ $t("terms_of_use[1][1][8]") }}</p>
    <p>{{ $t("terms_of_use[1][1][9]") }}</p>
    <p>{{ $t("terms_of_use[1][1][10]") }}</p>
    <p>{{ $t("terms_of_use[1][1][11]") }}</p>
    <p>{{ $t("terms_of_use[1][1][12]") }}</p>
    <p>{{ $t("terms_of_use[1][1][13]") }}</p>
    <p>{{ $t("terms_of_use[1][1][14]") }}</p>
    <p>{{ $t("terms_of_use[1][1][15]") }}</p>
    <p>{{ $t("terms_of_use[1][1][16]") }}</p>
    <p>{{ $t("terms_of_use[1][1][17]") }}</p>
    <p>{{ $t("terms_of_use[1][1][19]") }}</p>
    <p>{{ $t("terms_of_use[1][1][20]") }}</p>
    <p>{{ $t("terms_of_use[1][1][21]") }}</p>
    <p>{{ $t("terms_of_use[1][1][22]") }}</p>
    <p>{{ $t("terms_of_use[1][1][23]") }}</p>
    <p>{{ $t("terms_of_use[1][1][24]") }}</p>

    <h1 class="font-bold">{{ $t("terms_of_use[1][2][0]") }}</h1>
    <p>{{ $t("terms_of_use[1][2][1][0]") }}</p>
    <p>{{ $t("terms_of_use[1][2][1][1]") }}</p>
    <p>{{ $t("terms_of_use[1][2][1][2]") }}</p>
    <p>{{ $t("terms_of_use[1][2][1][3]") }}</p>

    <h1 class="font-bold">{{ $t("terms_of_use[1][3][0]") }}</h1>
    <div>
      <p>{{ $t("terms_of_use[1][3][1][0]") }}</p>
      <p>{{ $t("terms_of_use[1][3][1][1]") }}</p>
      <p>{{ $t("terms_of_use[1][3][1][2]") }}</p>
      <p>{{ $t("terms_of_use[1][3][1][3]") }}</p>
      <p>{{ $t("terms_of_use[1][3][1][4]") }}</p>
      <p>{{ $t("terms_of_use[1][3][1][5]") }}</p>
      <p>{{ $t("terms_of_use[1][3][1][6]") }}</p>
      <p>{{ $t("terms_of_use[1][3][1][7]") }}</p>
      <p>{{ $t("terms_of_use[1][3][1][8]") }}</p>
    </div>

    <h1 class="font-bold">{{ $t("terms_of_use[1][4][0]") }}</h1>
    <div>
      <p>{{ $t("terms_of_use[1][4][1][0]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][1]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][2]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][3]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][4]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][5]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][6]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][7]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][8]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][9]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][10]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][11]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][12]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][13]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][14]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][15]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][16]") }}</p>
      <p>{{ $t("terms_of_use[1][4][1][17]") }}</p>
    </div>

    <h1 class="font-bold">{{ $t("terms_of_use[1][5][0]") }}</h1>
    <div>
      <p>{{ $t("terms_of_use[1][5][1][0]") }}</p>
      <p>{{ $t("terms_of_use[1][5][1][1]") }}</p>
      <p>{{ $t("terms_of_use[1][5][1][2]") }}</p>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Terms of Use",
  meta: [{ name: "florify", content: "terms of use" }],
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}

p {
  font-size: 20px;
}

div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
}
</style>
