import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-valores',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './valores.component.html',
  styleUrl: './valores.component.css'
})
export class ValoresComponent {

router: Router = inject(Router);

currentType: string = 'ESPADA';

cartas: { id: number; codigo: string; fuerza: number }[] = [];

ngOnInit() {
  const palos = ['E', 'B', 'O', 'C'];
  const cartasTemp = [];
  let id = 1;

  for (const palo of palos) {
    for (let numero = 1; numero <= 12; numero++) {
      // Salteamos el 8 y 9 si querés un mazo tradicional de Truco
      if (numero === 8 || numero === 9) continue;

      const codigo = `${palo}${numero}`;
      const fuerza = this.obtenerFuerza(codigo);

      cartasTemp.push({ id: id++, codigo, fuerza });
    }
  }

  // Ordenamos de mayor a menor fuerza
  this.cartas = cartasTemp.sort((a, b) => b.fuerza - a.fuerza);
}

obtenerFuerza(codigo: string): number {
  const fuerzaTruco: { [key: string]: number } = {
    E1: 14,
    B1: 13,
    E7: 12,
    O7: 11,
    E3: 10, B3: 10, O3: 10, C3: 10,
    E2: 9, B2: 9, O2: 9, C2: 9,
    C1: 8, O1: 8,
    E12: 7, B12: 7, O12: 7, C12: 7,
    E11: 6, B11: 6, O11: 6, C11: 6,
    E10: 5, B10: 5, O10: 5, C10: 5,
    C7: 4, B7: 4,
    E6: 3, B6: 3, O6: 3, C6: 3,
    E5: 2, B5: 2, O5: 2, C5: 2,
    E4: 1, B4: 1, O4: 1, C4: 1
  };

  return fuerzaTruco[codigo] || 0; // Si no existe, fuerza 0
}
  goBack(): void {
   
      this.router.navigate(['/home/']);
   
  }

  trackById(index: number, item: any): number {
  return item.id;
}
}


