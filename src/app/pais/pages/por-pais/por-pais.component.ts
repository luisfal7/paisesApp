import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false

  constructor(private PaisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    //.subcribe() es necesario xq es un observable
    this.PaisService.buscarPais(termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        console.log('Error');
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino
    this.mostrarSugerencias = true

    this.PaisService.buscarPais(termino).subscribe(
      (paises) =>this.paisesSugeridos = paises.slice(0, 5),
      (err) => this.paisesSugeridos = []
    );
  }

  buscarSugerido( termino:string ) {
    this.buscar( termino )
  }

}
