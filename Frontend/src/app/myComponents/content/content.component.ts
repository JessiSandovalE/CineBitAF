import { Component, OnInit } from '@angular/core';
import { contenidoService } from '../../services/contenido.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
/* 
  
  slide = [
    {
      artista: "Historia1",
      img: "../../../assets/img/historia/historia1.jpg",
      url: "/contenidoConFiltros",
      bot: true
    },
    {
      artista: "Historia2",
      img: "../../../assets/img/historia/historia2.jpg",
      url: "/contenidoConFiltros",
      bot: true
    },
    {
      artista: "Historia3",
      img: "../../../assets/img/historia/historia3.jpg",
      url: "/contenidoConFiltros",
      bot: true
    },
    {
      artista: "Historia4",
      img: "../../../assets/img/historia/historia4.jpg",
      url: "/contenidoConFiltros",
      bot: true
    },
    {
      album: "Madame X",
      artista: "Madonna",
      img: "../../../assets/img/historia/seriehistoria1.jpg",
      url: "/contenidoConFiltros",
      bot: true
    }
  ];
 */  
  
/*   constructor() { }

  ngOnInit() {
  }
 */

 

 
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


