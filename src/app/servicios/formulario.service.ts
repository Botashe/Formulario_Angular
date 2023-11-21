import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  url_backend = environment.url_backend+"/registroForm";

  constructor(private http:HttpClient) { }

  crear_datosFormulario(datosFormulario:any){
    return this.http.post('${this).url_backend}/crear-registro',datosFormulario);
  }
}
