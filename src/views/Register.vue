<template>
  <v-form v-model="valid" @submit.stop.prevent="snackbar = true">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <v-container grid-list-lg fluid>
                <v-layout row wrap>
                  <h3 class="headline mb-0">Register</h3>
                </v-layout>
              </v-container>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-lg fluid>
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      label="First name"
                      required
                    />
                  </v-flex>

                  <v-flex xs12 md6>
                    <v-text-field v-model="lastname" :rules="nameRules" label="Last name" required/>
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field
                      type="email"
                      v-model="email"
                      :rules="emailRules"
                      label="Email"
                      required
                    />
                  </v-flex>

                  <v-flex xs12 md6>
                    <v-text-field
                      type="password"
                      v-model="password"
                      :rules="passwordRequired"
                      label="Password"
                      required
                    />
                  </v-flex>

                  <v-flex xs12 md6>
                    <v-text-field
                      type="password"
                      v-model="confirmPassword"
                      :rules="passwordMatch"
                      label="Confirm Password"
                      required
                    />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-container grid-list-lg fluid>
                <v-layout row wrap>
                  <v-spacer></v-spacer>
                  <v-btn type="submit" flat color="primary">Register</v-btn>
                </v-layout>
              </v-container>
            </v-card-actions>

            <v-snackbar bottom left :timeout="3000" v-model="snackbar">
              Account created successfully
              <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
            </v-snackbar>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Register",
  data: function() {
    return {
      firstName: null,
      lastName: null,
      nameRules: [v => !!v || "Name is required"],
      email: null,
      emailRules: [
        v => !!v || "Email is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: null,
      confirmPassword: null,
      passwordRequired: [
        v => !!v || "Password is required"
      ],
      passwordMatch: [
        v =>
          this.password === this.confirmPassword || "The passwords don't match"
      ],
      snackbar: false,
      valid: false
    };
  }
};
</script>
