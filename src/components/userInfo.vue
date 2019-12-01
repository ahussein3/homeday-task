<template>
  <div>
    <fieldset>
      <h4>
        Personal Information:
        <span>Step 2 - 3</span>
      </h4>
      <div class="form-group">
        <label>
          First Name:
          <span>*</span>
        </label>
        <input
          v-model="userData.firstName"
          type="text"
          name="First Name"
          placeholder="First Name"
          class="form-control"
          v-validate="'required'"
          :class="{ 'input-error': errors.has('First Name') }"
        />
        <span class="messege-error">{{ errors.first("First Name") }}</span>
      </div>
      <div class="form-group">
        <label>
          Last Name:
          <span>*</span>
        </label>
        <input
          v-model="userData.lastName"
          type="text"
          name="Last Name"
          placeholder="Last Name"
          class="form-control"
          v-validate="'required'"
          :class="{ 'input-error': errors.has('Last Name') }"
        />
        <span class="messege-error">{{ errors.first("Last Name") }}</span>
      </div>
      <div class="form-group">
        <label>
          User Name:
          <span>*</span>
        </label>
        <input
          type="text"
          name="Github Username"
          placeholder="Github Username"
          class="form-control"
          v-validate="'required|regex:^([a-z0-9]+-)*[a-z0-9]+$'"
          v-model="userData.githubUserName"
          :class="{ 'input-error': errors.has('Github Username') }"
          @input="resetErrorMessage"
        />
        <span class="d-block messege-error">{{
          errors.first("Github Username")
        }}</span>
        <span v-if="errorMessage" class="d-block messege-error">{{
          errorMessage
        }}</span>
      </div>
    </fieldset>
    <div class="form-wizard-buttons">
      <button @click.once="previousStep" type="button" class="btn btn-previous">
        Previous
      </button>
      <button @click="validateBeforeSubmit" type="button" class="btn btn-next">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { fetchGithubUser } from "./../service/user.service";

export default {
  props: {
    steps: { type: Object, default: () => 2 },
    userData: { type: Object, default: () => {} }
  },
  data() {
    return {
      errorMessage: ""
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(() => {
        if (!this.errors.any()) {
          this.checkGithubAccountValidation(this.userData.githubUserName);
        }
      });
    },
    previousStep() {
      this.steps.currentStep--;
    },
    nextStep() {
      if (this.steps.currentStep === 2) this.steps.currentStep++;
    },
    checkGithubAccountValidation(userName) {
      this.errorMessage = "";
      const config = { stopErrorHandle: true };
      fetchGithubUser(userName, config)
        .then(response => {
          this.$store.dispatch("setUserProfile", response);
          this.nextStep();
        })
        .catch(({ status }) => {
          if (status === 404)
            this.errorMessage = `There is no Github account found associated with this username please try another one`;
        });
    },
    resetErrorMessage() {
      this.errorMessage = "";
    }
  },
  created() {}
};
</script>
