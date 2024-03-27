import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

  showProjectInfo() {
    document.getElementById('img-gray-pokedex')?.classList.add('d-none')
    document.getElementById('img-colored-pokedex')?.classList.remove('d-none');
  }

  hideProjectInfo() {
    document.getElementById('img-gray-pokedex')?.classList.remove('d-none');
    document.getElementById('img-colored-pokedex')?.classList.add('d-none');
  }

}
