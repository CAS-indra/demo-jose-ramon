import { Component, OnInit } from '@angular/core';

import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public gasto = 0;
  public ingreso = 0;
  public result = 0;
  public transacciones: any[] = [];

  constructor(private transaccionesService: TransaccionesService) {
    this.transaccionesService.getTransacciones$().subscribe( 
      data => {
        this.transacciones = data;
        this.balance();
      }
    )
  }

  ngOnInit(): void {
    
  }

  private balance() { 
    this.transacciones.forEach((element: any) => {
      if (element.kind == "spent") {
        this.gasto += element.amount;
      } else  {
        this.ingreso += element.amount;
      }
    });
    this.result = (this.ingreso - this.gasto);
  }
}
