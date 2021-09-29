<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <vue-typed-js
          :strings="['', 'Projects$']"
          :loop="true"
          :typeSpeed="150"
          :backSpeed="50"
          :cursorChar="'_'"
        >
          <h2><span class="typing"></span></h2>
        </vue-typed-js>
        <div class="row">
          <div
            class="col "
            v-for="(data, index) in projects"
            :key="index"
            @click="goTodetail(data.name)"
          >
            <div class="idcard">
              <img :src="data.image" alt="image" />
              <p>{{ data.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",

  data() {
    return {
      projects: [
        {
          name: "Id Card",
          id: 1,
          image: require("@/assets/images/idCard.svg"),
        },
        {
          name: "Invitation Card",
          image: require("@/assets/images/invitation.svg"),
          id: 2,
        },
        {
          name: "Resume",
          image: require("@/assets/images/resume.svg"),
          id: 3,
        },
        {
          name: "Question Paper",
          image: require("@/assets/images/questionpaper.svg"),
          id: 4,
        },
        {
          name: "Form",
          image: require("@/assets/images/form.svg"),

          id: 5,
        },
        {
          name: "Bio Data",
          image: require("@/assets/images/biodata.svg"),
          id: 6,
        },
      ],
    };
  },
  methods: {
    goTodetail(pro) {
      this.$router.push({ name: "details", params: { slug: pro } });
      this.$route.params.id;
    },
  },
};
</script>

<style></style>
