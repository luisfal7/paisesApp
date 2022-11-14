import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v2'

  get httpParams() {
    return new HttpParams().set('fields','name,flag,capital,alpha2Code,region,subregion,population,demonym' )
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this._apiUrl }/name/${ termino }`

    return this.http.get<Country[]>( url, { params: this.httpParams } )

  }

  buscarCaptial( termino: string ): Observable<Country[]> {

    const url = `${ this._apiUrl }/capital/${ termino }`

    return this.http.get<Country[]>( url, { params: this.httpParams }  )

  }
  
  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this._apiUrl }/regionalbloc/${ region }`

    return this.http.get<Country[]>( url, { params: this.httpParams } )

  }

  getPAisParam( id: string ): Observable<Country> {

    const url = `${ this._apiUrl }/alpha/${ id }`

    return this.http.get<Country>( url )

  }



}
