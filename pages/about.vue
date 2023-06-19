<template>
  <v-main>
    <v-card>
      <v-img
        src="/images/b3.png"
        height="250"
        width="100%"
        class="bg-grey-lighten-2"
        cover
      >
        <div class="text-overlay" >
          <p class="text" data-aos="fade-right" data-aos-delay="500">#KnowUs</p>
          <p class="text-white text-center" data-aos="fade-up" data-aos-delay="500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </v-img>
    </v-card>

    <v-container>
      <h1
        data-aos="fade-right"
        data-aos-delay="500"
        class="mt-5"
        style="font-size: 50px"
      >
        About Us
      </h1>
      <v-row class="mt-5">
        <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="500">
          <p class="font-weight-bold">
            Founded in 1986, I.D. Jewelry, LLC, a family owned & operated
            business has become a house-hold name in states all over the USA as
            well as countries all over the world.
          </p>
          <p class="mt-10">
            For those that rather the full immersion of the in store experience
            we welcome your company and look forward to meeting you face to
            face. Being located in the 47 street diamond district, known to be
            the largest diamond.
          </p>
          <p class="mt-10">
            Based in the heart of New York’s Diamond District, also known as the
            NYC diamond district, I. D. Jewelry has some of the most
            competitively priced in the market. It is our goal to supply our
            clients.
          </p>
          <div style="border-left: #e5345b 4px solid" class="mt-10">
            <p class="ms-5">
              Low price best shoes Quisque volutpat mattis eros. Nullam
              malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse
              urna nibh, viverra non, semper suscipit, posuere a, pede. Donec
              nec justo eget felis facilisis fermentum. Morbi in sem quis dui
              placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
              ultricies in, diam. Sed arcu. Cras consequate. Etiam pretium
              varius quam in aliquam. Curabitur malesuada elit sed enim
              placerat, vitae interdum erat cursus. Nullam malesuada erat ut ki
              diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non,
              semper suscipit, posuere a, pede. Donec nec justo eget felis
              facilisis fermentum. Morbi in sem quis dui placerat ornare.
              Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
              diam. Sed arcu. Cras consequate.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="6" data-aos="zoom-in-up" data-aos-delay="500">
          <v-img
            src="https://cdn.shopify.com/s/files/1/0616/7376/7164/files/bg02.jpg?v=1640859428"
            width="100%"
            height="550"
            class="about1-img"
          >
          </v-img>
        </v-col>
      </v-row>
      <v-row class="mt-15">
        <v-col cols="12" md="6" data-aos="zoom-in-up" data-aos-delay="500">
          <v-img
            src="https://htmldemo.net/shome/shome/assets/img/about/1.webp"
            width="100%"
            height="350"
            class="about1-img"
          >
          </v-img>
        </v-col>
        <v-col cols="12" md="6">
          <p style="font-size: 50px" data-aos="fade-right" data-aos-delay="500">
            Smart Life
          </p>
          <p
            class="font-weight-bold"
            style="font-size: 50px"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            With Smart Shoes
          </p>
          <p class="mt-5" data-aos="fade-up" data-aos-delay="500">
            Our audience (AKA you) is wonderfully unique. And we do everything
            we can to help you find your fit, offering our Ciloe Brands in more
            than 30 sizes – and we're committed to providing all sizes at the
            same price – so you can be confident we’ve got the perfect thing for
            you. We’re also proud to partner with GLAAD, one of the biggest
            voices in LGBTQ activism, on a gender-neutral collection to unite in
            accelerating acceptance.
          </p>
          <v-btn
            color="#e5345b"
            class="text-white mt-12"
            style="width: 200px; height: 60px"
            data-aos="fade-up"
            data-aos-delay="500"
            >Contact Us</v-btn
          >
        </v-col>
      </v-row>

      <v-img
        src="https://cdn.shopify.com/s/files/1/0145/5613/5478/files/bg-video.jpg?v=1613749308"
        class="mt-15"
        height="500px"
        width="100%"
        cover
        data-aos="zoom-in-up"
        data-aos-delay="500"
      >
        <div class="text-overlayb">
          <v-btn
            variant="outlined"
            icon="mdi-play"
            style="width: 80px; height: 80px; border-radius: 50%"
          ></v-btn>
        </div>
      </v-img>

      <!-- <v-row class="mt-5">
        <v-col cols="6" md="2" v-for="s in services" :key="s.title">
          <v-hover class="custom-hover">
            <v-card class="pa-3">
              <v-img height="300px" width="100%" :src="s.image"> </v-img>
              <p class="font-weight-bold text-center" style="color: #e5345b">
                {{ s.title }}
              </p>
            </v-card>
          </v-hover>
        </v-col>
      </v-row> -->
    </v-container>

    <v-card class="mt-15 pa-5" flat color="#f4f4f4">
      <div class="d-flex flex-column justify-center">
        <v-icon
          icon="mdi-instagram"
          class="mx-auto"
          style="font-size: 50px"
          data-aos="fade-right"
          data-aos-delay="500"
        ></v-icon>
        <p
          class="text-center font-weight-bold mt-2"
          style="font-size: 50px"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          # Instagram
        </p>
      </div>
      <div>
        <v-row class="mt-10">
          <v-col cols="12" md="3" data-aos="fade-up" data-aos-delay="500">
            <v-img
              src="https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram1.jpg?v=15498024826686967000\"
              width="100%"
              height="525px"
              cover
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="9">
            <v-row>
              <v-col
                cols="12"
                md="4"
                v-for="insta in instagram"
                :key="insta.id"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <v-img :src="insta.image" width="100%" height="250px" cover>
                </v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-main>
</template>

<script setup>
const services = ref([
  {
    title: "Free Shipping",
    image: "/images/f1.png",
  },
  {
    title: "Online Order",
    image: "/images/f2.png",
  },
  {
    title: "Save Money",
    image: "/images/f3.png",
  },
  {
    title: "Promotions",
    image: "/images/f4.png",
  },
  {
    title: "Happy Sell",
    image: "/images/f5.png",
  },
  {
    title: "F24/7 Support",
    image: "/images/f6.png",
  },
]);

const instagram = ref([
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram2.jpg?v=15258598092433906800",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/bg-blog.jpg?v=1613769904",
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram4.jpg?v=4815545228466784132",
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram5.jpg?v=15130270389561427225",
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram6.jpg?v=6913742429301337905",
  },
  {
    id: 6,
    image:
      "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram7.jpg?v=2228065968177078398",
  },
]);
</script>

<style scoped>
.custom-hover:hover .v-card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Add a box shadow when the card is hovered */
}

.custom-hover:hover .v-card-title {
  color: red; /* Change the color of the card title when the card is hovered */
}
.text-overlayb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.293);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 50px;
  font-weight: bold;
}
.about1-img{
  transition: 0.5s;
}
.about1-img:hover{
  transform: rotate(10deg) scale(1.1);
}
</style>
