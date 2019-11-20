import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { contenido } from "src/app/module/contenido.module";

@Injectable({
  providedIn: "root"
})
export class contenidoService {
  private url =
    "http://localhost:3000/detail"; /* variable privada que solo sirve en este modulo */

  private url2 = "http://localhost:3000/data";
  
  

  constructor(private _http: HttpClient) {}


  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  /* Metodo GET */
  getContenido(): Observable<any> {
    return this._http.get<any>(this.url);
  }

  borrarContenido(_id){
    return this._http.delete(`${this.url}/${_id}`)
  }

/* Metodo GET por ID*/
getContenidoid(id): Observable<any>{
  return this._http.get(this.url+"/"+id).pipe(
    map(this.extractData));
}

/* Metodo GET por ID*/
getContenidoid_new(id): Observable<any>{
  return this._http.get(this.url2+"/data/"+id).pipe(
    map(this.extractData));
}


 /* Método GET para filtrar por Género */
 getGenres(genre):Observable<any>{
  return this._http.get<any>(this.url+"/genres/"+genre)
}


 /* Método GET para filtrar por favorito */
 getFav(fav):Observable<any>{
  return this._http.get<any>(this.url+"/favorite/true")
}


getType(type):Observable<any>{
  return this._http.get<any>(this.url+"/type/"+type)
}
 /*  crearUsuarios(user):Observable<any> {
    console.log(user);
    return this._http.post(this.url, user);
  }


  // Metodo GET para Usuario por NOMBRE
  getUsuario(nomusuario): Observable<any>{
    return this._http.get(this.url+"/Usuario/"+nomusuario).pipe(
      map(this.extractData));
  }

  updateUsuario (id, usuario): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this._http.put(this.url+ '/' + id, JSON.stringify(usuario), httpOptions).pipe(
      tap(_ => console.log(`usuario modificado con id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  } */

  updateContenidoLike (id, contenido): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this._http.put(this.url+ '/edit/' + id, JSON.stringify(contenido), httpOptions).pipe(
      tap(_ => console.log(`Contenido actualizado con el id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
 