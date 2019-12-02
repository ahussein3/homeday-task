<template>
  <div class="intro-section">
    <fieldset>
      <h4>
        Introduction:
        <span>Step 1 - 3</span>
      </h4>
      <p class>
        welcome to sign up employee form please follow up with the wizard to
        successfully sign up using github username
      </p>
    </fieldset>
    <div class="form-wizard-buttons">
      <button
        v-on:click.once="validateBeforeSubmit"
        type="button"
        class="btn btn-next"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: { type: Object, default: () => 1 }
  },
  methods: {
    validateBeforeSubmit() {
      this.steps.currentStep++;
    }
  }
};
</script>

<style lang="scss" scoped>
.intro-section {
  p {
    text-align: center;
    margin-top: 50px;
  }
}
</style>
