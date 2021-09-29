<template>
  <div>
    <div class="form-container">
      <div class="left">
        <div class="header">
          <h2 class="animation a1">Create Account</h2>
          <h4 class="animation a2">
            <!-- Log in to your account using email and password -->
          </h4>
        </div>
        <div class="form">
          <input
            type="name"
            class="form-field animation a3"
            placeholder="Your Name"
          />
          <input
            type="date"
            class="form-field animation a3"
            placeholder="birthdaye"
          />
          <input
            type="email"
            class="form-field animation a4"
            placeholder="email"
          />
          <input
            type="password"
            class="form-field animation a4"
            placeholder="Password"
          />
          <!-- <p class="animation a5"><a href="#">Forgot Password</a></p> -->
          <button class="animation a6">LOGIN</button>
        </div>
      </div>
      <div class="right"></div>
    </div>

    <h2></h2>
  </div>
</template>

<script>
export default {
  name: "form",
  data() {
    return {};
  },
};
</script>

<style></style>
