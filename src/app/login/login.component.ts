import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { LoginService } from '../services/loginServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formulario: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,private login:LoginService) { 
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
        this.login.postLogin(this.formulario.get('usuario').value,this.formulario.get('password').value)
        .subscribe(
          res=>{
            localStorage.setItem('token',res.token)
          this.router.navigate(['/','listado']);
          }
        );
    }else{
      this.lanzarError("No deben quedar campos vacios.");
    }
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
