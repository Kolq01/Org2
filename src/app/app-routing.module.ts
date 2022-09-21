import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrgComponent } from './org/org.component';
import { Org2Component } from './org2/org2.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'org', component: OrgComponent},
  {path: 'org2', component: Org2Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
