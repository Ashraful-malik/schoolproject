<template>
  <div class="background">
    <!-- <audio autoplay>
      <source src="Clair de Lune.mp3" />
      <source src="@/assets/mixkit-short.wav" />
    </audio> -->

    <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">
      <source src="@/assets/video.mp4" type="video/mp4" />
    </video>
    <vue-typed-js
      :strings="['Welcome To my Computer Project.']"
      :typeSpeed="80"
      :cursorChar="'_'"
    >
      <div class="row">
        <div class="col col-1">
          <div class="title">
            <h1><span class="typing"></span></h1>
            <router-link to="/project">
              <button class="view-project">View Projects</button>
            </router-link>
          </div>
        </div>
        <div class="col col-2">
          <div class="details">
            <div class="user-image">
              <img
                src="@/assets/images/terminalIcons.svg"
                alt=""
                class="terminal-icons"
              />
              <art />
            </div>
            <div class="info">
              <label for="">
                <vue-typed-js
                  :strings="['Ashraful Malik ']"
                  :contentType="'html'"
                  :startDelay="2900"
                  :cursorChar="'_'"
                >
                  <h1><span class="typing"></span></h1>
                </vue-typed-js>
              </label>
              <label>
                <vue-typed-js
                  :strings="['Class:XA ']"
                  :showCursor="false"
                  :startDelay="5000"
                >
                  <span class="typing"></span>
                </vue-typed-js>
              </label>
              <label>
                <vue-typed-js
                  :strings="['RollNo:16']"
                  :showCursor="false"
                  :startDelay="6000"
                >
                  <span class="typing"></span>
                </vue-typed-js>
              </label>
              <label>
                <vue-typed-js
                  :strings="['Subject:Computer']"
                  :showCursor="false"
                  :startDelay="7000"
                >
                  <span class="typing"></span>
                </vue-typed-js>
              </label>
            </div>
          </div>
        </div>
      </div>
    </vue-typed-js>
  </div>
</template>

<script>
import art from "./Art.vue";
export default {
  name: "home",
  components: {
    art,
  },
};
</script>

<style></style>
