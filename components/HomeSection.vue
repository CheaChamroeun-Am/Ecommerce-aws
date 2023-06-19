<template>
  <v-card flat>
    <v-parallax src="/images/home-bg-1.jpg" class="home-img">
      <v-container>
        <div class="text-overlay2 pa-15">
          <v-row class="d-flex align-center">
            <v-col cols="12" md="6">
              <h4
                class="font-weight-bold"
                style="font-size: 25px"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                In this season, find the best 🔥
              </h4>
              <h1
                class="font-weight-bold"
                style="font-size: 45px"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                Exclusive collection for everyone
              </h1>
              <p data-aos="fade-right" data-aos-delay="500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ratione voluptas recusandae eveniet excepturi tempore earum
                nesciunt facere, libero non suscipit officia vero eum
                dignissimos esse in enim dolorum sequi! Culpa ratione voluptas
                recusandae eveniet excepturi tempore earum nesciunt facere.
              </p>
              <v-btn
                class="mt-5"
                rounded="pill"
                variant="outlined"
                color="#e5345b"
                width="200px"
                height="50px"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Explore More
              </v-btn>
            </v-col>
            <v-col cols="12" md="6">
              <v-img
                width="85%"
                max-height="700"
                class="shoe-img"
                src="/images/logshoes.png"
              >
              </v-img>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-parallax>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.text-overlay2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.shoe-img{
  animation : mainImageAnimation 5s infinite;
}

@keyframes mainImageAnimation {
    0%{
        transform: translateY(-20px);
    }
    50%{
        transform: translateY(70px);
    }
    100%{
        transform: translateY(-20px);
    }
}

@media screen and (max-width: 959px) {
  .home-img {
    height: 100vh;
  }
  .shoe-img {
    max-width: 500px;
  }
}
</style>
