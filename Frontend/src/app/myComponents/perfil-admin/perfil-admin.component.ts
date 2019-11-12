import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'perfilAdmin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})
export class PerfilAdminComponent implements OnInit {


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

  constructor() { }

  ngOnInit() {
  }

}
