import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
 
  constructor(private PaisService: PaisService) {}

  buscar( termino: string ) {
    this.hayError = false
    this.termino = termino

    //.subcribe() es necesario xq es un observable
    this.PaisService.buscarPais(termino).subscribe((paises) => {
      console.log(paises);
      this.paises = paises
    },(err)=>{
      console.log('Error')
      this.hayError = true
      this.paises = []
    });
  }

  sugerencias( termino: string ) {
    this.hayError = false
  }

}
