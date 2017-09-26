import {Component} from '@angular/core';

@Component({
    selector : 'app',
    templateUrl : './partials/app.html',
    styleUrls : [
        './css/app.css'
    ]
})

export class AppComponent {
    name : string;
    artists : any;

    onClick(item, container){
        console.log(item);
        this.name = item;
        container.style.backgroundColor = "#FECE4E";
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