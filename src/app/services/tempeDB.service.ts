import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TempeDBService{
  auth : string = 'invite';
  api_url : string = "http://127.0.0.1:50889/tempeDB";

  constructor(private httpClient: HttpClient) {}


  get_historique(id, date_debut, date_fin, callback){
    var params: HttpParams  = new HttpParams();
    params = params.append('id',id);
    params = params.append('date_debut',date_debut);
    params = params.append('date_fin',date_fin);
    const headers =  new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        'Accept' : 'application/json',
        'Authorization': 'Basic ' + btoa(this.auth)
      });

    this.httpClient
      .get<any>(this.api_url , {headers: headers, params: params})
      .subscribe(
        (response)=>callback(response),
        (error)=>{
          console.log('Erreur : ' + error);
        }
      );
  }
}
