<template>
  <v-footer color="black  pt-10">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <p class="text-uppercase" style="font-size: 20px">Our Store</p>
          <p class="mt-5" style="color: grey">
            Cambodian-based sneaker store aimed to bringing about the culture
            surrounding footwear.
          </p>
        </v-col>
        <v-col cols="12" md="3">
          <p class="text-uppercase" style="font-size: 20px">Link</p>
          <div class="mt-5">
            <v-icon icon="mdi-greater-than" color="grey"></v-icon>
            <nuxt-link
              to="/"
              class="ms-3"
              style="text-decoration: none; color: grey"
              >Home</nuxt-link
            >
          </div>
          <div class="my-3">
            <v-icon icon="mdi-greater-than" color="grey"></v-icon>
            <nuxt-link
              to="/shop"
              class="ms-3"
              style="text-decoration: none; color: grey"
              >Shop</nuxt-link
            >
          </div>
          <div class="my-3">
            <v-icon icon="mdi-greater-than" color="grey"></v-icon>
            <nuxt-link
              to="/blog"
              class="ms-3"
              style="text-decoration: none; color: grey"
              >Blog</nuxt-link
            >
          </div>
          <div class="my-3">
            <v-icon icon="mdi-greater-than" color="grey"></v-icon>
            <nuxt-link
              to="/about"
              class="ms-3"
              style="text-decoration: none; color: grey"
              >About</nuxt-link
            >
          </div>
          <div class="my-3">
            <v-icon icon="mdi-greater-than" color="grey"></v-icon>
            <nuxt-link
              to="/contact"
              class="ms-3"
              style="text-decoration: none; color: grey"
              >Contact</nuxt-link
            >
          </div>
        </v-col>

        <v-col cols="12" md="3">
          <p class="text-uppercase" style="font-size: 20px">Contact Us</p>
          <div class="mt-5">
            <v-icon icon="mdi-map-marker" color="grey"></v-icon>
            <span class="ms-3" style="color: grey"
              >56 Glassford Street 234 Toulkok PhnomPenh Cambodia</span
            >
          </div>
          <div class="mt-8">
            <v-icon icon="mdi-email" color="grey"></v-icon>
            <span class="ms-3" style="color: grey"
              >amcheachamroeun20@kit.edu.kh</span
            >
          </div>
          <div class="mt-8">
            <v-icon icon="mdi-phone" color="grey"></v-icon>
            <span class="ms-3" style="color: grey">+9786 6776 236</span>
          </div>
        </v-col>

        <v-col cols="12" md="3">
          <p class="text-uppercase" style="font-size: 20px">Follow Us</p>
          <div class="d-flex mt-5">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="text-white"
              style="cursor: pointer; text-decoration: none"
            >
              <v-icon icon="mdi-instagram" color="grey"></v-icon>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="text-white"
              style="cursor: pointer; text-decoration: none"
            >
              <v-icon icon="mdi-facebook" color="grey" class="ms-5"></v-icon>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              class="text-white"
              style="cursor: pointer; text-decoration: none"
            >
              <v-icon icon="mdi-twitter" color="grey" class="ms-5"></v-icon>
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              class="text-white"
              style="cursor: pointer; text-decoration: none"
            >
              <v-icon icon="mdi-pinterest" color="grey" class="ms-5"></v-icon>
            </a>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      
      <div class="px-4 mt-5 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Am Cheachamroeun</strong>
    </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped></style>
