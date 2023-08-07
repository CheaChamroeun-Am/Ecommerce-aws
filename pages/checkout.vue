<template>
  <v-main>
    <v-card>
      <v-img
        src="/images/b2.jpg"
        height="250"
        width="100%"
        class="bg-grey-lighten-2"
        cover
      >
        <div class="text-overlay">
          <p class="text"  data-aos="fade-right" data-aos-delay="500">#Checkout</p>
          <p class="text-white text-center" data-aos="fade-up" data-aos-delay="500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </v-img>
    </v-card>

    <v-container>
      <h1 class="fw-bold mt-5 fadeRight" data-aos="fade-right" data-aos-delay="500">
        Billing
        <span style="color: #6b7280">Details</span>
      </h1>

      <v-form v-model="valid" @submit.prevent="handleCheckout">
        <v-row >
          <v-col cols="12" md="8" data-aos="fade-up" data-aos-delay="500">
            <v-card class="pa-5 mt-10">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="firstname"
                    :rules="firstnameRules"
                    :counter="100"
                    label="First Name"
                    required
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="lastname"
                    :rules="lastnameRules"
                    :counter="100"
                    label="Last Name"
                    required
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                :counter="100"
                label="Email Address"
                required
                variant="outlined"
              ></v-text-field>

              <v-text-field
                v-model="phoneNumber"
                :rules="phoneNumberRules"
                :counter="100"
                label="Phone Number"
                required
                variant="outlined"
              ></v-text-field>

              <v-text-field
                v-model="address"
                :rules="addressRules"
                :counter="100"
                label="Address"
                required
                variant="outlined"
              ></v-text-field>

              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="city"
                    :rules="cityRules"
                    :counter="100"
                    label="City/Province"
                    required
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="district"
                    :rules="districtRules"
                    :counter="100"
                    label="District/Khan"
                    required
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                v-model="country"
                :rules="countryRules"
                :counter="100"
                label="Country"
                required
                variant="outlined"
              ></v-text-field>

              <div class="d-flex align-center">
                <div>
                  <v-checkbox class="mt-5" style="font-size: 15px"></v-checkbox>
                </div>
                <div>
                  <v-img
                    height="80px"
                    width="160px"
                    class="ms-4"
                    src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                  >
                  </v-img>
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="pa-5 mt-10">
              <div class="d-flex align-center justify-space-between" data-aos="fade-right" data-aos-delay="500">
                <p>Product</p>
                <p class="ms-10">Subtotal</p>
              </div>
              <div
                class="d-flex mt-5 align-center justify-space-between"  data-aos="fade-right" data-aos-delay="500"
                v-for="cart in $store.state.carts"
                :key="cart"
              >
                <p>{{ cart.product.name }} x <v-badge  :content="cart.quantity" inline></v-badge> </p>
                <p class="ms-10">${{ cart.product.price }}.00</p>
              </div>
              <div class="d-flex mt-5 align-center justify-space-between"  data-aos="fade-right" data-aos-delay="500">
                <p>Subtotal</p>
                <p class="ms-10">${{ $store.getters["subTotalPrice"] }}.00</p>
              </div>

              <div class="d-flex mt-5 align-center justify-space-between"  data-aos="fade-right" data-aos-delay="500">
                <p>Tax(10%)</p>
                <p class="ms-10">
                  ${{ formatNumber($store.getters["taxPrice"]) }}
                </p>
              </div>

              <div class="d-flex mt-5 align-center justify-space-between"  data-aos="fade-right" data-aos-delay="500">
                <p>Delivery Fee</p>
                <p class="ms-10">$3.00</p>
              </div>

              <div class="d-flex mt-5 align-center justify-space-between"  data-aos="fade-right" data-aos-delay="500">
                <p>Discount</p>
                <p class="ms-10">-$20.00</p>
              </div>

              <div class="d-flex mt-5 align-center justify-space-between" data-aos="fade-right" data-aos-delay="500">
                <p>Total</p>
                <p
                  class="ms-10 font-weight-bold"
                  style="font-size: 25px; color: #e5345b"
                >
                  ${{ formatNumber($store.getters["totalPrice"]) }}
                </p>
              </div>

              <div class="mt-10" style="border-top: 1px solid gray"  data-aos="fade-up" data-aos-delay="500">
                <p class="mt-10">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>

                <div class="mt-5 d-flex justify-center align-center">
                  <v-btn
                    :disabled="!valid"
                    type="submit"
                    class="text-white"
                    style="background-color: #e5345b; width: 200px"
                    >Place order</v-btn
                  >
                </div>
                <div class="d-flex justify-center mt-5">
                  <div v-if="paypalLoaded">
                    <div id="paypal-button-container" class="mt-4"></div>
                  </div>
                  <div id="paypal-button-container"></div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-main>
