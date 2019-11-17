import { Component, OnInit } from '@angular/core';
import { contenidoService } from '../../../services/contenido.service';

@Component({
  selector: 'perfilAdminAgregar',
  templateUrl: './perfil-admin-agregar.component.html',
  styleUrls: ['./perfil-admin-agregar.component.css']
})
export class PerfilAdminAgregarComponent implements OnInit {

  listaDePeliculas: any = []

  constructor(private contenidoService: contenidoService) { }

  obtenerContenido(){
    this.contenidoService.getContenido().subscribe(res=>{
      this.listaDePeliculas = res
      console.log(res);  
    }), error =>{
      console.log('Hay un error con la conexion de la API', error)
    }
 
  }

  borrarPeli(pelicula){
    let id = pelicula
   this.contenidoService.borrarContenido(pelicula).subscribe(response=>{
     this.obtenerContenido() 
    })
    console.log("Borro Exitosamente");
  
  }
  
  ngOnInit() {
    this.obtenerContenido();
  }

}
