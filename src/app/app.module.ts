import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { MalariaComponent } from './components/malaria/malaria.component';
import { EbolaComponent } from './components/ebola/ebola.component';
import { TyphoidComponent } from './components/typhoid/typhoid.component';
import { TuberculosisComponent } from './components/tuberculosis/tuberculosis.component';
import { YellowFeverComponent } from './components/yellow-fever/yellow-fever.component';
import { CholeraComponent } from './components/cholera/cholera.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MalariaComponent,
    EbolaComponent,
    CholeraComponent,
    TyphoidComponent,
    YellowFeverComponent,
    TuberculosisComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
