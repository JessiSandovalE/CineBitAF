import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  local = {nombre:""};

  slide = [
    {
      artista: "Historia1",
      img: "../../../assets/img/romance/romance1.jpg",
      url: "/contenidoConFiltros",
      bot: true
    },
    {
      artista: "Historia2",
      img: "../../../assets/img/romance/romance2.jpg",
      url: "/contenidoConFiltros",
      bot: true
    },
    {
      artista: "Historia3",
      img: "../../../assets/img/romance/romance3.jpg",
      url: "/contenidoConFiltros",
      bot: true
    },
    {
      artista: "Historia4",
      img: "../../../assets/img/romance/romance4.jpg",
      url: "/contenidoConFiltros",
      bot: true
    }
  ];

  slide1 = [
    {
      album: "Madame X",
      artista: "Madonna",
      img: "../../../assets/img/romance/serieromance1.jpg",
      url: "/contenidoConFiltros",
      bot: true
    },
    {
      album: "Lemonade",
      artista: "Beyoncé",
      img: "../../../assets/img/romance/serieromance2.jpg",
      url: "/contenidoConFiltros",
      bot: true
    },
    {
      album: "25",
      artista: "Adele",
      img: "../../../assets/img/romance/serieromance3.jpg",
      url: "/contenidoConFiltros",
      bot: true
    },
    {
      album: "Dua Lipa",
      artista: "Dua Lipa",
      img: "../../../assets/img/romance/serieromance4.jpg",
      url: "/contenidoConFiltros",
      bot: true
    }
  ];

  isValid = false;
  noisValid = true;

  boton(display) {
    this.isValid = true;
    this.noisValid = false;
  }
  boton1(display) {
    this.isValid = false;
    this.noisValid = true;
  }

/* -------------------SLIDE 2----------------------- */
  
slide2 = [
  {
    id: 6,
    album: "Abbey Road",
    artista: "The Beatles",
    img: "../../../assets/img/drama/drama1.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    id: 7,
    album: "In Rainbows",
    artista: "Radiohead",
    img: "../../../assets/img/drama/drama2.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    id: 8,
    album: "Dark Side of The Moon",
    artista: "Pink Floyd",
    img: "../../../assets/img/drama/drama3.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    id: 9,
    album: "InnerSpeaker",
    artista: "Tame Impala",
    img: "../../../assets/img/drama/drama4.jpg",
    url: "/contenidoConFiltros",
    bot: false
  }
];

slide12 = [
  {
    id: 10,
    album: "Melody's Echo Chamber",
    artista: "Melody's Echo Chamber",
    img: "../../../assets/img/drama/seriedrama1.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "Houses Of The Holy",
    artista: "Led Zeppelin",
    img: "../../../assets/img/drama/seriedrama2.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "A Night at the Opera",
    artista: "Queen",
    img: "../../../assets/img/drama/seriedrama3.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "Let It Bleed",
    artista: "The Rolling Stones",
    img: "../../../assets/img/drama/seriedrama4.jpg",
    url: "/contenidoConFiltros",
    bot: false
  }
];

isValid2 = false;
noisValid2 = true;

boton2(display) {
  this.isValid2 = true;
  this.noisValid2 = false;
}
boton12(display) {
  this.isValid2 = false;
  this.noisValid2 = true;
}

/* ----------------SLIDE 3-------------------------- */

slide3 = [
  {
    id: 11,
    album: "¡Metiendo mano!",
    artista: "Willie Colón y Rubén Blades",
    img: "../../../assets/img/anime/anime1.jpg",
    url: "/contenidoConFiltros",
    bot: true
  },
  {
    id: 12,
    album: "El mismo",
    artista: "ChocQuibTown",
    img: "../../../assets/img/anime/anime2.jpg",
    url: "/contenidoConFiltros",
    bot: true
  },
  {
    id: 13,
    album: "La revancha del burro",
    artista: "Systema Solar",
    img: "../../../assets/img/anime/anime3.jpg",
    url: "/contenidoConFiltros",
    bot: true
  },
  {
    id: 14,
    album: "Elegancia Tropical",
    artista: "Bomba Estéreo",
    img: "../../../assets/img/anime/anime4.jpg",
    url: "/contenidoConFiltros",
    bot: true
  }
];

