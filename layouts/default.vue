<template>
    <div class="bg-[#F9F9F9]">
        <header>
            <Header />
        </header>
        <nav>
            <Navbar />
        </nav>
        <div>
            <slot />
        </div>
        <Footer class="md:block hidden"/>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>