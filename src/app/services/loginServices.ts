import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
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
        let url: string = `http://10.1.15.156:8080/ghd-springboot/auth`;

        let body = new URLSearchParams();
        body.set('user', usuario);
        body.set('password', password);
        
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
         // let url: string = http://127.0.0.1:8080/auth;
          return this.http.post<any>(url, body.toString(), options);
        }
    /***** Funciones control de sesion en entorno web js */
    logout() {
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    }
  
  }