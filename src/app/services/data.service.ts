import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePokemon } from '../models/response.interface';
import { ResponseCharacters } from '../models/response.interfaceRick';
import { ResponseEpisodes } from '../models/response.interfaceEpisodes';
import { ResponseLocation } from '../models/response.interfaces.location';
import { ResponseOnePokemon } from '../models/response.interfacePokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public getResponse(url: string): Observable<ResponsePokemon> {
    return this.http.get<ResponsePokemon>(url);
  }

  public getResponsePokemon(url: string): Observable<ResponseOnePokemon> {
    return this.http.get<ResponseOnePokemon>(url);
  }

  public getResponseCharacacters(url: string): Observable<ResponseCharacters> {
    return this.http.get<ResponseCharacters>(url);
  }

  public getResponseEpisodes(url: string): Observable<ResponseEpisodes> {
    return this.http.get<ResponseEpisodes>(url);
  }

  public getResponseLocations(url: string): Observable<ResponseLocation> {
    return this.http.get<ResponseLocation>(url);
  }
}
