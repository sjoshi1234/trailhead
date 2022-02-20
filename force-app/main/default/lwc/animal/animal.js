import { LightningElement } from 'lwc';

export default class Animal extends LightningElement {
    
    Name = 'Cat';
    OriginalAge = 1;
    newAge =0;

    get age(){
        return this.OriginalAge;
    }

    set age(value){
        if (value>20){
            this.OriginalAge = 20;
        }
        else{
         this.OriginalAge = value;
        }
    }

    updateAge(event){
        this.newAge = event.target.value;
        console.log('newage', this.newAge);
    }

    updateOriAge(){
        this.age = this.newAge;
        console.log('updating newage', this.age , this.OriginalAge);
    }
}