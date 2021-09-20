import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.scss']
})
export class TransaccionComponent implements OnInit {
  public transaccion: any;

  constructor(private route: ActivatedRoute, private transaccionesService: TransaccionesService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const transacciones = this.transaccionesService.getTransacciones();
    this.transaccion = transacciones.find((x: any) => x.id == id);
  }
}
