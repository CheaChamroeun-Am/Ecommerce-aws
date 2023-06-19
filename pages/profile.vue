<template>
  <v-main>
    <v-card>
      <v-img
        src="/images/b1.jpg"
        height="250"
        width="100%"
        class="bg-grey-lighten-2"
        cover
      >
        <div class="text-overlay">
          <p class="text" data-aos="fade-right" data-aos-delay="500">#AboutYourSelf</p>
          <p class="text-white text-center" data-aos="fade-up" data-aos-delay="500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </v-img>
    </v-card>

    <v-container>
      <v-row>
        <v-col cols="12" md="2">
          <v-card class="pa-5" color="rgb(198, 196, 196)">
            <div class="d-flex justify-space-around align-center">
              <v-avatar color="surface-variant" size="80" data-aos="fade-right" data-aos-delay="500">
                <v-img
                  src="https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819"
                  
                />
              </v-avatar>
              <p data-aos="fade-up" data-aos-delay="500">Lionel Messi</p>
            </div>
          </v-card>

          <v-card class="mt-3" flat>
            <v-list border class="mx-auto">
              <v-list-item
                link
                title="My Cart"
                stacked
                @click.stop="drawer = !drawer"
                data-aos="fade-right" data-aos-delay="500"
              >
                <template v-slot:append>
                  <v-badge color="#e5345b" :content="$store.getters['cartCount']" inline data-aos="fade-up" data-aos-delay="500"></v-badge>
                </template>
              </v-list-item>

              <v-list-item link title="My Favorite" @click="handleFavorite" data-aos="fade-right" data-aos-delay="500">
                <template v-slot:append>
                  <v-badge color="#e5345b" :content="$store.getters['favoriteCount']" inline data-aos="fade-up" data-aos-delay="500"></v-badge>
                </template>
              </v-list-item>

              <v-list-item link title="Notification" data-aos="fade-right" data-aos-delay="500"> </v-list-item>

              <v-list-item link title="Setting" data-aos="fade-right" data-aos-delay="500"></v-list-item>

              <v-divider></v-divider>

              <v-btn class="my-5" @click="handleLogout" data-aos="fade-up" data-aos-delay="500">
                <v-icon>mdi-logout</v-icon>
                Logout
              </v-btn>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12" md="10">
          <v-card class="pa-5">
            <h1
              class="text-center"
              style="border: 1px solid rgb(198, 196, 196)"
              data-aos="fade-right" data-aos-delay="500"
            >
              Customer Profile
            </h1>
            <v-row class="mt-5 d-flex align-center" data-aos="fade-up" data-aos-delay="500">
              <v-col cols="12" md="6">
                <div class="d-flex">
                  <p>First Name</p>

                  <p class="ms-10">Messi</p>
                </div>
                <div class="d-flex mt-5">
                  <p>Last Name</p>

                  <p class="ms-10">Messi</p>
                </div>
                <div class="d-flex mt-5">
                  <p>Address</p>

                  <p class="ms-10">
                    56 Glassford Street 234 Toulkok PhnomPenh Cambodia
                  </p>
                </div>
                <div class="d-flex mt-5">
                  <p>Email</p>

                  <p class="ms-10">messi@gmail.com</p>
                </div>
                <div class="d-flex mt-5">
                  <p>Phone number</p>

                  <p class="ms-10">078 220 698</p>
                </div>

                <v-btn class="mt-5" variant="outlined">Change Password</v-btn>
              </v-col>
              <v-col cols="12" md="6" class="text-center">
                <p>Profile Image</p>
                <v-img
                  src="https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819"
                  height="130"
                  width="110"
                  class="bg-grey-lighten-2 mt-5 mx-auto"
                  cover
                ></v-img>
                <v-btn class="mt-5" variant="outlined">Upload New</v-btn>
              </v-col>
            </v-row>

            <div class="mt-15" style="border-top: 1px solid rgb(198, 196, 196)">
              <v-row class="mt-5">
                <v-col cols="12" md="6" data-aos="fade-right" data-aos-delay="500">
                  <p>Customer ID</p>
                  <p class="mt-3">63d7384232cb502f4145fc73</p>
                </v-col>
                <v-col cols="12" md="6" class="text-center">
                  <v-btn color="#e5345b" class="text-white" data-aos="fade-up" data-aos-delay="500">
                    Edit Profile
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <h1 class="mt-15" data-aos="fade-right" data-aos-delay="500">Purchase History</h1>
      <v-table fixed-header height="300px" class="mt-10">
        <thead>
          <tr data-aos="fade-right" data-aos-delay="500">
            <th class="text-center">REMOVE</th>
            <th class="text-center">IMAGE</th>
            <th class="text-center">PRODUCT</th>
            <th class="text-center">PRICE</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="p in purchase" :key="p._id" data-aos="fade-up" data-aos-delay="500">
            <td>
              <v-btn icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
            <td>
              <v-img
                :src="p.orderItems[0].image[0]"
                height="70px"
                width="70px"
                class="bg-grey-lighten-2 mx-auto"
                cover
              ></v-img>
            </td>
            <td>{{ p.orderItems[0].name }}</td>
            <td>${{ p.orderItems[0].price }}.00</td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </v-main>
</template>

<script setup>


import Cookies from "js-cookie";

definePageMeta({
  middleware: ["auth"],
})


const auth = useAuth()


const router = useRouter();

const handleFavorite = () => {
  navigateTo("/favorite");
};

const handleLogout = () => {
  auth.value.isAuthenticated = false;
  Cookies.remove("token");
  navigateTo("/");
};

const {data : purchase} = await useFetch("http://localhost:3002/api/orders", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});
console.log(purchase);

const drawer = ref(false);
</script>

<style lang="scss" scoped></style>
