<template>
  <v-main>
    <v-container>
      <div class="d-flex">
        <nuxt-link to="/" style="text-decoration: none; color: black"
          ><span>Home</span></nuxt-link
        >
        <v-icon icon="mdi-greater-than" class="ms-3"></v-icon>
        <nuxt-link to="/shop" style="text-decoration: none; color: black"
          ><span class="ms-3">Shop</span></nuxt-link
        >
        <span class="font-weight-bold ms-5">|</span>
        <span class="ms-5">{{ product.name }}</span>
      </div>

      <v-row class="mt-15">
        <v-col cols="12" md="6">
          <div class="d-flex justify-content-center">
            <v-img
              :src="product.image[0]"
              height="400px"
              width="400px"
              data-aos="zoom-in-up"
              data-aos-delay="250"
            ></v-img>
          </div>

          <carousel :items-to-show="3.7">
            <slide v-for="p in product.image" :key="p">
              <div>
                <v-img :src="p" height="150px" width="150px"></v-img>
              </div>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </v-col>

        <!-- Information -->
        <v-col cols="12" md="6">
          <p style="color: #e5345b" data-aos="fade-right" data-aos-delay="500">
            Sneaker Company
          </p>
          <h1
            class="font-weight-bold"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            {{ product.name }}
          </h1>

          <div class="d-flex" data-aos="fade-right" data-aos-delay="500">
            <div class="text-center">
              <v-rating
                v-model="rating"
                size="30px"
                bg-color="#FFCA28"
                color="#FFCA28"
              ></v-rating>
            </div>
            <span class="ms-3 font-weight-bold" style="line-height: 30px"
              >|</span
            >
            <span class="ms-3 mt-1" style="color: grey">5 Customer Review</span>
          </div>

          <p
            style="color: grey"
            class="mt-7"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {{ product.description }}
          </p>
          <h2 class="mt-3" data-aos="fade-up" data-aos-delay="500">
            ${{ product.price }}.00
          </h2>

          <div class="d-flex align-center justify-space-between mt-5">
            <div>
              <input
                v-model="quantity"
                type="number"
                class="px-2"
                min="1"
                style="border: 1px solid black; width: 70px"
                data-aos="fade-up"
                data-aos-delay="500"
              />
            </div>

            <v-btn
              color="#e5345b"
              class="text-white mt-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <v-icon icon="mdi-cart" class="ms-3"></v-icon>
              <span class="ms-4" @click="handleAddToCart">Add To Cart</span>
            </v-btn>
          </div>

          <div class="mt-16" style="border-top: black 1px solid">
            <div
              class="d-flex mt-5"
              style="color: grey"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span>SKU</span>
              <span class="ms-16">:</span>
              <span class="ms-3">SS001</span>
            </div>

            <div
              class="d-flex mt-5"
              style="color: grey"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span>Category</span>
              <span class="ms-5">:</span>
              <span class="ms-3">Nike</span>
            </div>

            <div
              class="d-flex mt-5"
              style="color: grey"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span>Tags</span>
              <span class="ms-14">:</span>
              <span class="ms-3">Running, Gym</span>
            </div>

            <div
              class="d-flex mt-5"
              style="color: grey"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span>Share</span>
              <span class="ms-12">:</span>
              <div class="ms-3">
                <v-icon icon="mdi-facebook"></v-icon>
                <v-icon icon="mdi-twitter" class="ms-3"></v-icon>
                <v-icon icon="mdi-instagram" class="ms-3"></v-icon>
                <v-icon icon="mdi-linkedin" class="ms-3"></v-icon>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Similar Product -->
    <v-card width="100%" color="#f5f5f7" class="pa-5 mt-16" flat>
      <v-container>
        <h1 class="text-center" data-aos="fade-right" data-aos-delay="500">
          Similar Product
        </h1>
        <p class="text-center" data-aos="fade-up" data-aos-delay="500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <v-row class="mt-15">
          <v-col
            cols="12"
            md="3"
            v-for="s in similarProduct"
            :key="s"
            data-aos="zoom-in-up"
            data-aos-delay="250"
          >
            <v-card class="mx-auto" max-width="344">
              <v-img :src="s.image" height="200px" width="100%" cover></v-img>

              <v-card-subtitle class="mt-4"> Nike </v-card-subtitle>

              <v-card-title class="font-weight-bold">
                {{ s.name }}
              </v-card-title>

              <v-card-subtitle> New Design 2023 </v-card-subtitle>

              <v-card-actions>
                <v-rating
                  v-model="rating"
                  size="30px"
                  bg-color="#FFCA28"
                  color="#FFCA28"
                ></v-rating>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-container>
      <v-card variant="outlined" width="100%" class="pa-5">
        <v-row class="mt-5">
          <v-col cols="12" md="6">
            <p
              class="text-uppercase"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              WRITE A CUSTOMER REVIEW
            </p>
            <h3 class="mt-3" data-aos="fade-right" data-aos-delay="500">
              We love to hear from you
            </h3>

            <v-form class="mt-6" @submit.prevent="handleReview">
              <v-select
                v-model="selectedRating"
                label="Rate this product"
                variant="outlined"
                :items="ratingNumber"
              ></v-select>
              <v-textarea
                v-model="comment"
                label="Message"
                variant="outlined"
                dense
                placeholder="Enter your message"
                style="height: 250px"
              ></v-textarea>
              <v-btn
                color="#e5345b"
                type="submit"
                class="mt-5 text-white px-15"
                data-aos="fade-up"
                data-aos-delay="500"
                >Send</v-btn
              >
            </v-form>
          </v-col>

          <v-col cols="12" md="6" class="ps-10">
            <div v-scroll-y style="height: 400px; overflow-y: auto">
              <div class="d-flex mt-5" v-for="r in product.reviews" :key="r">
                <v-avatar size="x-large">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819"
                    alt="avatar"
                    style="width: 100%; height: 100%"
                  />
                </v-avatar>
                <div class="ms-5">
                  <h3>{{ r.name }}</h3>
                  <v-rating
                    length="5"
                    :model-value="r.rating"
                    size="20px"
                    bg-color="#FFCA28"
                    color="#FFCA28"
                  ></v-rating>
                  <p>{{ r.comment }}</p>
                  <p class="mt-2 text-grey">
                    {{ new Date().toLocaleDateString() }}
                  </p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>

      <v-card width="100%" class="mt-15" flat>
        <v-row class="text-center">
          <v-col cols="12" md="6">
            <div class="d-flex justify-center">
              <v-img
                width="100px"
                height="100px"
                src="https://www.cambokicks.com/Icons/money.svg"
                data-aos="fade-up"
                data-aos-delay="500"
              >
              </v-img>
            </div>

            <h3 class="mt-5" data-aos="fade-right" data-aos-delay="500">
              100% AUTHENTIC
            </h3>
            <p class="mt-3" data-aos="fade-up" data-aos-delay="500">
              All items are verified by our teams and are guaranteed 100%
              authentic or your money back.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex justify-center">
              <v-img
                width="100px"
                height="100px"
                src="https://www.cambokicks.com/Icons/shield.svg"
                data-aos="fade-up"
                data-aos-delay="500"
              >
              </v-img>
            </div>

            <h3 class="mt-5" data-aos="fade-right" data-aos-delay="500">
              SECURE CHECKOUT
            </h3>
            <p class="mt-3" data-aos="fade-up" data-aos-delay="500">
              Our payment gateway is optimized to ensure a secure shopping
              experience for our customers.
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <v-snackbar v-model="commentSnackbar" color="green" bottom right>
      Comment added 💬

      <template v-slot:actions>
        <v-btn color="white" @click="commentSnackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useStore } from "vuex";
