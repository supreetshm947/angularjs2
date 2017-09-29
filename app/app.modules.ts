import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

import {AppComponent} from './component.app'
import {ArtistItemComponent} from './component.artist-item'
import {ArtistDetailComponent} from './component.artist-detail'
import {SearchPipe} from './pipe.search'

@NgModule({
    imports :[
        BrowserModule,FormsModule
    ],
    declarations :[
        AppComponent,ArtistItemComponent,ArtistDetailComponent,
        SearchPipe
    ],
    bootstrap : [
        AppComponent
    ]
})

export class AppModule {}