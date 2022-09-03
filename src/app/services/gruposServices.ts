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
        //this.loadHttpHeaders();
        let url: string = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`;
        return this.http.get<any>(url,{ headers: this.headers});
    }

    private loadHttpHeaders(): void {
        var user:any;
        if(localStorage.getItem('token')){
            user = JSON.parse(localStorage.getItem('token')+"");
        }        
            if (user && user.token){
              this.headers = new HttpHeaders({ 'token': `${user.token}` });
            }else{
              console.log("Error no se encontro usuario.");
            }
      }

}