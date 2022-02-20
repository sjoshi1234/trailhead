import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showHide = false;
    Name = 'Sameer';
    Title = 'Father';
    text ='Show';

    checkStatus(){
        //this.showHide = ! this.showHide;
        // console.log('before',this.showHide);
        // if ( this.showHide){
        //     this.showHide = false;
        //     this.text = 'Show';
        // }
        // else {
        //     this.showHide = true;
        //     this.text = 'Hide';
        // }
        // console.log('After',this.showHide);
        this.showHide = ! this.showHide;
        this.text = this.showHide ? 'Hide' : 'Show';

    }
}