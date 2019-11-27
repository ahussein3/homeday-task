<template>
  <div>
    <fieldset>
      <h4>
        Official Information:
        <span>Step 3 - 3</span>
      </h4>
      <div class="form-group">
        <label>
          E-mail:
          <span>*</span>
        </label>
        <input
          v-model="userData.email"
          type="text"
          name="email"
          placeholder="email"
          class="form-control"
          v-validate="'required|email'"
        />
        <span class="messege-error">{{ errors.first("email") }}</span>
      </div>
      <div class="form-group">
        <input
          v-model="userData.termsAndService"
          type="checkbox"
          name="terms"
          v-validate="'required'"
        />
        <label>
          I agree to the terms of service
          <span>*</span>
        </label>
        <span class="d-block messege-error">{{ errors.first("terms") }}</span>
      </div>
    </fieldset>
    <div class="form-wizard-buttons">
      <button @click.once="previousStep" type="button" class="btn btn-previous">
        Previous
      </button>
      <button @click="validateBeforeSubmit" type="button" class="btn btn-next">
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: { type: Object, default: () => 3 },
    userData: { type: Object, default: () => {} }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(() => {
        if (!this.errors.any()) {
          this.nextStep();
        }
      });
    },
    previousStep() {
      this.steps.currentStep--;
    }
  }
};
</script>

<style></style>
