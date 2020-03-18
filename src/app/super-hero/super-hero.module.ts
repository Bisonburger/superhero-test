import { SuperHeroEffects } from './store/super-hero.effects';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SuperHeroRoutingModule } from './super-hero-routing.module';
import { SuperHeroDetailsComponent } from './pages/super-hero-details/super-hero-details.component';
import { SuperHeroListComponent } from './pages/super-hero-list/super-hero-list.component';
import { SuperHeroCardComponent } from './components/super-hero-card/super-hero-card.component';


@NgModule({
  declarations: [SuperHeroDetailsComponent, SuperHeroListComponent, SuperHeroCardComponent],
  imports: [
    CommonModule,
    SuperHeroRoutingModule,
    EffectsModule.forFeature( [SuperHeroEffects]),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SuperHeroModule { }
