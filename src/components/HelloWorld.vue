<template>
  <section class="form-box">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 form-wizard"
        >
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
                  <i class="fa fa-user" aria-hidden="true"></i>
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
                  <i class="fa fa-location-arrow" aria-hidden="true"></i>
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
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
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
      </div>
    </div>
  </section>
</template>

<script>
import Intro from "./intro";
import TermsAndCondition from "./termsAndService";
import UserInfo from "./userInfo";
export default {
  name: "HelloWorld",
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
.form-box {
  padding-top: 40px;
  padding-bottom: 40px;

  background: rgb(234, 88, 4); /* Old browsers */
  background: -moz-linear-gradient(
    top,
    rgba(234, 88, 4, 1) 0%,
    rgba(234, 40, 3, 1) 51%,
    rgba(234, 88, 4, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(234, 88, 4, 1) 0%,
    rgba(234, 40, 3, 1) 51%,
    rgba(234, 88, 4, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(234, 88, 4, 1) 0%,
    rgba(234, 40, 3, 1) 51%,
    rgba(234, 88, 4, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ea5804', endColorstr='#ea5804',GradientType=0 ); /* IE6-9 */
}

.form-wizard {
  width: 80%;
  padding: 25px;
  background: #fff;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  box-shadow: 0px 0px 6px 3px #777;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #888;
  line-height: 30px;
  text-align: center;
  margin: auto;
}

.form-wizard strong {
  font-weight: 500;
}

.form-wizard a,
.form-wizard a:hover,
.form-wizard a:focus {
  color: #ea2803;
  text-decoration: none;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}

.form-wizard h1,
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
  color: #ea2803;
  line-height: 30px;
  margin-top: 0;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.form-wizard h4 {
  float: left;
  font-size: 20px;
  font-weight: 300;
  color: #ea2803;
  line-height: 26px;
  width: 100%;
}
.form-wizard h4 span {
  float: right;
  font-size: 18px;
  font-weight: 300;
  color: #555;
  line-height: 26px;
}

.form-wizard ::selection {
  background: #ea2803;
  color: #fff;
  text-shadow: none;
}

.form-control {
  height: 44px;
  width: 100%;
  margin: 0;
  padding: 0 20px;
  vertical-align: middle;
  background: #fff;
  border: 1px solid #ddd;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 44px;
  color: #888;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"],
.radio input[type="radio"],
.radio-inline input[type="radio"] {
  position: absolute;
  margin-top: 9px;
  margin-left: -20px;
}

.form-control option:hover,
.form-control option:checked {
  box-shadow: 0 0 10px 100px #ea2803 inset;
}

.form-control:focus {
  outline: 0;
  background: #fff;
  border: 1px solid #ccc;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.form-control:-moz-placeholder {
  color: #888;
}
.form-control:-ms-input-placeholder {
  color: #888;
}
.form-control::-webkit-input-placeholder {
  color: #888;
}

.form-wizard label {
  font-weight: 300;
}
.form-wizard label span {
  color: #ea2803;
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
  color: #fff;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  text-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}

.form-wizard .btn:hover {
  background: #f34727;
  color: #fff;
}
.form-wizard .btn:active {
  outline: 0;
  background: #f34727;
  color: #fff;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.form-wizard .btn:focus,
.form-wizard .btn:active:focus,
.form-wizard .btn.active:focus {
  outline: 0;
  background: #f34727;
  color: #fff;
}

.form-wizard .btn.btn-next,
.form-wizard .btn.btn-next:focus,
.form-wizard .btn.btn-next:active:focus,
.form-wizard .btn.btn-next.active:focus {
  background: #ea2803;
}

.form-wizard .btn.btn-submit,
.form-wizard .btn.btn-submit:focus,
.form-wizard .btn.btn-submit:active:focus,
.form-wizard .btn.btn-submit.active:focus {
  background: #ea2803;
}

.form-wizard .btn.btn-previous,
.form-wizard .btn.btn-previous:focus,
.form-wizard .btn.btn-previous:active:focus,
.form-wizard .btn.btn-previous.active:focus {
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
  border: 2px solid #fff;
  background: #ccc;
  -ms-transform: skewX(-30deg); /* IE 9 */
  -webkit-transform: skewX(-30deg); /* Safari */
  transform: skewX(-30deg); /* Standard syntax */
}
.form-wizard-step.active {
  background: #ea2803;
}
.form-wizard-step.activated {
  background: #ea2803;
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
  margin-top: 4px;
  background: #ddd;
  font-size: 16px;
  color: #777;
  line-height: 40px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -ms-transform: skewX(30deg); /* IE 9 */
  -webkit-transform: skewX(30deg); /* Safari */
  transform: skewX(30deg); /* Standard syntax */
}
.form-wizard-step.activated .form-wizard-step-icon {
  background: #ea2803;
  border: 1px solid #fff;
  color: #fff;
  line-height: 38px;
}
.form-wizard-step.active .form-wizard-step-icon {
  background: #fff;
  border: 1px solid #fff;
  color: #ea2803;
  line-height: 38px;
}

.form-wizard-step p {
  color: #fff;
  -ms-transform: skewX(30deg); /* IE 9 */
  -webkit-transform: skewX(30deg); /* Safari */
  transform: skewX(30deg); /* Standard syntax */
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
  border-color: #ea2803;
}
.messege-error {
  color: #ea2803;
  font-size: 13px;
  font-weight: 400;
}
.d-block {
  display: block;
}
</style>
