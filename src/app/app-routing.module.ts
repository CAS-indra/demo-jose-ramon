import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransaccionComponent } from './transaccion/transaccion.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'contacto', loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'auth/login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'transaction/new', loadChildren: () => import('./nueva-transaccion/nueva-transaccion.module').then(m => m.NuevaTransaccionModule) },
  { path: 'project-editor', loadChildren: () => import('./project-editor/project-editor.module').then(m => m.ProjectEditorModule) },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'transaccion', loadChildren: () => import('./transaccion/transaccion.module').then(m => m.TransaccionModule) }, // Para esta prueba lo he creado con un componente simple
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