</template>

<script setup>
import Cookies from "js-cookie";
import { useStore } from "vuex";
const store = useStore();
const firstname = ref("");
const lastname = ref("");
const email = ref("");
const phoneNumber = ref("");
const address = ref("");
const city = ref("");
const district = ref("");
const country = ref("");

definePageMeta({
  middleware: ["auth"],
})



const firstnameRules = [
  (v) => !!v || "First name is required",
  (v) => (v && v.length <= 100) || "First name must be less than 100",
];

const lastnameRules = [
  (v) => !!v || "Last name is required",
  (v) => (v && v.length <= 100) || "Last name must be less than 100",
];

const emailRules = [
  (v) => !!v || "E-mail is required",
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  (v) => (v && v.length <= 100) || "E-mail must be less than 100",
];

const phoneNumberRules = [
  (v) => !!v || "Phone number is required",
  (v) => (v && v.length <= 100) || "Phone number must be less than 100",
  (v) => /^\d+$/.test(v) || "Phone number must be number",
];

const addressRules = [
  (v) => !!v || "Address is required",
  (v) => (v && v.length <= 100) || "Address must be less than 100",
];

const cityRules = [
  (v) => !!v || "City is required",
  (v) => (v && v.length <= 100) || "City must be less than 100",
];

const districtRules = [
  (v) => !!v || "District is required",
  (v) => (v && v.length <= 100) || "District must be less than 100",
];

const countryRules = [
  (v) => !!v || "Country is required",
  (v) => (v && v.length <= 100) || "Country must be less than 100",
];

const formatNumber = (number) => {
  return Number(number).toFixed(2);
};

const valid = ref(false);

const paypalLoaded = ref(false);

const carts = computed(() => {
  return store.state.carts;
});

let orderItems = [];
carts.value.forEach((cart) => {
  orderItems.push({
    name: cart.product.name,
    price: cart.product.price,
    qty: cart.quantity,
    image: cart.product.image,
    product: cart.product._id,
  });
});

const totalPrice = computed(() => {
  return store.getters.totalPrice;
});

const handleCheckout = () => {
  const script = document.createElement("script");
  script.src =
    "https://www.paypal.com/sdk/js?client-id=AQPoC9EOinXnLoH3gdHHrlPYtU10WqZmxMgZ28GGIp1H873kI9bGWncgeFr5pGc4tXwveEtEBzfpc7-0";
  script.onload = () => {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalPrice.value.toString(),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const token = Cookies.get("token");
          console.log(carts.value);
          await fetch("http://3.90.217.148:3002/api/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              orderItems,
              shippingAddress: {
                address: address.value,
                city: city.value,
                postalCode: "94111",
                country: country.value,
              },
              paymentMethod: "paypal",
              totalPrice: totalPrice.value,
              taxPrice: 0,
              shippingPrice: 0,
            }),
          });
          store.commit("clearCard");
          navigateTo("/thanksyou");
        },
      })
      .render("#paypal-button-container");
    paypalLoaded.value = true;
  };
  document.body.appendChild(script);
};
</script>

<style scoped></style>
