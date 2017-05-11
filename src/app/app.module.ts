import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SamplesComponent } from './components/samples/samples.component';
import { UsersComponent } from './components/users/users.component';

// Services
import { GeneService } from './services/gene.service';

// Routing
import { routing } from './app.routes';
import { AboutComponent } from './components/about/about.component';
import { AddsampleComponent } from './components/addsample/addsample.component';

@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent,
    UsersComponent,
    AboutComponent,
    AddsampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [GeneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
