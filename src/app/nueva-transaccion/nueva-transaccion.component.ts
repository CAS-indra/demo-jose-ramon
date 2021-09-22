import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-nueva-transaccion',
  templateUrl: './nueva-transaccion.component.html',
  styleUrls: ['./nueva-transaccion.component.scss']
})
export class NuevaTransaccionComponent implements OnInit {

  public formTransaccion: FormGroup;
  public message = '';
  
  constructor(fb: FormBuilder, private transaccionesService: TransaccionesService) {
    this.formTransaccion = fb.group({
      name: new FormControl('Design a virus', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      description: new FormControl('Design a modified version of a current virus', [Validators.required, Validators.minLength(5), Validators.max(100)]),
      kind: new FormControl('spent', [Validators.required, Validators.min(3), Validators.max(10)]),
      amount: new FormControl(500, Validators.required),
      date: new FormControl(new Date(), Validators.required),
      projectId: new FormControl('rule_the_world', [Validators.required, Validators.min(3), Validators.max(20)]),
      ownerId: new FormControl('world_admin', [Validators.required, Validators.min(3), Validators.max(20)])
    });
   }

  ngOnInit(): void {
  }

  public submitTransaccion(): void {
    this.transaccionesService.postTransaccion$(this.formTransaccion.value).subscribe({
      error: error => (this.message = error.message)
    });
  }
}
