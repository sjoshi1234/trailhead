import { LightningElement } from "lwc";

export default class Ctopchild extends LightningElement {
  sendToParent() {
    const cevent = new CustomEvent("buttonclick", {
      detail: {
        firstname: "sameer",
        title: "father"
      }
    });

    this.dispatchEvent(cevent);
  }
}
