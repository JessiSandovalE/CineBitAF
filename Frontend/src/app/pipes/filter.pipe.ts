
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(lista: any[], textoUsuario: string): any[] {
    if (!textoUsuario) return null;
    return lista.filter(canciones =>
      canciones.titulo.toLowerCase().includes(textoUsuario.toLowerCase()) ||
      canciones.artista.toLowerCase().includes(textoUsuario.toLowerCase())
    );
  }
}
