<template>
  <v-card class="mx-auto p-card">
    <v-img :src="product.image[0]" height="200px"></v-img>

    <v-card-title> {{ product.name }} </v-card-title>

    <v-card-subtitle>${{ product.price }}.00 </v-card-subtitle>

    <v-card-actions>
      <v-rating
        v-model="rating"
        size="30px"
        bg-color="#FFCA28"
        color="#FFCA28"
      ></v-rating>
    </v-card-actions>

    <v-card-actions class="heart">
      <v-btn icon @click="handleAddToFavorite">
        <v-icon icon="mdi-heart" :color="isFavorite ? '#e5345b' : ''"></v-icon>
      </v-btn>
    </v-card-actions>

    <v-card-actions class="d-flex justify-space-between">
      <nuxt-link :to="`shop/${product._id}`" style="text-decoration: none"
        ><v-btn color="#e5345b" variant="text"> Read More </v-btn></nuxt-link
      >

      <v-btn
        class="text-white"
        style="background-color: #e5345b"
        @click="handleAddToCart"
        >Add To Cart
        <v-icon icon="mdi-cart" class="ms-4" style="font-size: 20px"></v-icon
      ></v-btn>
    </v-card-actions>
  </v-card>

  <v-snackbar v-model="cartSnackbar" color="green" bottom right>
    Product have been add to cart! 🛒

    <template v-slot:actions>
      <v-btn color="white" @click="cartSnackbar = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import Cookies from "js-cookie";
import { useStore } from "vuex";

const auth = useAuth();

const store = useStore();

const { product } = defineProps(["product"]);

const cartSnackbar = ref(false);

const rating = computed(() => {
  return Math.round(product.rating);
});

const handleAddToCart = () => {
  if(auth.value.isAuthenticated === false){
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

const isFavorite = computed(() =>
  store.state.favorites.some((item) => item._id === product._id)
);

const handleAddToFavorite = () => {
  if (auth.value.isAuthenticated === false) {
    navigateTo("/login");
    alert("Please Login First");
  }
  else {
    store.commit("toggleFavoriteStatus", product);
  }
};
</script>

<style lang="scss" scoped>
.p-card {
  transition: .5s;
}
.p-card:hover {
  transform: scale(1.1);
}
</style>
