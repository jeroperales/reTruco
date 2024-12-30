import { Component } from '@angular/core';
import { Player } from '../../../../interfaces/player.interface';

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [],
  templateUrl: './points.component.html',
  styleUrl: './points.component.css'
})
export class PointsComponent {
  
  namePlayer1: String = "Jugador 1";
  namePlayer2: String = "Jugador 2"


  player1: Player = {name: `${this.namePlayer1}`, points: 0 }
  player2: Player = {name: `${this.namePlayer2}`, points: 0 }

  addPoints(points: number, player: Player) {
    
    player.points = 0
    if(points <= 30){
      player.points++;
    }
    else
    {
      console.log(`FELICIDADES ${ player.name } HA GANADO`)
    }

    return points;
  }



}
