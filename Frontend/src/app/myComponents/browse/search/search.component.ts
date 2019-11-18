import { contenidoService } from './../../../services/contenido.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private contenService: contenidoService) { }

  peliculas: any;
  valor: any;
  filtro: any = [];
  lowerCase: any;

  validar(){
    if(this.filtro.length == 0){
      let p = document.getElementById('sorry');
      p.innerHTML = "Lo siento"
    }
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.valor = params['valor'].toLocaleLowerCase();

      console.log(this.valor)
    })
    this.contenService.getContenido().subscribe(response => {
      this.peliculas = response
      console.log(this.peliculas);

      this.peliculas.forEach(element => {
        this.lowerCase = element.title.toLocaleLowerCase();
        if (this.lowerCase.indexOf(this.valor) >= 0) {
          this.filtro.push(element);

          console.log("Coincidencia  " + element.title);
          
        }
      });

    })
    console.log(this.filtro);
    this.validar();
  }


}
