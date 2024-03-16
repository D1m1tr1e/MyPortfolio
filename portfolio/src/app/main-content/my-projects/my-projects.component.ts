import { Component } from '@angular/core';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component'
import { JoinComponent } from './join/join.component'
import { PokedexComponent } from './pokedex/pokedex.component'

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [ElPolloLocoComponent, JoinComponent, PokedexComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

}
