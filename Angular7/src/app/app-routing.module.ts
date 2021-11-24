import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AgentPanelComponent } from './agent-panel/agent-panel.component';
import { AuthGuard } from './auth/auth.guard';
import { AjouterDrinkComponent } from './home/ajouter-drink/ajouter-drink.component';
import { AjouterplatsComponent } from './home/ajouterplats/ajouterplats.component';
import { DrinksComponent } from './home/drinks/drinks.component';
import { HomeComponent } from './home/home.component';
import { PlatsComponent } from './home/plats/plats.component';
import { ProfilComponent } from './home/profil/profil.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {path:'accueil',component:AccueilComponent},

  {
    path:'user',component:UserComponent,
  children:[
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent}
  ]
},
{path:'home',component:HomeComponent,canActivate:[AuthGuard],
children: [
  { path: 'plats', component: PlatsComponent },{ path: 'profil', component: ProfilComponent },{ path: 'ajouterplats', component: AjouterplatsComponent ,canActivate:[AuthGuard],data :{permittedRoles:['Agent'] }},{ path: 'ajouter-drink', component: AjouterDrinkComponent ,canActivate:[AuthGuard],data :{permittedRoles:['Agent'] }},{ path: 'drinks', component: DrinksComponent }]
},
{path:'agentpanel',component:AgentPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['Agent']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
