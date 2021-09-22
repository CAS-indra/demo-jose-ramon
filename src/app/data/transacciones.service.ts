import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  //private readonly url = 'https://proton-angular-builders.herokuapp.com/v1/transactions/';
   private readonly url  = environment.url + 'transactions/';
  /*
  private transacciones =  [
    {
      id: 'design_a_virus',
      name: 'Design a virus',
      description: 'Design a modified version of a current virus',
      kind: 'spent',
      amount: 500,
      date: new Date(2020, 0, 1),
      projectId: 'rule_the_world',
      ownerId: 'world_admin',
    },
    {
      id: 'produce_the_virus',
      name: 'produce the virus',
      description: 'Clone the virus in a secret lab',
      kind: 'spent',
      amount: 1200,
      date: new Date(2020, 1, 1),
      projectId: 'rule_the_world',
      ownerId: 'world_admin',
    },
    {
      id: 'buy_fuel',
      name: 'Buy fuel',
      description: 'A lot of fuel ',
      kind: 'spent',
      amount: 900,
      date: new Date(2024, 0, 1),
      projectId: 'conquer_mars',
      ownerId: 'world_admin',
    },
    {
      id: 'sell_view_seats',
      name: 'Sell view seats',
      description: 'Seats to view launches ',
      kind: 'income',
      amount: 80,
      date: new Date(2025, 0, 1),
      projectId: 'conquer_mars',
      ownerId: 'world_admin',
    },
  ];
  */

  constructor(private http: HttpClient) { }

  public getTransacciones$(): Observable<any[]> {
    return this.http
    .get<{data: any[]}>(this.url)
    .pipe(map(res => res.data));
  }

  public getTransaccionById$(id: string): Observable<any> {
    return this.http
      .get<any>(this.url + id)
      .pipe(map(res => res.data));
    //return of(transaccion);
  }

  public postTransaccion$(transaccion: any): Observable<any> {
    return this.http
      .post<{data: any}>(this.url, transaccion)
      .pipe(map(res => res.data));
  }

  public putTransaccion$(transaccion: any): Observable<any> {
    return this.http
      .put<{data: any}>(this.url + transaccion.id, transaccion)
      .pipe(map(res => res.data));
  }

  public deleteTransaccionById$(id: string): Observable<void> {
    return this.http.delete<void>(this.url + id);
  }

  /*
  public getProyectos$(): Observable<any[]>{ // solo any[] seria un metodo sincrono, por eso no se utiliza, a su vez se pone obserbables
    //return of([]);
    return of(this.transacciones); // de esta manera creamos un observable de un array que no lo es
  }

  public getProyectoById$(id: string): Observable<any> {
    const transaccion = this.transacciones.find(p => p.id ===id);
    return of(transaccion);
  }
  */
}

