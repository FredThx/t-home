import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';

@Injectable()
export class TempeDBService{
  auth : string = 'angular:ralugna!';
  api_url : string = "http://127.0.0.1:50889/tempeDB";

  constructor(private httpClient: HttpClient) {}


  get_capteurs(callback){
    var params: HttpParams  = new HttpParams();
    const headers =  new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        'Accept' : 'application/json',
        'Authorization': 'Basic ' + btoa(this.auth)
      });
      this.httpClient
        .get<any>(this.api_url + "/capteurs" , {headers: headers})
        .subscribe(
          (response)=> callback(response),
          (error)=>{
            console.log('Erreur : ' + error);
          }
        );

  }

  get_historique(id, date_debut, date_fin, callback){
    var params: HttpParams  = new HttpParams();
    params = params.append('id',id);
    params = params.append('date_debut',moment(date_debut).format("YYYY-MM-DD"));
    params = params.append('date_fin',moment(date_fin).format("YYYY-MM-DD"));
    const headers =  new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        'Accept' : 'application/json',
        'Authorization': 'Basic ' + btoa(this.auth)
      });

    this.httpClient
      .get<any>(this.api_url , {headers: headers, params: params})
      .subscribe(
        (response)=>{
          response.forEach(element => {
            element[0] = Date.parse(element[0]);
          });
          callback(response);
          },
        (error)=>{
          console.log('Erreur : ' + error);
        }
      );
  }
}
