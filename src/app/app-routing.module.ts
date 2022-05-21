import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CholeraComponent } from "./components/cholera/cholera.component";
import { EbolaComponent } from "./components/ebola/ebola.component";
import { HomeComponent } from "./components/home/home.component";
import { MalariaComponent } from "./components/malaria/malaria.component";
import { TuberculosisComponent } from "./components/tuberculosis/tuberculosis.component";
import { TyphoidComponent } from "./components/typhoid/typhoid.component";
import { YellowFeverComponent } from "./components/yellow-fever/yellow-fever.component";


const routes: Routes = [
    
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent }, 
  { path: "malaria", component: MalariaComponent }, 
  { path: "typhoid", component: TyphoidComponent }, 
  { path: "ebola", component: EbolaComponent }, 
  { path: "cholera", component: CholeraComponent }, 
  { path: "tuberculosis", component: TuberculosisComponent }, 
  { path: "yellow-fever", component: YellowFeverComponent }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
