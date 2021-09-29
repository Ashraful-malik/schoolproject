<template>
  <div>
    <div class="details">
      <div class="detail-navbar">
        <router-link to="/">
          <button class="home-btn">Home</button>
        </router-link>
        <router-link to="/project">
          <button class="project-btn">Projects</button>
        </router-link>
      </div>
      <div class="demo" v-if="slug == 'Id Card'">
        <idcard />
      </div>
      <div class="demo" v-if="slug == 'Form'">
        <Form />
      </div>
      <div class="demo" v-if="slug == 'Invitation Card'">
        <birthdaycard />
      </div>
      <div class="demo" v-if="slug == 'Question Paper'">
        <questionpapaer />
      </div>
      <div class="demo" v-if="slug == 'Bio Data'">
        <biodata />
      </div>
      <div class="demo" v-if="slug == 'Resume'">
        <resume />
      </div>
    </div>
  </div>
</template>

<script>
import idcard from "./Idcard.vue";
import Form from "./Form.vue";
import birthdaycard from "./Birthdaycard.vue";
import questionpapaer from "./Questionpaper.vue";
import biodata from "./Biodata.vue";
import resume from "./Resume.vue";

export default {
  name: "detail",
  data() {
    return {
      slug: this.$route.params.slug,
      projects: [
        {
          name: "Id Card",
          id: 1,
        },
        {
          name: "Form",
          id: 2,
        },
      ],
    };
  },
  components: {
    idcard,
    Form,
    birthdaycard,
    questionpapaer,
    resume,
    biodata,
  },
};
</script>

<style></style>
