import { Component, OnInit } from '@angular/core';
import { Empleado } from '../Models/Empleado';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //#region  Constructor
  constructor(private servicio: LoginService) { }
  //#endregion

  //#region  Propiedades
  empleado: Empleado = new Empleado();

  
  //#endregion
  ngOnInit(): void {
    this.empleado.Email = 'prueba@gmail.com';
    this.empleado.Password = '12345';
  }

  IniciarSesion():void{
    this.servicio.logIn(this.empleado).subscribe( (response)=>{
      console.log(response);
    });
  }

}
