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
          <p class="text" data-aos="fade-up" data-aos-delay="500">#Login</p>
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
      <v-container>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="12" md="8" sm="8">
            <v-card flat>
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card-text data-aos="fade-right" data-aos-delay="500">
                        <p class="text-h4 font-weight-bold">
                          Hi, Welcome Back! 👋
                        </p>
                        <p class="grey--text">
                          Hello again, you've been missed !
                        </p>
                      </v-card-text>

                      <v-form
                        v-model="valid"
                        class="mt-5"
                        @submit.prevent="handleLogin"
                        data-aos="fade-up"
                        data-aos-delay="500"
                      >
                        <!-- Email -->
                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          :counter="50"
                          label="Email"
                          variant="outlined"
                          prepend-inner-icon="mdi-email"
                          required
                        ></v-text-field>

                        <!-- Password -->
                        <v-text-field
                          v-model="password"
                          :rules="passwordRules"
                          :counter="50"
                          label="Password"
                          variant="outlined"
                          prepend-inner-icon="mdi-lock"
                          @click:appendInner="passwordShow = !passwordShow"
                          :append-inner-icon="
                            passwordShow ? 'mdi-eye' : 'mdi-eye-off'
                          "
                          :type="passwordShow ? 'text' : 'password'"
                          required
                        ></v-text-field>

                        <div class="d-flex justify-space-between align-center">
                          <v-switch
                            label="Remember me"
                            color="#e5345b"
                            class="mt-4"
                          >
                          </v-switch>

                          <p
                            class="text-grey"
                            style="
                              text-decoration: none;
                              cursor: pointer;
                              font-size: 13px;
                            "
                          >
                            Forgot Password?
                          </p>
                        </div>

                        <v-btn
                          class="mt-2 text-white"
                          color="#e5345b"
                          block
                          large
                          depressed
                          type="submit"
                          :disabled="!valid"
                          ><span v-if="!isLoading"> Login </span>
                          <span v-else> Loading... </span>
                        </v-btn>

                        <h5 class="text-center mt-9 text-grey">
                          Or Log in using
                        </h5>

                        <div
                          class="d-flex align-center justify-space-between mt-9"
                        >
                          <v-btn class="ma-2" variant="outlined" color="grey">
                            <v-icon
                              start
                              icon="mdi-google"
                              color="red"
                            ></v-icon>
                            Google
                          </v-btn>
                          <v-btn class="ma-2" variant="outlined" color="grey">
                            <v-icon
                              start
                              icon="mdi-facebook"
                              color="blue"
                            ></v-icon>
                            Google
                          </v-btn>
                          <v-btn class="ma-2" variant="outlined" color="grey">
                            <v-icon
                              start
                              icon="mdi-twitter"
                              color="blue-lighten-3"
                            ></v-icon>
                            Google
                          </v-btn>
                        </div>
                      </v-form>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-sheet
                        color="#EEEEEE"
                        height="100%"
                        width="100%"
                        style="border-radius: 0 40px 0px 0px"
                      >
                        <div style="text-align: center; padding: 180px 0">
                          <h3
                            class="text-h5"
                            data-aos="fade-right"
                            data-aos-delay="500"
                          >
                            Don't have an account
                          </h3>
                          <p
                            class="mt-3 text-grey"
                            style="font-size: 15px"
                            data-aos="fade-up"
                            data-aos-delay="500"
                          >
                            Enter your personal <br />
                            information and join us!
                          </p>
                          <v-btn
                            rounded
                            width="250px"
                            class="mt-6"
                            @click="step++"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            >Signup</v-btn
                          >
                        </div>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item :value="2">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-sheet
                        color="#EEEEEE"
                        height="100%"
                        width="100%"
                        style="border-radius: 40px 0 0 0"
                      >
                        <div style="text-align: center; padding: 180px 0">
                          <h3
                            class="text-h5"
                            data-aos="fade-up"
                            data-aos-delay="500"
                          >
                            Already have an account ?
                          </h3>
                          <p
                            class="mt-3 text-grey"
                            style="font-size: 15px"
                            data-aos="fade-up"
                            data-aos-delay="500"
                          >
                            Keep connect with us and <br />
                            login with your personal info
                          </p>
                          <v-btn
                            rounded
                            width="250px"
                            class="mt-6"
                            @click="step--"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            >Login</v-btn
                          >
                        </div>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-card-text data-aos="fade-right" data-aos-delay="500">
                        <p class="text-h4 font-weight-bold">
                          Become one of us 🤘
                        </p>
                        <p class="text-grey">
                          Start control your financial today!
                        </p>
                      </v-card-text>

                      <v-form
                        v-model="valid"
                        class="mt-5"
                        @submit.prevent="handleSignup"
                        data-aos="fade-up"
                        data-aos-delay="500"
                      >
                        <!-- Username -->
                        <v-text-field
                          v-model="signupName"
                          :rules="nameRules"
                          :counter="50"
                          label="Username"
                          variant="outlined"
                          prepend-inner-icon="mdi-account"
                          required
                        ></v-text-field>

                        <!-- Email -->
                        <v-text-field
                          v-model="signupEmail"
                          :rules="emailRules"
                          :counter="50"
                          label="Email"
                          variant="outlined"
                          prepend-inner-icon="mdi-email"
                          required
                        ></v-text-field>

                        <!-- Password -->
                        <v-text-field
                          v-model="signupPassword"
                          :rules="passwordRules"
                          :counter="50"
                          label="Password"
                          variant="outlined"
                          prepend-inner-icon="mdi-lock"
                          @click:appendInner="passwordShow = !passwordShow"
                          :append-inner-icon="
                            passwordShow ? 'mdi-eye' : 'mdi-eye-off'
                          "
                          :type="passwordShow ? 'text' : 'password'"
                          required
                        ></v-text-field>

                        <v-btn
                          class="mt-2 text-white"
                          color="#e5345b"
                          block
                          large
                          depressed
                          type="submit"
                          :disabled="!valid"
                          >Signup</v-btn
                        >

                        <h5 class="text-center mt-9 text-grey">
                          Or Log in using
                        </h5>

                        <div
                          class="d-flex align-center justify-space-between mt-9"
                        >
                          <v-btn class="ma-2" variant="outlined" color="grey">
                            <v-icon
                              start
                              icon="mdi-google"
                              color="red"
                            ></v-icon>
                            Google
                          </v-btn>
                          <v-btn class="ma-2" variant="outlined" color="grey">
                            <v-icon
                              start
                              icon="mdi-facebook"
                              color="blue"
                            ></v-icon>
                            Google
                          </v-btn>
                          <v-btn class="ma-2" variant="outlined" color="grey">
                            <v-icon
                              start
                              icon="mdi-twitter"
                              color="blue-lighten-3"
                            ></v-icon>
                            Google
                          </v-btn>
                        </div>
                      </v-form>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-snackbar v-model="loginSnackbar" color="green" bottom right>
      Login Successfully!🎉

      <template v-slot:actions>
        <v-btn color="white" @click="loginSnackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>

    <v-snackbar v-model="loginErrorSnackbar" color="red" bottom right>
      This user is not found!🙅‍♂️

      <template v-slot:actions>
        <v-btn color="white" @click="loginSnackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>

    <v-snackbar v-model="signupSnackbar" color="green" bottom right>
      Signup Successfully!🎉

      <template v-slot:actions>
        <v-btn color="white" @click="signupSnackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data: () => ({
    hasError: null,
    step: 1,
    valid: false,
    email: "hyein@gmail.com",
    password: "hyein123",
    passwordShow: false,
    signupName: "",
    signupEmail: "",
    signupPassword: "",
    isLoading: false,
    loginSnackbar: false,
    signupSnackbar: false,
    loginErrorSnackbar: false,
    emailRules: [
      (value) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail must be valid.";
      },
      (value) => {
        if (value?.length <= 50) return true;

        return "Email must be less than 50 characters.";
      },
    ],

    passwordRules: [
      (value) => {
        if (value) return true;

        return "Password is requred.";
      },
      (value) => {
        if (value.length >= 8) return true;

        return "Password must be at least 8 characters.";
      },
      (value) => {
        if (value?.length <= 50) return true;

        return "Password must be less than 50 characters.";
      },
    ],

    nameRules: [
      (value) => {
        if (value) return true;

        return "Username is requred.";
      },
      (value) => {
        if (value?.length <= 50) return true;

        return "Username must be less than 50 characters.";
      },
    ],
  }),
  methods: {
    async handleLogin() {
      if (this.isLoading) return;

      this.isLoading = true;

      const { data, error } = await useFetch(
        "http://3.90.217.148:3002/api/users/login",
        {
          method: "post",
          body: {
            email: this.email,
            password: this.password,
          },
        }
      );

      if (error.value) {
        this.loginErrorSnackbar = true;
        this.isLoading = false;
        return;
      }

      const auth = useAuth();
      auth.value.isAuthenticated = true;

      // set expiration date to 1 day
      Cookies.set("token", data.value.token);
      // Cookies.set("token", data.value.token, { expires: 1 });

      this.isLoading = false;

      this.loginSnackbar = true;

      navigateTo("/");
    },

    async handleSignup() {
      const { data } = await useFetch("http://3.90.217.148:3002/api/users", {
        method: "post",
        body: {
          name: this.signupName,
          email: this.signupEmail,
          password: this.signupPassword,
        },
      });
      console.log(data.value);

      this.signupSnackbar = true;

      this.step--;
    },
  },
};
</script>

<style scoped></style>
