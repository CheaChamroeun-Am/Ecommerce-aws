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
          <p class="text" data-aos="fade-right" data-aos-delay="500">
            #Stay Home
          </p>
          <p
            class="text-white text-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </v-img>
    </v-card>

    <v-container>
      <v-row class="mt-5">
        <!-- Left Side -->
        <v-col cols="12" md="2" class="sidebar hidden-sm-and-down">
          <!-- Category -->
          <v-card flat border>
            <v-list class="mx-auto" max-width="256">
              <v-list-subheader
                class="font-weight-bold"
                style="font-size: 18px"
                color="black"
                >Categories</v-list-subheader
              >
              <div v-for="l in styles" :key="l.title">
                <v-list-item link :title="l.title">
                  <template v-slot:append>
                    <v-badge
                      color="#e5345b"
                      :content="l.count"
                      inline
                    ></v-badge>
                  </template>
                </v-list-item>
              </div>
            </v-list>
          </v-card>

          <!-- Price -->
          <v-card flat border>
            <v-list class="mx-auto">
              <v-list-subheader
                class="font-weight-bold"
                style="font-size: 18px"
                color="black"
                >Price</v-list-subheader
              >

              <v-list-item>
                <v-range-slider
                  color="#e5345b"
                  max="40"
                  min="30"
                  style="width: 220px"
                  class="mx-auto"
                ></v-range-slider>
                <v-list-item-subtitle class="font-weight-bold"
                  >Price : $20 - $900</v-list-item-subtitle
                >
              </v-list-item>
            </v-list>
          </v-card>

          <!-- Brand -->
          <v-card flat border="">
            <v-list select-strategy="classic">
              <v-list-subheader
                class="font-weight-bold"
                style="font-size: 18px"
                color="black"
                >Brand</v-list-subheader
              >

              <div v-for="b in brands" :key="b.title">
                <v-list-item value="notifications">
                  <template v-slot:prepend>
                    <v-list-item-action start>
                      <v-checkbox-btn :model-value="b.state"></v-checkbox-btn>
                    </v-list-item-action>
                  </template>

                  <v-list-item-title>{{ b.title }}</v-list-item-title>
                </v-list-item>
              </div>
            </v-list>
          </v-card>

          <!-- Color -->
          <v-card flat border>
            <v-list>
              <v-list-subheader
                class="font-weight-bold"
                style="font-size: 18px"
                color="black"
                >Color</v-list-subheader
              >

              <v-list-item>
                <v-chip-group>
                  <v-chip
                    filter
                    class="text-black"
                    variant="outlined"
                    style="border-radius: 50%; background-color: white"
                  ></v-chip>

                  <v-chip
                    filter
                    class="text-black"
                    style="border-radius: 50%; background-color: #e6e6e6"
                  ></v-chip>

                  <v-chip
                    filter
                    class="text-white"
                    style="border-radius: 50%; background-color: #ffb500"
                  ></v-chip>

                  <v-chip
                    filter
                    class="text-white"
                    style="border-radius: 50%; background-color: #f27229"
                  ></v-chip>

                  <v-chip
                    filter
                    class="text-white"
                    style="border-radius: 50%; background-color: #eb3427"
                  ></v-chip>

                  <v-chip
                    filter
                    class="text-white"
                    style="border-radius: 50%; background-color: #923fa3"
                  ></v-chip>

                  <v-chip
                    filter
                    class="text-white"
                    style="border-radius: 50%; background-color: #3a51df"
                  ></v-chip>

                  <v-chip
                    filter
                    class="text-white"
                    style="border-radius: 50%; background-color: #23a7f5"
                  ></v-chip>

                  <v-chip
                    filter
                    class="text-white"
                    style="border-radius: 50%; background-color: #5eb524"
                  ></v-chip>

                  <v-chip
                    filter
                    class="text-white"
                    style="border-radius: 50%; background-color: #7c5f4d"
                  ></v-chip>

                  <v-chip
                    filter
                    class="text-white"
                    style="border-radius: 50%; background-color: black"
                  ></v-chip>

                  <v-chip
                    filter
                    class="text-white"
                    style="border-radius: 50%; background-color: lime"
                  ></v-chip>
                </v-chip-group>
              </v-list-item>
            </v-list>
          </v-card>

          <!-- Size -->
          <v-card>
            <v-list>
              <v-list-subheader
                class="font-weight-bold"
                style="font-size: 18px"
                color="black"
                >Size</v-list-subheader
              >

              <v-list-item>
                <v-chip-group>
                  <v-chip filter v-for="size in sizes" :key="size">{{
                    size
                  }}</v-chip>
                </v-chip-group>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <!-- Product -->
        <v-col cols="12" md="10">
          <v-carousel show-arrows="hover">
            <v-carousel-item
              src="https://htmldemo.net/juta/juta-v1/img/slider/home-2-02.jpg"
              cover
            >
              <div class="text-overlayc">
                <div data-aos="fade-right" data-aos-delay="500">
                  <span
                    class="font-weight-bold text-white text-uppercase"
                    style="font-size: 80px"
                    >Perfect</span
                  >
                  <span
                    class="ms-5 text-white text-uppercase"
                    style="font-size: 80px"
                    >Design</span
                  >
                </div>

                <p
                  class="text-white"
                  style="font-size: 20px"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  Ready. experience. compfortable and indispensable in life
                </p>
                <v-btn
                  variant="outlined"
                  color="white"
                  class="mt-10"
                  style="width: 200px; height: 60px"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  >SHOP NOW</v-btn
                >
              </div>
            </v-carousel-item>

            <v-carousel-item
              src="https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider3-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550149"
              cover
            >
              <div class="text-overlayc">
                <p
                  data-aos="fade-right"
                  data-aos-delay="500"
                  class="font-weight-bold text-white"
                  style="font-size: 20px"
                >
                  New Arrivals 2023
                </p>
                <div data-aos="fade-right" data-aos-delay="500">
                  <span
                    class="font-weight-bold text-white text-uppercase"
                    style="font-size: 80px"
                    >Jacket</span
                  >
                  <span
                    class="ms-5 text-white text-uppercase"
                    style="font-size: 80px"
                    data-aos="fade-right"
                    data-aos-delay="500"
                    >Tech Pack</span
                  >
                </div>

                <p
                  class="text-white"
                  style="font-size: 20px"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  Aurora Shell Jacket is Ready For Any Adventure
                </p>
                <v-btn
                  variant="outlined"
                  color="white"
                  class="mt-10"
                  style="width: 200px; height: 60px"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  >SHOP NOW</v-btn
                >
              </div>
            </v-carousel-item>

            <v-carousel-item
              src="https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider1-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550446"
              cover
            >
              <div class="text-overlayc">
                <div data-aos="fade-right" data-aos-delay="500">
                  <span
                    class="font-weight-bold text-white"
                    style="font-size: 80px"
                    >NIKE</span
                  >
                  <span
                    class="ms-5 text-white text-uppercase"
                    style="font-size: 80px"
                    >Baseball</span
                  >
                </div>

                <p
                  class="text-white"
                  style="font-size: 20px"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  We've handpicked our best gifts for all kinds of athleted.
                </p>
                <v-btn
                  variant="outlined"
                  color="white"
                  class="mt-10"
                  style="width: 200px; height: 60px"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  >SHOP NOW</v-btn
                >
              </div>
            </v-carousel-item>
          </v-carousel>

          <v-row class="mt-15">
            <v-col cols="12" md="4">
              <v-img
                src="https://htmldemo.net/shome/shome/assets/img/shop/category/1.webp"
              >
                <div class="text-overlays">
                  <p
                    class="text-white text-center"
                    style="font-size: 25px"
                    data-aos="fade-right"
                    data-aos-delay="500"
                  >
                    Sale 30% off
                  </p>
                  <p class="text" data-aos="fade-right" data-aos-delay="500">
                    SPORTS SHOES
                  </p>
                </div>
              </v-img>
            </v-col>
            <v-col cols="12" md="4">
              <v-img
                src="https://htmldemo.net/shome/shome/assets/img/shop/category/2.webp"
              >
                <div class="text-overlays">
                  <p
                    class="text-white text-center"
                    style="font-size: 25px"
                    data-aos="fade-right"
                    data-aos-delay="500"
                  >
                    Sale 50% off
                  </p>
                  <p class="text" data-aos="fade-right" data-aos-delay="500">
                    NEW ARRIVAL
                  </p>
                </div>
              </v-img>
            </v-col>
            <v-col cols="12" md="4">
              <v-img
                src="https://htmldemo.net/shome/shome/assets/img/shop/category/3.webp"
              >
                <div class="text-overlays">
                  <p
                    class="text-white text-center"
                    style="font-size: 25px"
                    data-aos="fade-right"
                    data-aos-delay="500"
                  >
                    Sale 45% off
                  </p>
                  <p class="text" data-aos="fade-right" data-aos-delay="500">
                    NEW SNEAKERS
                  </p>
                </div>
              </v-img>
            </v-col>
          </v-row>

          <h1
            class="fw-bold fadeRight mt-10"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            New Arrivals.
            <span style="color: #6b7280">Best selling of the month</span>
          </h1>

          <!-- Grid -->
          <v-row class="my-5 d-flex align-center mt-10">
            <v-col cols="12" md="4">
              <v-btn @click="grid = !grid" :class="{ 'grid-bg': grid }">
                <v-icon> mdi-view-list </v-icon>
              </v-btn>
              <v-btn
                @click="grid = !grid"
                :class="{ 'grid-bg': !grid }"
                class="ml-3"
              >
                <v-icon> mdi-apps </v-icon>
              </v-btn>
            </v-col>

            <!-- Select -->
            <v-col cols="12" md="4">
              <v-select
                v-model="sortOption"
                clearable
                label="Sorted by"
                :items="sortOptions"
                variant="outlined"
              ></v-select>
            </v-col>

            <!-- Search -->
            <v-col cols="12" md="4">
              <v-text-field
                label="Search"
                v-model="searchTerm"
                variant="outlined"
                prepend-inner-icon="mdi-magnify"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Product -->
          <v-row>
            <v-col cols="12">
              <v-row v-show="grid">
                <v-col
                  cols="12"
                  md="4"
                  sm="6"
                  v-for="product in displayProducts"
                  :key="product.id"
                  data-aos="zoom-in-up"
                  data-aos-delay="250"
                >
                  <product-card1 :product="product"></product-card1>
                  <!-- left :product => bos oy productCard : right product => knong v-for -->
                </v-col>
              </v-row>

              <v-row
                v-show="!grid"
                v-for="product in displayProducts"
                :key="product.id"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <product-card2 :product="product"></product-card2>
              </v-row>
            </v-col>
          </v-row>

          <!-- pagination -->
          <div class="mt-8 d-flex justify-center">
            <v-pagination
              :length="totalPages"
              color="black"
              v-model="currentPage"
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
const styles = ref([
  { title: "Lifestyle", count: "10" },
  { title: "Running", count: "7" },
  { title: "Training & Gym", count: "9" },
  { title: "Basketball", count: "5" },
  { title: "Football", count: "11" },
  { title: "Soccer", count: "8" },
  { title: "Baseball", count: "13" },
  { title: "Golf", count: "3" },
  { title: "Skateboarding", count: "6" },
]);

