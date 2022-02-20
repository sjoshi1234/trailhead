import { LightningElement } from 'lwc';

export default class SampleTestLWC extends LightningElement {
    message = 'Hello ';

    //lifecycle hooks
    connectedCallback(){
        setTimeout(() => { this.message = 'Hello Advait !!!'},7000);
    }
}