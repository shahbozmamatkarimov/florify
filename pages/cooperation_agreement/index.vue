<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5 pb-20">
    <h1 class="font-bold">{{ $t("cooperation[0][0]") }}</h1>
    <p>
      {{ $t("cooperation[0][1][0]") }}
    </p>

    <h1 class="font-bold">{{ $t("cooperation[1][0]") }}</h1>
    <p>
      {{ $t("cooperation[1][1][0]") }}
    </p>

    <h1 class="font-bold">{{ $t("cooperation[2][0]") }}</h1>
    <div>
      <p>
        {{ $t("cooperation[2][1][0]") }}
      </p>
      <p>
        {{ $t("cooperation[2][1][1]") }}
      </p>
      <p>
        {{ $t("cooperation[2][1][2]") }}
      </p>
      <p>
        {{ $t("cooperation[2][1][3]") }}
      </p>
    </div>

    <h1 class="font-bold">{{ $t("cooperation[2][0]") }}</h1>
    <div>
      <p>
        {{ $t("cooperation[2][1][0]") }}
      </p>
      <p>
        {{ $t("cooperation[2][1][1]") }}
      </p>
      <p>
        {{ $t("cooperation[2][1][2]") }}
      </p>
      <p>
        {{ $t("cooperation[2][1][3]") }}
      </p>
    </div>

    <h1 class="font-bold">{{ $t("cooperation[3][0]") }}</h1>
    <div>
      <p>
        {{ $t("cooperation[3][1][0]") }}
      </p>
      <p>
        {{ $t("cooperation[3][1][1]") }}
      </p>
    </div>

    <h1 class="font-bold">{{ $t("cooperation[4][0]") }}</h1>
    <div>
      <p>
        {{ $t("cooperation[4][1][0]") }}
      </p>
      <p>
        {{ $t("cooperation[4][1][1]") }}
      </p>
    </div>

    <h1 class="font-bold">{{ $t("cooperation[5][0]") }}</h1>
    <div>
      <p>
        {{ $t("cooperation[5][1][0]") }}
      </p>
      <p>
        {{ $t("cooperation[5][1][1]") }}
      </p>
    </div>

    <h1 class="font-bold">{{ $t("cooperation[6][0]") }}</h1>
    <div>
      <p>
        {{ $t("cooperation[6][1][0]") }}
      </p>
      <p>
        {{ $t("cooperation[6][1][1]") }}
      </p>
      <p>
        {{ $t("cooperation[6][1][2]") }}
      </p>
    </div>

    <div class="flex md:!flex-row">
      <div class="md:w-1/2 font-bold">
        <h1>Kompaniya:</h1>
        <p>
          O’zbekiston Respublikasi, Toshkent shahri, Mirobod hududi, N.
          Nazarbayeva 193 ko’chasi,
        </p>
        <p>LES OFFICE, indeks: 050013</p>
        <p>ТОО "Florify.uz (Florify.uz)"</p>
        <div class="mt-20 max-w-fit">
          <p>____________________</p>
          <p class="mx-auto">(imzo)</p>
        </div>
      </div>
      <div class="md:w-1/2">
        <h1 class="font-bold">Florist:</h1>
        <p class="break-words h-[170px] overflow-hidden">
          __________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <div class="mt-20 max-w-fit">
          <p>____________________</p>
          <p class="mx-auto">(imzo)</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

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
