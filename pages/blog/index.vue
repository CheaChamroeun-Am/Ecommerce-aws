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
          <p class="text" data-aos="fade-up" data-aos-delay="500">#Read More</p>
          <p
            class="text-white text-center"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </v-img>
    </v-card>

    <v-container>
      <h1 class="fw-bold mt-10" data-aos="fade-right" data-aos-delay="500">
        Blogs
        <span style="color: #6b7280">on latest fashion trends</span>
      </h1>

      <v-row class="mt-15">
        <v-col cols="12" md="9">
          <v-row v-for="b in displayBlogs" :key="b">
            <v-card>
              <v-img
                :src="b.image"
                width="100%"
                height="630px"
                data-aos="zoom-in-up"
                data-aos-delay="250"
              >
              </v-img>
              <div class="pa-5">
                <div class="d-flex" data-aos="fade-right" data-aos-delay="500">
                  <v-icon icon="mdi-account-circle-outline"></v-icon>
                  <p class="ml-2">Admin</p>
                  <v-divider
                    vertical
                    class="border-opacity-100 mx-5"
                  ></v-divider>
                  <v-icon icon="mdi-calendar-month-outline"></v-icon>
                  <p class="ml-2">May 10, 2017</p>
                  <v-divider
                    vertical
                    class="border-opacity-100 mx-5"
                  ></v-divider>
                  <v-icon icon="mdi-comment-text-outline"></v-icon>
                  <p class="ml-2">2 Comments</p>
                </div>
                <p
                  class="font-weight-bold mt-3"
                  style="font-size: 25px"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  {{ b.title }}
                </p>
                <p
                  class="mt-3 article-text"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  {{ b.article }}
                </p>

                <div class="mt-5" data-aos="fade-up" data-aos-delay="500">
                  <nuxt-link
                    :to="`blog/${b._id}`"
                    style="text-decoration: none"
                  >
                    <v-btn color="#e5345b " variant="outlined">
                      Continue reading
                      <v-icon end icon="mdi-arrow-right"></v-icon>
                    </v-btn>
                  </nuxt-link>
                </div>
              </div>
            </v-card>
          </v-row>
        </v-col>

        <v-col cols="12" md="3" class="sidebar hidden-md-and-down">
          <v-card class="pa-3">
            <div>
              <p style="font-size: 20px">Recent Article</p>
              <v-divider class="border-opacity-100 my-5"></v-divider>

              <div class="d-flex mt-10" v-for="r in recent" :key="r.id">
                <div>
                  <v-img width="120px" height="120px" cover :src="r.image">
                  </v-img>
                </div>

                <div class="ms-3">
                  <p style="max-width: 160px">
                    {{ r.title }}
                  </p>
                </div>
              </div>

              <p class="mt-10" style="font-size: 20px">Tags</p>
              <v-divider class="border-opacity-100 my-5"></v-divider>
              <p>Dancing</p>
              <p>Heel</p>
              <p>Hiking</p>
              <p>Racing</p>
              <p>Running</p>
              <p>Sneakers</p>

              <p class="mt-10" style="font-size: 20px">Best Shoe</p>
              <v-divider class="border-opacity-100 my-5"></v-divider>
              <div class="my-10">
                <v-img
                  src="https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png"
                >
                </v-img>
                <h2 class="mt-10 text-center">Messi Addidas</h2>
                <v-divider class="border-opacity-100 my-5"></v-divider>
                <h2>$275.00</h2>
                <v-rating
                  v-model="rating"
                  size="30px"
                  bg-color="#FFCA28"
                  color="#FFCA28"
                ></v-rating>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination
        :length="totalPages"
        class="mt-6"
        v-model="currentPage"
      ></v-pagination>
    </v-container>
  </v-main>
</template>

<script setup>
const rating = ref(5);
const recent = ref([
  {
    id: 1,
    title: "25 km cross country cycling using All Terrain Cycles",
    image:
      "https://cdn.shopify.com/s/files/1/1811/9799/articles/blog9.jpg?v=1494403859",
  },
  {
    id: 2,
    title: "Decathlon training routine",
    image:
      "https://cdn.shopify.com/s/files/1/1811/9799/articles/Blog8_470x.jpg?v=1494403616",
  },
  {
    id: 3,
    title: "Obstacle course racing on Huge Shoes",
    image:
      "https://cdn.shopify.com/s/files/1/1811/9799/articles/blog1_470x.jpg?v=1494403118",
  },
]);

const { data: blogs } = await useFetch("http://3.90.217.148:3002/api/blog");
console.log(blogs.value);

// Pagination
const currentPage = ref(1);
const itemPerPage = ref(3);

const displayBlogs = computed(() => {
  const start = (currentPage.value - 1) * itemPerPage.value;
  const end = start + itemPerPage.value;
  return blogs.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(blogs.value.length / itemPerPage.value);
});
</script>

<style scoped>
.article-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.sidebar {
  position: sticky;
  top: 0;
  width: 300px;
  height: 100%;
}
</style>
