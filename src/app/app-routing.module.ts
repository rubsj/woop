import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {WoopComponent} from "./woop/woop.component";

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'woop', component: WoopComponent},
  {path: '**', redirectTo: '/woop', pathMatch: 'full'}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule],
  providers: []
})
export class AppRoutingModule{}
