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
        <div class="text-overlay">
          <p class="text" data-aos="fade-right" data-aos-delay="500">#let's_talk</p>
          <p class="text-white text-center" data-aos="fade-up" data-aos-delay="500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </v-img>
    </v-card>

    <v-container>
      <v-row class="mt-5">
        <v-col cols="12" md="6">
          <p class="text-uppercase" data-aos="fade-right" data-aos-delay="500">Get in touch</p>
          <h2 class="font-weight-bold mt-5" data-aos="fade-right" data-aos-delay="500">
            Visit one of our agency locations or contact use today
          </h2>
          <h6 class="font-weight-bold mt-4" style="font-size: 15px" data-aos="fade-right" data-aos-delay="500">
            Head Office
          </h6>
          <div class="mt-8" data-aos="fade-up" data-aos-delay="500">
            <v-icon icon="mdi-map-outline"> </v-icon>
            <span class="ms-5" style="color: #6c757d"
              >56 Glassford Street 234 Toulkok PhnomPenh Cambodia</span
            >
          </div>

          <div class="mt-6" data-aos="fade-up" data-aos-delay="500">
            <v-icon icon="mdi-email-outline"> </v-icon>
            <span class="ms-5" style="color: #6c757d">contact@example.com</span>
          </div>

          <div class="mt-6" data-aos="fade-up" data-aos-delay="500">
            <v-icon icon="mdi-phone"> </v-icon>
            <span class="ms-5" style="color: #6c757d">023 456 789</span>
          </div>

          <div class="mt-6" data-aos="fade-up" data-aos-delay="500">
            <v-icon icon="mdi-clock-time-four-outline"> </v-icon>
            <span class="ms-5" style="color: #6c757d"
              >Monday to Saturday: 9:00am to 16.pm</span
            >
          </div>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31270.029650438657!2d104.88003710996237!3d11.569505918028316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951725d8c4835%3A0x2047e2df9364f385!2sKhan%20Tuol%20Kouk%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1674752758033!5m2!1sen!2skh"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            data-aos="zoom-in-up" data-aos-delay="250"
          ></iframe>
        </v-col>
      </v-row>

      <v-card class="pa-5 mt-10">
        <v-row class="mt-5">
          <v-col cols="12" md="6">
            <p class="text-uppercase" data-aos="fade-right" data-aos-delay="500">Leave a message</p>
            <h3 data-aos="fade-right" data-aos-delay="500">We love to hear from you</h3>
            <v-form class="mt-6" data-aos="fade-up" data-aos-delay="500">
              <v-text-field
                label="Name"
                variant="outlined"
                dense
                placeholder="Enter your name"
              ></v-text-field>
              <v-text-field
                label="Email"
                variant="outlined"
                dense
                placeholder="Enter your email"
              ></v-text-field>
              <v-text-field
                label="Phone"
                variant="outlined"
                dense
                placeholder="Enter your phone"
              ></v-text-field>
              <v-textarea
                label="Message"
                variant="outlined"
                dense
                placeholder="Enter your message"
              ></v-textarea>
              <v-btn color="#e5345b" class="mt-5 text-white px-15">Send</v-btn>
            </v-form>
          </v-col>

          <v-col cols="12" md="6" class="ps-10">
            <div v-scroll-y style="height: 500px; overflow-y: auto">
              <div class="d-flex mt-5" v-for="c in 5" :key="c">
                <v-avatar size="x-large">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819"
                    alt="avatar"
                    style="width: 100%; height: 100%"
                    data-aos="zoom-in-up" data-aos-delay="500"
                  />
                </v-avatar>
                <div class="ms-5" data-aos="fade-up" data-aos-delay="500">
                  <h3 >John Doe</h3>
                  <p class="mt-2 text-muted">Senior: Marketing Manager</p>
                  <p class="text-muted">Email: contact@example.com</p>
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, alias aliquid incidunt minima debitis eum nemo .
                  </p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style scoped></style>
