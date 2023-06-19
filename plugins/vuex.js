import { createStore } from "vuex";
import Cookies from "js-cookie";
const store = createStore({
  state() {
    return {
      carts: [],
      favorites: [],
      theme : 'light',
      //check is authenticated
      isAuthenticated: !!Cookies.get("token"),

    };
  },
  getters: {


    cartCount(state) {
      return state.carts.length;
    },

    subTotalPrice(state) {
      return state.carts.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    },

    taxPrice(state, getters) {
      //10%
      return getters.subTotalPrice * 0.1;
    },

    totalPrice(state, getters) {
      //+ tax(10%)
      // Delivery fee $3
      // discount $-20
      return getters.subTotalPrice + getters.taxPrice + 3 - 20;
    },



    favoriteCount(state) {
      return state.favorites.length;
    },

    favoriteProducts(state) {
      return state.favorites;
    }
  },

  mutations: {

    handleTheme(state){
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
    },

    handleAddToCart(state, { product, quantity }) {
      let productInCart = state.carts.find((item) => {
        return item.product._id === product._id;
      });

      if (productInCart) {
        productInCart.quantity += quantity;
        return;
      }

      state.carts.push({
        product,
        quantity,
      });
    },

    clearCard(state) {
      state.carts = [];
    },

    handleRemoveCart(state, product) {
      const index = state.carts.findIndex((item) => item.product._id === product._id);
      state.carts.splice(index, 1);

      // state.carts = state.carts.filter((item) => {
      //   return item.product._id !== product._id;
      // });
    },


    toggleFavoriteStatus(state, product) {
      const index = state.favorites.findIndex((item) => item._id === product._id);
      if (index === -1) {
        state.favorites.push(product);
      } else {
        state.favorites.splice(index, 1);
      }
    },

    // handleAddToCartInDetail(state, { product, quantity }) {
    //   let productInCart = state.carts.find((item) => {
    //     return item.product._id === product._id;
    //   });

    //   if (productInCart) {
    //     productInCart.quantity += quantity;
    //     return;
    //   }

    //   state.carts.push({
    //     product,
    //     quantity,
    //   });
    // }
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});
