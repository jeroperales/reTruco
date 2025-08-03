import { Component } from '@angular/core';

@Component({
  selector: 'app-anotador',
  standalone: true,
  imports: [],
  templateUrl: './anotador.component.html',
  styleUrl: './anotador.component.css'
})
export class AnotadorComponent {
  points1: number = 0; 
  points2: number = 0;


  increment(points: number) {
   
    if(points < 30){
      points++;
    }
    return points;
  }

  
  decrement(points: number) {
    if(points > 0)
      {points--;
  }
  return points;
}

}
