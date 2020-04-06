import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SuperHero } from '../../store/super-hero.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app.reducer';
import { FormControl } from '@angular/forms';
import * as SuperHeroActions from '../../store/super-hero.actions';

@Component({
  selector: 'app-super-hero-list',
  templateUrl: './super-hero-list.component.html',
  styleUrls: ['./super-hero-list.component.scss']
})
export class SuperHeroListComponent implements OnInit, OnDestroy {

  superheroes: SuperHero[] = [];
  subscription$: Subscription;

  search: FormControl = new FormControl('');

  constructor(private readonly store: Store<State>) {
    this.store.dispatch( SuperHeroActions.loadSuperHeroesAction() );
  }

  ngOnInit() {
    this.subscription$ = this.store.select( s => s.superhero )
      .subscribe( (state) => this.superheroes = state.heroes );
    this.search.valueChanges.subscribe( v => this.searchChanged( v ) );
  }

  searchChanged( searchValue: string ){
    // FIXME:  make it search - instead of printing
    console.log( `search = ${searchValue}` );
  }

  ngOnDestroy() {
    if ( this.subscription$ ) {
      this.subscription$.unsubscribe();
    }
  }

}
