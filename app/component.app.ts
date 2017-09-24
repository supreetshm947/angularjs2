import {Component} from '@angular/core';

@Component({
    selector : 'app',
    templateUrl : './partials/app.html'
})

export class AppComponent {
    name : string;
    artists : any;

    onClick(e){
        console.log(e.target.innerHTML);
        this.name = e.target.innerHTML;
    }

    addArtist(val){
        if(val!='')
            this.artists.push({
                name : val,
                school : 'dsad'
            });
    }

    constructor(){
        this.name = 'adam';
        this.artists = [
            {
                name : 'fhfg',
                school : 'gjugyju'
            },
            {
                name : 'ggnm',
                school : 'gjufrhegyju'
            },
            {
                name : '456edt',
                school : 'fdgdrvw34'
            }
        ]
    }
}