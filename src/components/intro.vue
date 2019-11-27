<template>
  <div>
    <fieldset>
      <h4>
        Introduction:
        <span>Step 1 - 3</span>
      </h4>
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
      //validate

      this.steps.currentStep++;
    }
  }
};
</script>

<style></style>
