import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })
  export class LoginService {

    public user:any;

    constructor(
        private http: HttpClient,
        private router: Router
    ){ }

    /****** Funciones de servidor  */
    postLogin(usuario: string, password: string): Observable<any> {
        let url: string = `/login`;
        return this.http.post<any>(url, { usuario, password });
      }
    /***** Funciones control de sesion en entorno web js */
    logout() {
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    }
  
  }