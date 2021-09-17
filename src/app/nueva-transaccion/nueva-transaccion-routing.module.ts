import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaTransaccionComponent } from './nueva-transaccion.component';

const routes: Routes = [{ path: '', component: NuevaTransaccionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaTransaccionRoutingModule { }
