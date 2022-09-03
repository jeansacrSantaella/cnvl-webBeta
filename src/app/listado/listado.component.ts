import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GruposService } from '../services/gruposServices';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

public datos;

  constructor(private router: Router,private grupos:GruposService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  cargarDatos(){
    this.grupos.getGrupos().subscribe(
      res=>{
        console.log(res);
      this.datos = res;    
      }
      ,error=>{}
    );
  }

}
