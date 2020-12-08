import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RankingComponent} from './ranking/ranking.component';
import {FormsModule} from '@angular/forms';
import { VoteComponent } from './shared/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
