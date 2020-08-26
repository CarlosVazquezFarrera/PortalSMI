import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../components/Models/Empleado';

const HttpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //#region  Constructor
  constructor(private http: HttpClient) { }
  //#endregion

  //#region  Properties

  
  urlServicio: string = "http://192.168.0.15:45455/api/Login/";

 
  //#endregion

  //#region  Methods

  logIn(empleado: Empleado){
    return this.http.get(
      `${this.urlServicio}login?Email=${empleado.Email}&Password=${empleado.Password}`, HttpOption
    );
  }
  //#endregion
}
