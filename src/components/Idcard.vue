<template>
  <div>
    <div class="idcard-container">
      <div class="idcard">
        <div class="idcard-content">
          <div class="image">
            <div class="image-wrapper">
              <img src="@/assets/images/boy.svg" alt="image" />
            </div>
            <p>hello</p>
          </div>
          <div class="id-card-details">
            <div class="name">
              <h1>John smeth</h1>
            </div>
            <div class="id">
              <p>Id No</p>
              <span>
                06616
              </span>
            </div>
            <div class="email">
              <p>Email</p>
              <span>ashraful@gmail.com</span>
            </div>
            <div class="phone">
              <p>Phone No</p>
              <span>+91 7499636552</span>
            </div>
            <div class="adress">
              <p>Adress</p>
              <span>Kund Mohalla Daltonganj</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "idcard",
  data() {
    return {};
  },
};
</script>

<style></style>
