import { LightningElement, track } from 'lwc';

export default class MyFirstWebComponent extends LightningElement {
    @track
    contacts = [
        {
            Id : 1,
            Name : 'Sameer',
            Title : 'Father',
        },
        {
            Id : 2,
            Name : 'Mukta',
            Title : 'Wife',
        },
        {
            Id : 3,
            Name : 'Advait',
            Title : 'Son',
        },
    ];
}