const brands = ref([
  { title: "Lifestyle", state: false },
  { title: "Running", state: false },
  { title: "Training & Gym", state: false },
  { title: "Basketball", state: false },
]);

const sizes = ref([35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]);

const rating = ref(4);

const searchTerm = ref("");

const grid = ref(true);

const { data: products } = await useFetch(
  "http://18.208.219.245:3002/api/products"
);

console.log(products.value);

// Search
const filteredProducts = computed(() => {
  if (searchTerm.value) {
    return [...products.value].filter((product) => {
      return searchTerm.value
        .toLocaleLowerCase()
        .split(" ")
        .every((v) => product.name.toLocaleLowerCase().includes(v));
    });
  } else {
    return products.value;
  }
});

// Sorted
const sortOptions = ref(["Name", "Price"]);
const sortOption = ref("");

const sortProducts = computed(() => {
  if (sortOption.value === "Name") {
    return [...filteredProducts.value].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (sortOption.value === "Price") {
    return [...filteredProducts.value].sort((a, b) => {
      return a.price - b.price;
    });
  } else {
    return filteredProducts.value;
  }
});

// Pagination
const currentPage = ref(1);
const itemPerPage = ref(12);

const displayProducts = computed(() => {
  const start = (currentPage.value - 1) * itemPerPage.value;
  const end = start + itemPerPage.value;
  return sortProducts.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(sortProducts.value.length / itemPerPage.value);
});
</script>

<style scoped>
.sidebar {
  position: sticky;
  top: 0;
  width: 300px;
  height: 100%;
}
.grid-bg {
  background-color: #e5345b;
  color: white;
}

.text-overlays {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text-overlayc {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.289);
}
</style>
