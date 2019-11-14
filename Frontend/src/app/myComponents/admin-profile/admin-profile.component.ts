import { Component, OnInit } from '@angular/core';
import { contenidoService } from '../../Servicios/contenido.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  listaDePeliculas: any = []


  constructor(private contenidoService: contenidoService) { }
  
  obtenerContenido(){
    this.contenidoService.getContenido().subscribe(res=>{
  
      console.log(res);
  
     this.listaDePeliculas = res
    })
  }
  
  
    ngOnInit() {
      this.obtenerContenido();
    }
  
  }
