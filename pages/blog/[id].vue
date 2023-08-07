<template>
  <v-card>
    <v-img
      src="/images/b2.jpg"
      height="250"
      width="100%"
      class="bg-grey-lighten-2"
      cover
    >
      <div class="text-overlay">
        <p class="text" data-aos="fade-right" data-aos-delay="500">
          #Read More
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
    <v-img
      :src="blog.image"
      height="450"
      width="100%"
      class="bg-grey-lighten-2 mt-10"
      data-aos="zoom-in-up"
      data-aos-delay="250"
    ></v-img>

    <h1 class="mt-8" data-aos="fade-right" data-aos-delay="500">
      {{ blog.title }}
    </h1>
    <p style="color: grey" data-aos="fade-up" data-aos-delay="500">
      Published At : 02/07/2023
    </p>
    <div class="d-flex mt-4" data-aos="fade-up" data-aos-delay="500">
      <v-icon icon="mdi-comment-text-outline" color="#e5345b"></v-icon>
      <p class="ml-2">5 Comments</p>
    </div>

    <p class="mt-10" data-aos="fade-up" data-aos-delay="500">
      {{ blog.article }}
    </p>
    <p class="mt-7 font-weight-bold" data-aos="fade-up" data-aos-delay="500">
      “Ridiculus mus mauris vitae ultricies leo. Non enim praesent elementum
      facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula
      ullamcorper malesuada.”
    </p>
    <p class="mt-7" data-aos="fade-up" data-aos-delay="500">
      As a result, the store “remained empty and could not operate from the
      early hours of the afternoon” on Friday. Dior claims the problem was
      “amplified” by the event being scheduled on a Friday, “a day when surely
      proceeds are [significant]”. It is claimed that the French house is
      requesting €100,000 (£85,000) in compensation for lost business. According
      to the letter, if Valentino fails to pay the full amount within 15 days
      Dior, will “adopt all the necessary measures to protect its rights”.
    </p>

    <p class="mt-7" data-aos="fade-up" data-aos-delay="500">
      This article is more than 7 months old Dior v Valentino: row breaks out
      after Rome show allegedly blocks boutique This article is more than 7
      months old Dior reportedly demands €100,000 compensation from Valentino
      after Spanish Steps show ‘hampered’ access to store Fleur Britten Mon 11
      Jul 2022 16.43 BST A row has broken out in the world of high fashion after
      the French house Dior demanded compensation from Italian rival Valentino
      for allegedly blocking access to a Dior boutique during a show on the
      Spanish Steps in Rome, according to a claim by fashion website Women’s
      Wear Daily. Valentino positioned its audience of fashion editors,
      photographers and celebrities – among them Naomi Campbell, Kate Hudson and
      Anne Hathaway – at the foot of the 18th-century travertine staircase in
      Piazza di Spagna. The Dior shop on Via Condotti looks on to the piazza.
    </p>

    <p class="mt-7" data-aos="fade-up" data-aos-delay="500">
      It is claimed that the French house is requesting €100,000 (£85,000) in
      compensation for lost business. According to the letter, if Valentino
      fails to pay the full amount within 15 days Dior, will “adopt all the
      necessary measures to protect its rights”. Dior claims that Valentino had
      written to local retailers on 27 June, stating “guaranteed regular foot
      traffic to the stores”. Dior maintains this was “not reflected in any way”
      on the night.
    </p>

    <v-card class="mt-15 pa-5">
      <div class="d-flex" data-aos="fade-right" data-aos-delay="500">
        <v-icon icon="mdi-comment-text-outline" color="#e5345b"></v-icon>
        <p class="ml-2">5 Comments</p>
      </div>

      <div class="d-flex mt-8" v-for="c in comments" :key="c">
        <p data-aos="fade-right" data-aos-delay="500">{{ c.id }}.</p>
        <v-card
          class="ml-5 pa-5"
          width="100%"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="d-flex">
            <v-icon icon="mdi-calendar-month-outline" color="#e5345b"></v-icon>
            <p class="ml-2">{{ c.date }}</p>
            <v-icon
              class="ml-5"
              icon="mdi-account-circle-outline"
              color="#e5345b"
            ></v-icon>
            <p class="ml-2">{{ c.name }}</p>
          </div>

          <v-divider
            class="my-5"
            style="border: none; border-top: 2px solid black"
          ></v-divider>

          <p>
            {{ c.comment }}
          </p>
        </v-card>
      </div>

      <p
        class="text-uppercase mt-15 font-weight-medium"
        style="font-size: 20px"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        Leave a comment
      </p>
      <v-form class="mt-5" data-aos="fade-up" data-aos-delay="500">
        <div class="d-flex">
          <v-text-field
            label="Name"
            variant="outlined"
            class="mr-5"
            style="width: 50%"
          ></v-text-field>
          <v-text-field
            label="Email"
            variant="outlined"
            style="width: 50%"
          ></v-text-field>
        </div>
        <v-textarea
          label="Comment"
          variant="outlined"
          class="mt-5"
          style="width: 100%"
        ></v-textarea>

        <div class="d-flex justify-end">
          <v-btn
            class="mt-5"
            color="#e5345b"
            type="submit"
            height="60px"
            style="color: white"
          >
            Post Comment
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
const route = useRoute();

const id = route.params.id;

const { data: blog } = await useFetch(
  `http://18.208.219.245:3002/api/blog/${id}`
);
console.log(blog.value);

const comments = ref([
  {
    id: 1,
    date: "April 21, 2021",
    name: "Hyein",
    comment: "This what I am looking for great article ma man.",
  },
  {
    id: 2,
    date: "December 29, 2020",
    name: "Minji",
    comment:
      "Hi we are accounting company providing resources for sellers like you, check out this article on sales tax and let us know if it is beneficial to you. https://letsledger.com/blog/taxes/sales-tax-nexus-for-small-businesses/.",
  },
  {
    id: 3,
    date: "October 28, 2019",
    name: "Jisoo",
    comment: "Interesting article.",
  },
  {
    id: 4,
    date: "June 9, 2020",
    name: "Suzy",
    comment: "Great article.",
  },
  {
    id: 5,
    date: "July 8, 2018",
    name: "Jihoo",
    comment: "nice article.",
  },
]);
</script>

<style scoped></style>
