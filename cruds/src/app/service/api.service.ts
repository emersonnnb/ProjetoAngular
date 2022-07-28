import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Bicicleta } from '../model/bicicleta';
import { Dispositivos } from '../model/dispositivos';
import { Financeiro } from '../model/financeiro';
import { Outros } from '../model/outros';
import { Artefato } from './../model/artefato';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /*Artefatos*/
  postArtefato(data: Artefato): Observable<unknown> {
    return this.http.post<any>("http://localhost:3000/artefato/", data);
  }
  getArtefato(): Observable<Artefato[]> {
    return this.http.get<any>("http://localhost:3000/artefato/");
  }

  putArtefato(data: Artefato, id: number | undefined) {
    return this.http.put<any>("http://localhost:3000/artefato/" + id, data);
  }

  deleteArtefato(id: any): Observable<Artefato[]> {
    return this.http.delete<any>("http://localhost:3000/artefato/" + id);
  }

  /*Financeiro*/
  postFinanceiro(data: Financeiro): Observable<unknown> {
    return this.http.post<unknown>("http://localhost:3000/financeiro/", data);
  }
  getFinanceiro(): Observable<Financeiro[]> {
    return this.http.get<Financeiro[]>("http://localhost:3000/financeiro/");
  }
  putFinanceiro(data: Financeiro, id: number | undefined) {
    return this.http.put<Financeiro>("http://localhost:3000/financeiro/" + id, data);
  }
  deleteFinanceiro(id: any): Observable<Financeiro[]> {
    return this.http.delete<any>("http://localhost:3000/financeiro/" + id);
  }

  /*Bicicleta*/
  postBicicleta(data: Bicicleta): Observable<unknown> {
    return this.http.post<unknown>("http://localhost:3000/bicicleta/", data);
  }
  getBicicleta(): Observable<Bicicleta[]> {
    return this.http.get<Bicicleta[]>("http://localhost:3000/bicicleta/");
  }
  putBicicleta(data: Bicicleta, id: number | undefined) {
    return this.http.put<Bicicleta>("http://localhost:3000/bicicleta/" + id, data);
  }

  deleteBicicleta(id: any): Observable<Bicicleta[]> {
    return this.http.delete<any>("http://localhost:3000/bicicleta/" + id);
  }


  /*Dispositivos*/
  postDispositivos(data: Dispositivos): Observable<unknown> {
    return this.http.post<unknown>("http://localhost:3000/dispositivos/", data);
  }

  getDispositivos(): Observable<Dispositivos[]> {
    return this.http.get<Dispositivos[]>("http://localhost:3000/dispositivos/");
  }

  putDispositivos(data: Dispositivos, id: number | undefined) {
    return this.http.put<Dispositivos>("http://localhost:3000/dispositivos/" + id, data);
  }

  deleteDispositivos(id: any): Observable<Dispositivos[]> {
    return this.http.delete<any>("http://localhost:3000/dispositivos/" + id);
  }

  /*Outros*/
  postOutros(data: Outros): Observable<unknown> {
    return this.http.post<unknown>("http://localhost:3000/outros/", data);
  }
  getOutros(): Observable<Outros[]> {
    return this.http.get<Outros[]>("http://localhost:3000/outros/");
  }
  putOutros(data: Outros, id: number | undefined) {
    return this.http.put<Outros>("http://localhost:3000/outros/" + id, data);
  }
  deleteOutros(id: any): Observable<Outros[]> {
    return this.http.delete<any>("http://localhost:3000/outros/" + id);
  }
}
