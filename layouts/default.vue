<template>
  <v-app id="inspire" :theme="$store.state.theme">
    <Navbar></Navbar>

    <slot></slot>

    <Footer/>
  </v-app>
</template>

<script setup>



useHead({
  title: 'CamboShoe',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'My Shoe Shop'
    }
  ],
  //icon for website
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
      
    }
  ]
})

</script>

<style scoped>
  
</style>
