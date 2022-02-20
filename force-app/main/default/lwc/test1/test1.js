import { api, LightningElement , track } from 'lwc';

export default class Test1 extends LightningElement {
    text='Sameer';
    @api
    location;
    
    user = { fname : 'Advait',
                lname : 'Joshi' };

    handleChange(event){
        this.text = event.target.value;
    }

    @api
    changeName(){
        this.text = 'I am getting reset';
        this.user.fname = 'Mukta';
    }
}