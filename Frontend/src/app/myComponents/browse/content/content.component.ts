import { Component, OnInit } from '@angular/core';
import { contenidoService } from '../../../services/contenido.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 
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


