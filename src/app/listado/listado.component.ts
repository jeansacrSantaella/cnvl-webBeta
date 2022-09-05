import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GruposService } from '../services/gruposServices';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public formulario: FormGroup;
 public datosOriginales;
 public datos;

  constructor(private router: Router,private grupos:GruposService,private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  private buildForm() {
    this.formulario = this.fb.group({
      textoabuscar: [""]
    })
  }
  onSubmit(){
    console.log(this.formulario.get('textoabuscar').value)
    this.datos=this.datosOriginales;
    if(this.formulario.get('textoabuscar').value !== ""){
      this.datos = this.datos.filter((data) =>  data.nombre.toLowerCase().indexOf(this.formulario.get('textoabuscar').value.toLowerCase()) !== -1);
      //this.datos.filter(element => element.nombre === this.formulario.get('textoabuscar').value);
      this.datos;
    }
      
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  cargarDatos(){
    this.grupos.getGrupos().subscribe(
      res=>{
      this.datos = res;
      this.datosOriginales = res; 
      }
      ,error=>{}
    );
  }

}
