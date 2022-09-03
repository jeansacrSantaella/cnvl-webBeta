import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { Router, ActivatedRoute, } from '@angular/router';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formulario: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) { 
    this.revisarStorage();
    this.buildForm();
  }

  ngOnInit(): void {
  }

  revisarStorage(){
   if(localStorage.getItem('token')){
    this.router.navigate(['/','listado']);
   }
  }

  private buildForm() {
    this.formulario = this.fb.group({
      usuario: ["",Validators.required],
      password: [ "",Validators.required],
    })
  }

  onSubmit() {
    if(this.formulario.valid){
      if(this.formulario.get('usuario').value === 'admin' && this.formulario.get('password').value==='12345'){
        localStorage.setItem('token','xhja787')
        this.router.navigate(['/','listado']);
      }
    }else{
      this.lanzarError("No deben quedar campos vacios.");
    }
    console.log(this.formulario.get('usuario').value);
    console.log(this.formulario.get('password').value);
  }

  lanzarError(mensaje : string){
    Swal.fire({
      title: 'Error!',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Continuar'
    })
  }
}
