import { NotFoundComponent } from './not-found/not-found.component';
import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortifoluoComponent } from './portifoluo/portifoluo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HeroComponent,title:'Home' },
  { path: 'about', component: AboutComponent,title:'About' },
  {path:'contact',component:ContactComponent,title:'Contant'},
  {path:'porttifoluo',component:PortifoluoComponent,title:'portifoluo'},
  {path:'**',component:NotFoundComponent ,title:'404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true,scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
