<template>
  <v-main style="background-color: #ebebeb">
    <v-container style="background-color: #ebebeb">
      <div class="text-center mt-15">
        <v-img
          max-width="670"
          max-height="600"
          class="mx-auto image"
          src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
        >
        </v-img>
        <h1>Thank you for your order!</h1>
        <p>Thank you for your order. We will be in touch with you shortly.</p>
        <v-btn
          color="#e5345b"
          to="/"
          class="text-white mt-15"
          style="width: 185px; height: 50px; border-radius: 20px"
          >Back to Home</v-btn
        >
        <div class="d-flex justify-center">
          <hr
            class="mt-10"
            style="width: 400px; border: none; border-top: 7px solid #fafafa"
          />
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style scoped></style>
