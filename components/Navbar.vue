<template>
  <!-- Cart -->
  <v-navigation-drawer
    app
    temporary
    location="right"
    v-model="drawer"
    width="400"
  >
    <div class="pa-3">
      <h2>Order Menu</h2>

      <p class="mt-4">Address Delivery</p>
      <p class="font-weight-bold" style="font-size: 18px">
        221 B Baker Street, London
      </p>

      <div class="d-flex align-content-center">
        <div>
          <v-icon
            icon="mdi-clock-time-four"
            color="grey-darken-1"
            size="small"
          ></v-icon>
          <span class="ma-2">30min</span>
          <v-icon
            icon="mdi-map-marker"
            size="small"
            color="grey-darken-1"
          ></v-icon>
          <span>2km</span>
        </div>
      </div>

      <div class="scrollable mt-5" style="max-height: 450px; overflow-y: auto">
        <!-- Product Cart -->
        <v-card class="mt-5" flat v-for="cart in carts" :key="cart">
          <div class="d-flex justify-space-around">
            <v-icon
              icon="mdi-delete"
              color="red"
              style="cursor: pointer"
              @click="handleRemoveCart(cart.product)"
            ></v-icon>
            <v-img
              :src="cart.product.image[0]"
              height="100px"
              :width="100"
              aspect-ratio="16/9"
              style="border-radius: 10px 10px 10px 10px"
            >
            </v-img>
            <div class="ms-3">
              <p>{{ cart.product.name }}</p>
              <div>
                x
                <v-badge :content="cart.quantity" inline></v-badge>
              </div>
            </div>

            <p class="font-weight-bold">${{ cart.product.price }}.00</p>
          </div>
        </v-card>
      </div>

      <v-divider class="mt-5"></v-divider>

      <div class="d-flex justify-space-between mt-5">
        <p>Subtotal</p>
        <p class="font-weight-bold">
          ${{ $store.getters["subTotalPrice"] }}.00
        </p>
      </div>

      <div class="d-flex justify-space-between mt-5">
        <p>Tax(10%)</p>
        <p class="font-weight-bold">
          ${{ formatNumber($store.getters["taxPrice"]) }}
        </p>
      </div>

      <div class="d-flex justify-space-between mt-5">
        <p>Delivery Fee</p>
        <p class="font-weight-bold">$3.00</p>
      </div>

      <div class="d-flex justify-space-between mt-5">
        <p>Discount</p>
        <p class="font-weight-bold">-$20.00</p>
      </div>

      <v-divider class="mt-5"></v-divider>

      <v-btn
        class="mt-5 text-white"
        color="#e5345b"
        block
        @click="handleCheckout"
        >Checkout</v-btn
      >
    </div>
  </v-navigation-drawer>

  <v-app-bar color="grey-darken-4">
    <!-- Left -->
    <v-toolbar-title>
      <span class="font-weight-light">CamboShoe </span>
      <span class="font-weight-bold">Services</span>
    </v-toolbar-title>

    <!-- Middle -->
    <div class="hidden-sm-and-down">
      <ul>
        <nuxt-link
          to="/"
          class="font-weight-bold"
          style="color: white; text-decoration: none; font-size: 16px"
          >HOME</nuxt-link
        >

        <nuxt-link
          to="/shop"
          class="font-weight-bold ms-10"
          style="color: white; text-decoration: none; font-size: 16px"
          >SHOP</nuxt-link
        >

        <nuxt-link
          to="/blog"
          class="font-weight-bold ms-10"
          style="color: white; text-decoration: none; font-size: 16px"
          >BLOG</nuxt-link
        >

        <nuxt-link
          to="/about"
          class="font-weight-bold ms-10"
          style="color: white; text-decoration: none; font-size: 16px"
          >ABOUT</nuxt-link
        >

        <nuxt-link
          to="/contact"
          class="font-weight-bold ms-10"
          style="color: white; text-decoration: none; font-size: 16px"
          >CONTACT</nuxt-link
        >
      </ul>
    </div>

    <v-spacer></v-spacer>

    <!-- right -->
    <v-toolbar-items>
      <!-- Theme -->
      <v-btn
        variant="text"
        :icon="
          $store.state.theme === 'light'
            ? 'mdi-weather-sunny'
            : 'mdi-weather-night'
        "
        @click="handleTheme"
      >
      </v-btn>

      <!-- Profile -->
      <v-btn
        class="hidden-sm-and-down"
        icon="mdi-account"
        @click="handleProfile"
        v-if="auth.isAuthenticated"
      ></v-btn>

      <!-- Login -->
      <v-btn
        class="hidden-sm-and-down"
        icon="mdi-account-alert"
        @click="handleLogin"
        v-else
      ></v-btn>

      <!-- Favorite -->
      <v-btn class="text-none hidden-sm-and-down" stacked>
        <v-badge :content="$store.getters['favoriteCount']" color="error">
          <v-icon icon="mdi-heart"></v-icon>
        </v-badge>
      </v-btn>

      <!-- Cart -->
      <v-btn
        class="text-none hidden-sm-and-down"
        stacked
        @click.stop="drawer = !drawer"
      >
        <v-badge :content="$store.getters['cartCount']" color="error">
          <v-icon icon="mdi-cart"></v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar-items>

    <!-- Mobile -->
    <div class="hidden-md-and-up">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            color="white"
            v-bind="props"
            variant="text"
            icon="mdi-menu"
          ></v-btn>
        </template>

        <v-list width="300px">
          <v-list-item>
            <v-list-item-title>
              <nuxt-link to="/" style="text-decoration: none" class="text-black"
                >HOME</nuxt-link
              >
            </v-list-item-title>

            <v-divider
              style="border: none; border-top: 3px solid black"
              class="my-2"
            ></v-divider>

            <v-list-item-title>
              <nuxt-link
                to="/shop"
                style="text-decoration: none"
                class="text-black"
                >SHOP</nuxt-link
              >
            </v-list-item-title>

            <v-divider
              style="border: none; border-top: 3px solid black"
              class="my-2"
            ></v-divider>

            <v-list-item-title>
              <nuxt-link
                to="/blog"
                style="text-decoration: none"
                class="text-black"
                >BLOG</nuxt-link
              >
            </v-list-item-title>

            <v-divider
              style="border: none; border-top: 3px solid black"
              class="my-2"
            ></v-divider>

            <v-list-item-title>
              <nuxt-link
                to="/about"
                style="text-decoration: none"
                class="text-black"
                >ABOUT</nuxt-link
              >
            </v-list-item-title>

            <v-divider
              style="border: none; border-top: 3px solid black"
              class="my-2"
            ></v-divider>

            <v-list-item-title>
              <nuxt-link
                to="/contact"
                style="text-decoration: none"
                class="text-black"
                >CONTACT</nuxt-link
              >
            </v-list-item-title>

            <v-divider
              style="border: none; border-top: 3px solid black"
              class="my-2"
            ></v-divider>

            <div class="d-flex align-center justify-space-between">
              <!-- Profile -->
              <v-btn
                icon="mdi-account"
                @click="handleProfile"
                v-if="auth.isAuthenticated"
                flat
              ></v-btn>

              <!-- Login -->
              <v-btn
                icon="mdi-account-alert"
                @click="handleLogin"
                v-else
                flat
              ></v-btn>

              <!-- Favorite -->
              <v-btn stacked flat>
                <v-badge
                  :content="$store.getters['favoriteCount']"
                  color="error"
                >
                  <v-icon icon="mdi-heart"></v-icon>
                </v-badge>
              </v-btn>

              <!-- Cart -->
              <v-btn flat stacked @click.stop="drawer = !drawer">
                <v-badge :content="$store.getters['cartCount']" color="error">
                  <v-icon icon="mdi-cart"></v-icon>
                </v-badge>
              </v-btn>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script setup>
import Cookies from "js-cookie";
import { useStore } from "vuex";

const auth = useAuth();

// const isAuthenticated = ref(false)

onMounted(() => {
  if (Cookies.get("token")) {
    isAuthenticated.value = true;
  }
});

const store = useStore();

const drawer = ref(false);

const handleTheme = () => {
  store.commit("handleTheme");
};

const carts = computed(() => {
  return store.state.carts;
});

const handleRemoveCart = (product) => {
  store.commit("handleRemoveCart", product);
};

const handleProfile = () => {
  navigateTo("/profile");
};

const handleLogin = () => {
  navigateTo("/login");
};

const handleCheckout = () => {
  navigateTo("/checkout");
};

const formatNumber = (number) => {
  return Number(number).toFixed(2);
};
</script>

<style scoped></style>
