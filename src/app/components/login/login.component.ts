import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Empleado } from '../Models/Empleado';
import { LoginService } from 'src/app/services/login.service';
import { ApiResponse } from '../Models/ApiResponse/ApiResponse';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //#region  Constructor
  constructor(private servicio: LoginService,
              private router: Router) { }
  //#endregion

  //#region  Propiedades
  empleado: Empleado = new Empleado();

  
  //#endregion
  ngOnInit(): void {
    this.empleado.Email = 'prueba@gmail.com';
    this.empleado.Password = '12345';
  }

  IniciarSesion():void{
    this.servicio.logIn(this.empleado).subscribe((response: ApiResponse<Empleado>)=>{
      if (response.exito == 1){
        this.router.navigateByUrl('home');
      }
    });
  }

}
