<script>
import Layout from '../layouts/default.vue'
export default {
  components: { Layout },
}
</script>

<template>
  <Layout title="About Me" class="mx-auto py-6 px-4 container">
    <h1 class="text-4xl font-bold">Press</h1>

    <p class="text-gray-900 mb-8">
      If you are a print or online magazine, a conference or otherwise, please feel free to use the below for articles
      or interviews.
    </p>

    <h2 class="text-2xl mt-6 mb-4 font-bold text-gray-800">Biography</h2>

    <p class="my-4">
      Rahul Kadyan is a Software Engineer and Vue Core Team Member. He is super enthusiastic about building accessible
      web apps, the compilation process of .vue files, and tooling for the Vue ecosystem.
    </p>

    <h2 class="text-2xl mt-6 mb-4 font-bold text-gray-800">Photos</h2>

    <section class="flex text-center flex-col md:flex-row items-center">
      <figure class=" md:mr-6">
        <img class="w-64 h-64 rounded-full my-4" src="../assets/press/photo.jpg" alt="Rahul Kadyan" />

        <figcaption>Photo</figcaption>
      </figure>

      <figure>
        <img class="w-64 h-64 rounded-full my-4" src="../assets/press/avatar.png" alt="A green box" />

        <figcaption>Avatar</figcaption>
      </figure>
    </section>
  </Layout>
</template>
