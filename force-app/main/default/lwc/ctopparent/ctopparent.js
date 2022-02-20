import { LightningElement } from "lwc";

export default class Ctopparent extends LightningElement {
  vara = "Mukta";
  varb = "Wife";

  handleMe(event) {
    this.vara = event.detail.firstname;
    this.varb = event.detail.title;
  }

  parentValue() {
    this.vara = "Advait";
    this.varb = "Son";
  }
}