slide13 = [
  {
    id: 15,
    album: "La tierra del Olvido",
    artista: "Carlos Vives",
    img: "../../../assets/img/anime/serieanime1.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "Buenos Hermanos",
    artista: "Ibrahim Ferrer",
    img: "../../../assets/img/anime/serieanime2.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "Bachata Rosa",
    artista: "Juan Luis Guerra",
    img: "../../../assets/img/anime/serieanime3.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "Joe Arroyo y La Verdad",
    artista: "Joe Arroyo",
    img: "../../../assets/img/anime/serieanime4.jpg",
    url: "/contenidoConFiltros",
    bot: false
  }
];

isValid3 = false;
noisValid3 = true;

boton3(display) {
  this.isValid3 = true;
  this.noisValid3 = false;
}
boton13(display) {
  this.isValid3 = false;
  this.noisValid3 = true;
}

/* --------------------SLIDE 4---------------------- */

slide4 = [
  {
    id: 6,
    album: "Abbey Road",
    artista: "The Beatles",
    img: "../../../assets/img/comedia/comedia1.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    id: 7,
    album: "In Rainbows",
    artista: "Radiohead",
    img: "../../../assets/img/comedia/comedia2.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    id: 8,
    album: "Dark Side of The Moon",
    artista: "Pink Floyd",
    img: "../../../assets/img/comedia/comedia3.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    id: 9,
    album: "InnerSpeaker",
    artista: "Tame Impala",
    img: "../../../assets/img/comedia/comedia4.jpg",
    url: "/contenidoConFiltros",
    bot: false
  }
];

slide14 = [
  {
    id: 10,
    album: "Melody's Echo Chamber",
    artista: "Melody's Echo Chamber",
    img: "../../../assets/img/comedia/seriecomedia1.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "Houses Of The Holy",
    artista: "Led Zeppelin",
    img: "../../../assets/img/comedia/seriecomedia2.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "A Night at the Opera",
    artista: "Queen",
    img: "../../../assets/img/comedia/seriecomedia3.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "Let It Bleed",
    artista: "The Rolling Stones",
    img: "../../../assets/img/comedia/seriecomedia4.jpg",
    url: "/contenidoConFiltros",
    bot: false
  }
];

isValid4 = false;
noisValid4 = true;

boton4(display) {
  this.isValid4 = true;
  this.noisValid4 = false;
}
boton14(display) {
  this.isValid4 = false;
  this.noisValid4 = true;
}

/* ----------------SLIDE 5-------------------------- */

slide5 = [
  {
    id: 6,
    album: "Abbey Road",
    artista: "The Beatles",
    img: "../../../assets/img/historia/historia1.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    id: 7,
    album: "In Rainbows",
    artista: "Radiohead",
    img: "../../../assets/img/historia/historia2.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    id: 8,
    album: "Dark Side of The Moon",
    artista: "Pink Floyd",
    img: "../../../assets/img/historia/historia3.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    id: 9,
    album: "InnerSpeaker",
    artista: "Tame Impala",
    img: "../../../assets/img/historia/historia4.jpg",
    url: "/contenidoConFiltros",
    bot: false
  }
];

slide15 = [
  {
    id: 10,
    album: "Melody's Echo Chamber",
    artista: "Melody's Echo Chamber",
    img: "../../../assets/img/historia/seriehistoria1.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "Houses Of The Holy",
    artista: "Led Zeppelin",
    img: "../../../assets/img/historia/seriehistoria2.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "A Night at the Opera",
    artista: "Queen",
    img: "../../../assets/img/historia/seriehistoria3.jpg",
    url: "/contenidoConFiltros",
    bot: false
  },
  {
    album: "Let It Bleed",
    artista: "The Rolling Stones",
    img: "../../../assets/img/historia/seriehistoria4.jpg",
    url: "/contenidoConFiltros",
    bot: false
  }
];

isValid5 = false;
noisValid5 = true;

boton5(display) {
  this.isValid5 = true;
  this.noisValid5 = false;
}
boton15(display) {
  this.isValid5 = false;
  this.noisValid5 = true;
}


  constructor() { }

  ngOnInit() {
  }

}
