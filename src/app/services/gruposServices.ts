import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  
export class GruposService {
    private headers: HttpHeaders = new HttpHeaders();

    constructor(
        private http: HttpClient
    ){ }

     /****** Funciones de servidor  */
     getGrupos(): Observable<any> {
        this.loadHttpHeaders();
        let url: string = `http://10.1.15.156:8080/ghd-springboot/api/ghd`;
        return this.http.get<any>(url,{ headers: this.headers});
    }

    private loadHttpHeaders(): void {
        var token:string;
        if(localStorage.getItem('token')){
          token = localStorage.getItem('token');
        }        
            if (token){
              this.headers = new HttpHeaders({ 'Authorization': `${token}` ,'Content-Type' : 'application/x-www-form-urlencoded'});
            }else{
              console.log("Error no se encontro usuario.");
            }
      }

}