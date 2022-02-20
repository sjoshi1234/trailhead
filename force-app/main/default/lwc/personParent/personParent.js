import { LightningElement } from 'lwc';

export default class PersonParent extends LightningElement {

    callChildMethod(){
        this.template.querySelector('c-test1').changeName();
    }
}