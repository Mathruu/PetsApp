import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CachorroComponent } from './cachorro/cachorro.component';
import { GatoComponent } from './gato/gato.component';


const routes: Routes = [
  { path: "", redirectTo: 'main', pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "cachorro", component: CachorroComponent },
  { path: "gato", component: GatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
