<template>
  <v-form v-model="valid" @submit.stop.prevent="snackbar = true">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <v-container grid-list-lg fluid>
                <v-layout row wrap>
                  <h3 class="headline mb-0">Log In</h3>
                </v-layout>
              </v-container>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-lg fluid>
                <v-layout row wrap>             

                  <v-flex xs12>
                    <v-text-field type="email" v-model="email" :rules="emailRules" label="Email" required />
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field type="password" v-model="password" :rules="passwordRules" label="Password" required />
                  </v-flex>

                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-container grid-list-lg fluid>
                <v-layout row wrap>
                  <v-spacer></v-spacer>
                  <v-btn type="submit" flat color="primary">Log In</v-btn>
                </v-layout>                
              </v-container>

            </v-card-actions>
            <v-snackbar bottom left :timeout="3000" v-model="snackbar">
              Welcome back, Zach
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
  name: "Login",
  data: function() {
    return {
      email: null,
      emailRules: [
        v => !!v || "Email is required"
      ],
      password: null,
      passwordRules: [
        v => !!v || "Password is required"
      ],
      snackbar: false,
      valid: false
    };
  }
};
</script>
