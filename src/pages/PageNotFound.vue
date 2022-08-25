<template>
<Header />
    <div class="col-md-6 m-auto">
    <div class="container my-5 py-5 text-center">
        <p class="h1 text-danger">Error 404  </p>
        <p class="h4 text-warning fst-italic">The page you're looking is not available. Please check back later </p>
    </div>
    </div>
<!-- <Footer /> -->
</template>

<script>
import Header from '@/components/Header.vue';
// import Footer from '@/components/Footer.vue';
export default {
    name: "PageNotFound-vue",
    components: { 
        Header, 
        // Footer 
        }
}
</script>

<style>

</style>