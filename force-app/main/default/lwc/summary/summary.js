import { LightningElement, api } from 'lwc';

export default class Summary extends LightningElement {

    @api
    title ='Sameer';
    @api
    description ='Consultant';

    @api
    openflag = false;

    get classToggle() {
       return this.openflag ? 'slds-summary-detail slds-is-open' : 'slds-summary-detail';
    } 

    get iconName(){
        return this.openflag ? 'utility:chevrondown' : 'utility:chevronright';
    }

    toggleMe(){
        this.openflag = ! this.openflag;
    }
}