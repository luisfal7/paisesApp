import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
  ) {}

  ngOnInit(): void {
    /* this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.PaisService.getPAisParam(id).subscribe((pais) => {
        console.log(pais);
      });
    }); */

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.PaisService.getPAisParam(id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais;
      });
  }
}
