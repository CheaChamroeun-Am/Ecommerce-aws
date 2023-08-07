<template>
  <v-main>
    <v-text-field
      class="mt-5"
      label="Search"
      v-model="searchTerm"
      @input="handleAllSearch"
      variant="outlined"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
  </v-main>
</template>

<script setup>
import axios from "axios";

const searchTerm = ref("");
const queryTimeout = ref(null);
const products = ref([]);

const handleAllSearch = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchTerm !== "") {
      const res = await axios.get(
        `http://3.90.217.148:3002/api/products/${searchTerm.value}`
      );
      console.log(res.data);
    }

    products.value = null;
  }, 300);
};
</script>

<style scoped></style>
`
