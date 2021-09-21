import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.scss']
})
export class TransaccionComponent implements OnInit {
  //public transaccion$ : Observable<any>;
  public transaccion: any;

  constructor(private route: ActivatedRoute, private transaccionesService: TransaccionesService) {
    const id = this.route.snapshot.params['id'];

    //this.transaccion$ = this.transaccionesService.getTransaccionById$(id);
    this.transaccionesService.getTransaccionById$(id).subscribe(
      data => this.transaccion = data
    );
   }

  ngOnInit(): void { 
    
  }
}
