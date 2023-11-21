import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { FormularioService } from '../servicios/formulario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  formulario:any;

  constructor(private fb:FormBuilder, private ServiceFormulario:FormularioService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(4)]],
      apellido:['',[Validators.required,Validators.minLength(4)]],
      edad:['',[Validators.required,Validators.min(5)]],
      email: ['',Validators.required]
    })
  }

  get formularioReactivo(){
    return this.formulario.controls;
  }

  botonEnviar(){
    console.log(this.formulario.value);
  }

  enviarDatos(){
    this.ServiceFormulario.crear_datosFormulario(this.formulario.value).subscribe(
      (response:any)=>{
        if(response.registro){
          alert("Datos guardados exitosamente");
          console.log(response)
        }else{
          alert("Datos no registrados")
        }
      },
      error=>{
        alert("error al registrar")
      }
    ) 
  }

}
