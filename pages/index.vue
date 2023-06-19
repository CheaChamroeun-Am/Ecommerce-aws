<template>
  <v-main>
    <home-section></home-section>
    <v-container>
      <v-row class="mt-15 d-flex">
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="500">
              <v-card
                width="100%"
                height="400"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <v-img
                  src="https://cdn.shopify.com/s/files/1/1811/9799/files/collection3_large.jpg?v=1613156071"
                >
                  <p
                    class="mt-15 ms-10 font-weight-medium"
                    style="font-size: 25px"
                  >
                    GYM SNEAKER
                  </p>
                </v-img>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="500">
              <v-card
                width="100%"
                height="400"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <v-img
                  src="https://cdn.shopify.com/s/files/1/1811/9799/files/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg?v=1613157025"
                >
                  <p
                    class="mt-15 ms-10 font-weight-medium"
                    style="font-size: 25px"
                  >
                    HIKING BOOTS
                  </p>
                </v-img>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="500">
              <v-card
                width="100%"
                height="400"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <v-img
                  src="https://cdn.shopify.com/s/files/1/1811/9799/files/collection2_6fd1e403-7021-427d-8be1-8bf857c8aacf_large.jpg?v=1613157026"
                >
                  <p
                    class="mt-15 ms-10 font-weight-medium"
                    style="font-size: 25px"
                  >
                    WORK BOOTS
                  </p>
                </v-img>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="500">
              <v-card
                width="100%"
                height="400"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <!-- <v-img
                  src="https://cdn.shopify.com/s/files/1/1811/9799/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026"
                >
                  <p
                    class="mt-15 ms-10 font-weight-medium"
                    style="font-size: 25px"
                  >
                    CHKKAS
                  </p>
                </v-img> -->
                <video
                  src="/videos/commercial.mp4"
                  poster="https://cdn.shopify.com/s/files/1/1811/9799/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026"
                  controls
                  width="640"
                  height="360"
                ></video>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="4">
          <v-carousel
            hide-delimiters
            show-arrows="hover"
            width="100%"
            height="823px"
            cycle
          >
            <v-carousel-item
              src="https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_2.jpg?v=1613157025"
              cover
            >
              <div class="text-overlay3">
                <div style="position: absolute; bottom: 50px; left: 80px">
                  <h1
                    class="text-uppercase font-weight-black"
                    style="font-size: 60px"
                    data-aos="fade-right"
                    data-aos-delay="500"
                  >
                    Sneek Peek
                  </h1>
                  <hr
                    style="
                      width: 30%;
                      border: none;
                      border-top: 6px black solid;
                    "
                    data-aos="fade-right"
                    data-aos-delay="500"
                  />
                  <p
                    class="mt-5"
                    style="letter-spacing: 7px"
                    data-aos="fade-right"
                    data-aos-delay="500"
                  >
                    MAKE THIS SEASOBN YOUR
                  </p>
                </div>
              </div>
            </v-carousel-item>

            <v-carousel-item
              src="https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_3.jpg?v=1613157025"
              cover
              ><div class="text-overlay3">
                <div
                  style="position: absolute; bottom: 50px; left: 80px"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <h1
                    class="text-uppercase font-weight-black"
                    style="font-size: 60px"
                  >
                    Signs
                  </h1>
                  <hr
                    style="
                      width: 30%;
                      border: none;
                      border-top: 6px black solid;
                    "
                  />
                  <p class="mt-5" style="letter-spacing: 7px">
                    MAKE THIS SEASOBN YOUR
                  </p>
                </div>
              </div></v-carousel-item
            >

            <v-carousel-item
              src="https://cdn.shopify.com/s/files/1/1811/9799/files/dropdown_3_menu_image_3.jpg?v=1613524987 "
              cover
              ><div class="text-overlay3">
                <div
                  style="position: absolute; bottom: 50px; left: 80px"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <h1
                    class="text-uppercase font-weight-black"
                    style="font-size: 60px"
                  >
                    Cambos <br />
                    Stores
                  </h1>
                  <hr
                    style="
                      width: 30%;
                      border: none;
                      border-top: 6px black solid;
                    "
                  />
                  <p class="mt-5" style="letter-spacing: 7px">
                    MAKE THIS SEASOBN YOUR
                  </p>
                </div>
              </div></v-carousel-item
            >
          </v-carousel>
        </v-col>
      </v-row>

      <!-- Service -->
      <Service></Service>

      <h1
        class="font-weight-bold mt-15 text-center"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        Top
        <span style="color: #6b7280">pick for you</span>
      </h1>

      <p class="text-center mt-3" data-aos="fade-up" data-aos-delay="500">
        Find a bright ideal to suit your taste with our great selection of
        Product, Nike, Addidas, Puma.
      </p>

      <!-- Product -->

      <carousel
        :items-to-show="3"
        class="mt-15"
        data-aos="zoom-in-up"
        data-aos-delay="500"
      >
        <slide v-for="product in products.slice(0, 8)" :key="product">
          <v-card width="800px" height="400px" class="ml-3 pa-5">
            <v-img
              :src="product.image[0]"
              width="100%"
              height="200px"
              class="mx-auto"
            ></v-img>

            <v-card-title class="d-flex justify-start">{{
              product.name
            }}</v-card-title>
            <v-card-subtitle class="d-flex justify-start">
              ${{ product.price }}.00
            </v-card-subtitle>

            <v-card-actions>
              <v-rating
                v-model="product.rating"
                size="30px"
                bg-color="#FFCA28"
                color="#FFCA28"
              ></v-rating>
            </v-card-actions>

            <v-card-actions class="heart">
              <v-icon icon="mdi-heart" color="b;acl"> </v-icon>
            </v-card-actions>

            <v-card-actions class="d-flex justify-space-between">
              <nuxt-link
                :to="`/shop/${product._id}`"
                style="text-decoration: none"
                ><v-btn color="#e5345b" variant="text">
                  Read More
                </v-btn></nuxt-link
              >

              <v-btn class="text-white" style="background-color: #e5345b"
                >Add To Cart
                <v-icon
                  icon="mdi-cart"
                  class="ms-4"
                  style="font-size: 20px"
                ></v-icon
              ></v-btn>
            </v-card-actions>
          </v-card>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>

      <!-- Follow Facebook -->
      <v-card class="mt-15">
        <v-img
          src="https://s3-alpha-sig.figma.com/img/e49f/7c37/5c86e4d8f910d443c83a97a723571602?Expires=1679270400&Signature=GCKCp72dwrGo4JEQgfVZsbPqYWLtLrvPAeYxfaRR0wsI-pZhRNdfXQvwf87UQCoF07iHzVgORxhJOHIgUocYxTCU2SjbRUpNs2B-CzLKh0-MMoNqIxI-ir6mf5FH5YD5c6EzYyw18rQUnMNcRTygSbVlMk4Nix5lm2dvG2ZFu-p2at6bEW1R~IPfEHnFVsAqEKh-xpT-bfhy1MZzkYZ84cYokgvxbYTKtj66KtJNtHmadw-paSaRtxwTCmD4DnBdCMr2VLS0TP3EUexaxxn576Txs1WXoQ-TA~-yFX6xCVbHRQ~8t65RfA5yPobAt5mYxBDKEDQc-b4j7VFzee7ZFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          height="450"
          width="100%"
          cover
        >
          <div class="text-overlay1">
            <p class="text1" data-aos="fade-right" data-aos-delay="500">
              Our Facebook Page
            </p>
            <p
              class="text-black text-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Follow our store on Facebook
            </p>
            <v-btn
              class="mt-5 px-10 text-white"
              color="#e5345b"
              rounded="pill"
              @click="handleFollow"
              data-aos="fade-up"
              >Follow Us</v-btn
            >
          </div>
        </v-img>
      </v-card>

      <!-- Pupular of the year -->
      <popular-item />

      <!-- Faq -->
      <v-card class="mt-15" color="#f5f5f7">
        <v-row class="d-flex align-center">
          <v-col cols="12" md="6">
            <h1 class="text-center" style="font-size: 100px" data-aos="fade-right" data-aos-delay="500">FAQ's</h1>
          </v-col>

          <v-col cols="12" md="6">
            <v-expansion-panels
              style="background-color: #f5f5f7; padding: 16px"
            >
              <v-expansion-panel
                class="mt-5 pa-2"
                v-for="f in faq"
                :key="f"
                :title="f.title"
                :text="f.text"
              ></v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-main>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useStore } from "vuex";
import Cookies from "js-cookie";
const store = useStore();
const route = useRoute();

const { data: products } = await useFetch("http://localhost:3002/api/products");

const handleFollow = () => {
  window.open("https://www.facebook.com/", "_blank");
};

const faq = ref([
  {
    title: "How do you charge for delevery?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "How do I know if my order has been shipped?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "How do I return an item?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
]);

</script>