import Cookies from "js-cookie";

const store = useStore();
const route = useRoute();
const auth = useAuth();

const commentSnackbar = ref(false);

const id = route.params.id;

const { data: product } = await useFetch(
  `http://18.208.219.245:3002/api/products/${id}`
);

const ratingReview = computed(() => {
  return product.value.rating;
});

console.log(product.value);

const similarProduct = ref([
  {
    id: 1,
    name: "Nike Air Force 1 Low Supreme",
    image: "/images/Nike1.webp",
    price: 200,
    rating: 4,
  },
  {
    id: 2,
    name: "Nike Air Max Plus Black Volt Solar Red (W)",
    image: "/images/Nike2.webp",
    price: 200,
    rating: 5,
  },
  {
    id: 3,
    name: "Nike Air Zoom Pegasus 37",
    image: "/images/Nike3.webp",
    price: 200,
    rating: 3,
  },
  {
    id: 4,
    name: "Nike Dunk Low UCLA",
    image: "/images/Nike4.webp",
    price: 200,
    rating: 4,
  },
]);

const selectedRating = ref(null);
const ratingNumber = ref([1, 2, 3, 4, 5]);
const comment = ref("");

const handleReview = async () => {
  let cookieValue = Cookies.get("token");
  if (cookieValue == undefined) {
    alert("Please login to review");
    navigateTo("/login");
  } else {
    const { data } = await useFetch(
      `http://18.208.219.245:3002/api/products/${id}/review`,
      {
        method: "POST",
        body: {
          rating: selectedRating.value,
          comment: comment.value,
        },
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    commentSnackbar.value = true;
    selectedRating.value = null;
    comment.value = "";
    console.log(data.value);
  }
};

const quantity = ref(1);

//check quantify cannot be 0 or negative

const handleAddToCart = () => {
  if (auth.value.isAuthenticated == false) {
    navigateTo("/login");
    alert("Please login to add to cart");
  } else {
    store.commit("handleAddToCart", {
      product: product.value,
      quantity: quantity.value,
    });
  }
};
</script>

<style scoped></style>
