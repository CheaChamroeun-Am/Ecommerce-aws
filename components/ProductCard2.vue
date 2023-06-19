<template>
  <v-col cols="4">
    <v-img :src="product.image[0]" height="200px">
      <template v-slot:placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular
            color="grey lighten-5"
            indeterminate
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-col>
  <v-col cols="12" md="8">
    <v-card-title class="text-capitalize">
      {{ product.name }}
    </v-card-title>

    <v-card-subtitle> ${{ product.price }}.00 </v-card-subtitle>
    <v-card-text>
      {{ product.description }}
    </v-card-text>

    <v-card-actions>
      <v-rating
        v-model="rating"
        size="30px"
        bg-color="#FFCA28"
        color="#FFCA28"
      ></v-rating>
    </v-card-actions>

    <v-card-actions>
      <nuxt-link :to="`/shop/${product._id}`" style="text-decoration: none"
        ><v-btn color="#e5345b"> Read More </v-btn></nuxt-link
      >

      <v-btn class="ml-15 text-white" style="background-color: #e5345b"  @click="handleAddToCart">
        Add to Cart
      </v-btn>
    </v-card-actions>

    <v-snackbar v-model="cartSnackbar" color="green" bottom right>
    Product have been add to cart! 🛒

    <template v-slot:actions>
      <v-btn color="white" @click="cartSnackbar = false"> Close </v-btn>
    </template>
  </v-snackbar>

  </v-col>
</template>

<script setup>
import Cookies from "js-cookie";
import { useStore } from "vuex";

const auth = useAuth();

const store = useStore();
const { product } = defineProps(["product"]);
const rating = computed(() => {
  return Math.round(product.rating);
});
const cartSnackbar = ref(false);

const handleAddToCart = () => {
  if(auth.value.isAuthenticated == false){
    navigateTo("/login");
    alert("Please Login First");
  }
  else {
    cartSnackbar.value = true;
    store.commit("handleAddToCart", {
      product: product,
      quantity: 1,
    });
  }
};
</script>

<style lang="scss" scoped></style>
