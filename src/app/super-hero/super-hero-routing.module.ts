import { SuperHeroDetailsComponent } from './pages/super-hero-details/super-hero-details.component';
import { SuperHeroListComponent } from './pages/super-hero-list/super-hero-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'list', component: SuperHeroListComponent },

  // FIXME: pass the clicked on superhero
  { path: 'detail', component: SuperHeroDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperHeroRoutingModule { }
