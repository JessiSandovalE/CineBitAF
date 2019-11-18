import { Component, OnInit } from '@angular/core';
import {contenidoService} from '../../../services/contenido.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private contenidoService:contenidoService) { }
  filteredByGender_local:any;
  filteredByGender:any;
  listaDePeliculas:any;
  ngOnInit() {
    this.filteredByGender_local=localStorage.getItem('filteredByGender');
    console.log(this.filteredByGender_local)
    this.getGenres();
  }

  getGenres(){
    this.contenidoService.getGenres(this.filteredByGender_local).subscribe(res=>{
  
      console.log(res);
  
     this.listaDePeliculas = res
    })
  } 

}
