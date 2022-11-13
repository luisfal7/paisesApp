import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1'
  private _apiUrlCapital: string = 'https://restcountries.com/v2'

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this._apiUrl }/name/${ termino }`

    return this.http.get<Country[]>( url )

  }

  buscarCaptial( termino: string ): Observable<Country[]> {

    const url = `${ this._apiUrlCapital }/capital/${ termino }`

    return this.http.get<Country[]>( url )

  }

  getPAisParam( id: string ): Observable<Country> {

    const url = `${ this._apiUrlCapital }/alpha/${ id }`

    return this.http.get<Country>( url )

  }


}
