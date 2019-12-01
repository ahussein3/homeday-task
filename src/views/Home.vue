<template>
  <section class="box-container">
    <div class="form-wizard">
      <!-- Form Wizard -->
      <form role="form" action method="post">
        <h3>Sign Up Office Employee Account</h3>
        <p>Fill all form field to go next step</p>

        <!-- Form progress -->
        <div class="form-wizard-steps form-wizard-tolal-steps-3">
          <!-- Step 1 -->
          <div
            class="form-wizard-step"
            :class="{ active: steps.currentStep >= 1 }"
          >
            <div class="form-wizard-step-icon">
              <svgicon name="wizard" width="15"></svgicon>
            </div>
            <p>Personal</p>
          </div>
          <!-- Step 1 -->

          <!-- Step 2 -->
          <div
            class="form-wizard-step"
            :class="{ active: steps.currentStep >= 2 }"
          >
            <div class="form-wizard-step-icon">
              <svgicon name="user" width="15"></svgicon>
            </div>
            <p>Contact</p>
          </div>
          <!-- Step 2 -->

          <!-- Step 3 -->
          <div
            class="form-wizard-step"
            :class="{ active: steps.currentStep >= 3 }"
          >
            <div class="form-wizard-step-icon">
              <svgicon name="profile" width="15"></svgicon>
            </div>
            <p>Official</p>
          </div>
          <!-- Step 3 -->
        </div>
        <!-- Form progress -->
        <keep-alive>
          <transition name="fade" mode="out-in">
            <component
              :userData="userData"
              :steps="steps"
              :is="componentsMap[steps.currentStep]"
            ></component>
          </transition>
        </keep-alive>
      </form>
      <!-- Form Wizard -->
    </div>
  </section>
</template>

<script>
import Intro from "@/components/intro";
import TermsAndCondition from "@/components/termsAndService";
import UserInfo from "@/components/userInfo";
import "@/assets/svg-js/user";
import "@/assets/svg-js/profile";
import "@/assets/svg-js/wizard";

export default {
  name: "home",
  components: { Intro, TermsAndCondition, UserInfo },
  props: {
    msg: String
  },
  data() {
    return {
      componentsMap: {
        1: "Intro",
        2: "UserInfo",
        3: "TermsAndCondition"
      },
      steps: { currentStep: 1 },
      userData: {
        firstName: "",
        lastnName: "",
        githubUserName: "",
        email: "",
        termsAndService: false
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.form-wizard h2 {
  margin-top: 10px;
  font-size: 38px;
  font-weight: 100;
  color: #555;
  line-height: 50px;
}

.form-wizard h3 {
  font-size: 25px;
  font-weight: 300;
  color: $primary;
  line-height: 30px;
  margin-top: 0;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.form-wizard h4 {
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #555;
}

.form-wizard ::selection {
  background: $primary;
  color: $white;
  text-shadow: none;
}

.form-control {
  height: 44px;
  width: 100%;
  margin: 0;
  padding: 0 20px;
  vertical-align: middle;
  background: $white;
  border: 1px solid #ddd;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 44px;
  color: $gray;
  border-radius: 4px;
  box-shadow: none;
  transition: all 0.3s;
}
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-top: 9px;
  margin-left: -20px;
}

.form-control option:hover,
.form-control option:checked {
  box-shadow: 0 0 10px 100px $primary inset;
}

.form-control:focus {
  outline: 0;
  background: $white;
  border: 1px solid #ccc;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.form-control:-moz-placeholder {
  color: $gray;
}
.form-control:-ms-input-placeholder {
  color: $gray;
}
.form-control::-webkit-input-placeholder {
  color: $gray;
}

.form-wizard label {
  font-weight: 300;
}
.form-wizard label span {
  color: $primary;
}

.form-wizard .btn {
  min-width: 105px;
  height: 40px;
  margin: 0;
  padding: 0 20px;
  vertical-align: middle;
  border: 0;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 40px;
  color: $white;
  border-radius: 4px;
  text-shadow: none;
  box-shadow: none;
  transition: all 0.3s;
}

.form-wizard .btn:hover {
  background: #f34727;
  color: $white;
}
.form-wizard .btn:active {
  outline: 0;
  background: #f34727;
  color: $white;
  box-shadow: none;
}
.form-wizard .btn:focus,
.form-wizard .btn:active:focus,
.form-wizard .btn.active:focus {
  outline: 0;
  background: #f34727;
  color: $white;
}

.form-wizard .btn.btn-next,
.form-wizard .btn.btn-next:focus,
.form-wizard .btn.btn-next:active:focus,
.form-wizard .btn.btn-next.active:focus {
  background: $primary;
}

.form-wizard .btn.btn-submit,
.form-wizard .btn.btn-submit:focus,
.form-wizard .btn.btn-submit:active:focus,
.form-wizard .btn.btn-submit.active:focus {
  background: $primary;
}

.form-wizard .btn.btn-previous,
.form-wizard .btn.btn-previous:focus,
.form-wizard .btn.btn-previous:active:focus,
.form-wizard .btn.btn-previous.active:focus {
  margin-right: 20px;
  background: #bbb;
}

.form-wizard-steps {
  margin: auto;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
}
.form-wizard-step {
  padding-top: 10px !important;
  border: 2px solid $white;
  background: #ccc;
  transform: skewX(-30deg);
}
.form-wizard-step.active {
  background: $primary;
}
.form-wizard-step.activated {
  background: $primary;
}

.form-wizard-tolal-steps-3 .form-wizard-step {
  position: relative;
  float: left;
  width: 33.33%;
  padding: 0 5px;
}

.form-wizard-step-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-top: 15px;
  background: #ddd;
  font-size: 16px;
  color: #777;
  line-height: 40px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  transform: skewX(30deg);
}
.form-wizard-step.activated .form-wizard-step-icon {
  background: $primary;
  border: 1px solid $white;
  color: $white;
  line-height: 40px;
}
.form-wizard-step.active .form-wizard-step-icon {
  background: $white;
  border: 1px solid $white;
  color: $primary;
  line-height: 38px;
}

.form-wizard-step p {
  color: #fff;
  transform: skewX(30deg);
}
.form-wizard-step.activated p {
  color: #fff;
}
.form-wizard-step.active p {
  color: #fff;
}

.form-wizard fieldset {
  text-align: left;
  border: 0px !important;
  min-height: 300px;
}

.form-wizard-buttons {
  text-align: right;
}

.form-wizard .input-error {
  border-color: $primary;
}
.messege-error {
  color: $primary;
  font-size: 13px;
  font-weight: 400;
}
</style>
