import { Component } from '@angular/core';

@Component({
  selector: 'app-envido',
  templateUrl: './envido.component.html',
  styleUrls: ['./envido.component.css']
})
export class EnvidoComponent {
  currentStep = 0;

  steps = [
    {
      title: '¿Qué es el Envido?',
      content: `En el truco, cada ronda tiene al menos 1 punto en juego. El Envido permite aumentar ese pozo. Podés hacer que parezca que tenés buenas cartas, aunque no sea así, para tentar al rival a jugar por más puntos.`
    },
    {
      title: '¿Quién puede cantar Envido?',
      content: `Solo los dos últimos jugadores en la ronda pueden cantarlo (el que cortó y el que repartió). Pero todos los jugadores participan con sus cartas.`
    },
    {
      title: 'Opciones del Envido',
      content: `
        <ul>
          <li><strong>Envido aceptado:</strong> 2 puntos en juego.</li>
          <li><strong>Envido rechazado:</strong> 1 punto para quien lo cantó.</li>
          <li><strong>Envido + Envido:</strong> suma 2 puntos más.</li>
          <li><strong>Envido + Real Envido:</strong> suma 3 puntos más.</li>
          <li><strong>Falta Envido:</strong> se explica más adelante.</li>
        </ul>
      `
    },
    {
      title: '¿Qué pasa si se acepta o se rechaza?',
      content: `Si aceptás, se suman todos los puntos ofrecidos. Si rechazás, el último en ofrecer gana los puntos del pozo acumulado.`
    },
    {
      title: '¿Cómo se calcula el Envido?',
      content: `
        <ul>
          <li>Se toma el valor de las cartas del mismo palo.</li>
          <li>Si tenés 2 cartas del mismo palo, se suman sus valores y se le suma 20.</li>
          <li>Las cartas 10, 11 y 12 (negras) no suman puntos.</li>
          <li>Si hay empate, gana la mano (jugador a la derecha del mazo).</li>
        </ul>
      `
    }
  ];

  nextStep() {
    if(this.currentStep < this.steps.length -1) {
      this.currentStep++;
    }
  }

  previousStep(){
    if(this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(index: number) {
    this.currentStep = index;
  }
}

