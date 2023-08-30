import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SuperHero-UI';

  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private SuperHeroService: SuperHeroService) {}

  ngOnInit(): void {
    this.SuperHeroService.getSuperHeroes().subscribe(
      (result: SuperHero[]) => (this.heroes = result)
    );
  }

  showEditHero = false;

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  initNewHero() {
    this.showEditHero = !this.showEditHero;
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.showEditHero = !this.showEditHero;
    this.heroToEdit = hero;
  }
}
