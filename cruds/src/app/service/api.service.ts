import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Bicicleta } from '../model/bicicleta';
import { Dispositivos } from '../model/dispositivos';
import { Financeiro } from '../model/financeiro';
import { Outros } from '../model/outros';
import { Artefato } from './../model/artefato';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = environment.API

  constructor(private http: HttpClient) { }

  /*Artefatos*/
  postArtefato(data: Artefato): Observable<unknown> {
    return this.http.post<any>(`${this.API}artefato/`, data);
  }
  getArtefato(): Observable<Artefato[]> {
    return this.http.get<any>(`${this.API}artefato/`);
  }

  putArtefato(data: Artefato, id: number | undefined) {
    return this.http.put<any>(`${this.API}artefato/` + id, data);
  }

  deleteArtefato(id: any): Observable<Artefato[]> {
    return this.http.delete<any>(`${this.API}artefato/` + id);
  }

  /*Financeiro*/
  postFinanceiro(data: Financeiro): Observable<unknown> {
    return this.http.post<unknown>(`${this.API}financeiro/`, data);
  }
  getFinanceiro(): Observable<Financeiro[]> {
    return this.http.get<Financeiro[]>(`${this.API}financeiro/`);
  }
  putFinanceiro(data: Financeiro, id: number | undefined) {
    return this.http.put<Financeiro>(`${this.API}financeiro/` + id, data);
  }
  deleteFinanceiro(id: any): Observable<Financeiro[]> {
    return this.http.delete<any>(`${this.API}financeiro/` + id);
  }

  /*Bicicleta*/
  postBicicleta(data: Bicicleta): Observable<unknown> {
    return this.http.post<unknown>(`${this.API}bicicleta/`, data);
  }
  getBicicleta(): Observable<Bicicleta[]> {
    return this.http.get<Bicicleta[]>(`${this.API}bicicleta/`);
  }
  putBicicleta(data: Bicicleta, id: number | undefined) {
    return this.http.put<Bicicleta>(`${this.API}bicicleta/` + id, data);
  }

  deleteBicicleta(id: any): Observable<Bicicleta[]> {
    return this.http.delete<any>(`${this.API}bicicleta/` + id);
  }


  /*Dispositivos*/
  postDispositivos(data: Dispositivos): Observable<unknown> {
    return this.http.post<unknown>(`${this.API}dispositivos/`, data);
  }

  getDispositivos(): Observable<Dispositivos[]> {
    return this.http.get<Dispositivos[]>(`${this.API}dispositivos/`);
  }

  putDispositivos(data: Dispositivos, id: number | undefined) {
    return this.http.put<Dispositivos>(`${this.API}dispositivos/` + id, data);
  }

  deleteDispositivos(id: any): Observable<Dispositivos[]> {
    return this.http.delete<any>(`${this.API}dispositivos/` + id);
  }

  /*Outros*/
  postOutros(data: Outros): Observable<unknown> {
    return this.http.post<unknown>(`${this.API}outros/`, data);
  }
  getOutros(): Observable<Outros[]> {
    return this.http.get<Outros[]>(`${this.API}outros/`);
  }
  putOutros(data: Outros, id: number | undefined) {
    return this.http.put<Outros>(`${this.API}outros/` + id, data);
  }
  deleteOutros(id: any): Observable<Outros[]> {
    return this.http.delete<any>(`${this.API}outros/` + id);
  }
}
