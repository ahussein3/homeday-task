import { get } from "lodash-es";

export default class ErrorModel {
  constructor({ response: error = null, config }) {
    this.data = get(error, "data", {});
    this.status = get(error, "status", null);
    this.title = get(error, "data.title", "Unhandled error");
    this.message = get(
      error,
      "data.message",
      "Unspecified error. Please try again"
    );
    this.map = get(error, "data.errors") ? error.data.errors : {};
    this.stopErrorHandle = get(config, "stopErrorHandle", false);
  }
}
