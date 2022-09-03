import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { AccesoGuard } from './acceso.guard';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'listado', canActivate: [AccesoGuard], component: ListadoComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
