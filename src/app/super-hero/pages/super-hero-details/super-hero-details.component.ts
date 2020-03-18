import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app.reducer';
import { SuperHero } from '../../store/super-hero.model';

@Component({
  templateUrl: './super-hero-details.component.html',
  styleUrls: ['./super-hero-details.component.scss']
})
export class SuperHeroDetailsComponent implements OnInit, OnDestroy {

  routeSub: Subscription = undefined;
  activeHeroSub: Subscription = undefined;

  hero: SuperHero = undefined;

  constructor(
    private route: ActivatedRoute,
    private readonly store: Store<State>
    ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe( params => {
      console.log( params ); // FIX ME - pass the id and fetch superhero
    } );

    this.activeHeroSub =  this.store.select( s => s.superhero.activeHero )
      .subscribe( activeHero => this.hero = activeHero );
  }

  ngOnDestroy(): void {
    if ( this.routeSub ) { this.routeSub.unsubscribe(); }
    if ( this.activeHeroSub ) { this.activeHeroSub.unsubscribe(); }

  }


}
