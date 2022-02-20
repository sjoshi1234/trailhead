import { LightningElement, track,api, wire } from 'lwc';
import getRelatedContacts from '@salesforce/apex/AccountController.getRelatedContacts';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireApexProperty extends LightningElement {
    @api recid;
    @wire(getRelatedContacts,)
}