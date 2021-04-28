import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl,} from '@angular/forms';
import {Usuario,ListaUsuarios} from "../../interfaces/usuario"
@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

formulario:FormGroup;
nombre:any;
apellidos:any;
ciudad:any;
pais: any;
hombre:any;
mujer:any;
otro:any;
lista:Array<any> = ListaUsuarios;

  constructor(public fb:FormBuilder) {
    this.formulario = this.fb.group({
      nombre:["",Validators.required],
      apellidos:["",Validators.required],
      ciudad:["",Validators.required],
      pais:["",Validators.required],
      mujer:["",Validators.required],
      hombre:["",Validators.required],
      otro:["",Validators.required],
    });
    

  
  }

  ngOnInit(): void {
      this.nombre=this.formulario.get("nombre") as FormGroup;
      this.apellidos=this.formulario.get("apellidos") as FormGroup;
      this.ciudad=this.formulario.get("ciudad") as FormGroup;
      this.pais=this.formulario.get("pais") as FormGroup;
      this.hombre=this.formulario.get("hombre") as FormGroup;
      this.mujer=this.formulario.get("mujer") as FormGroup;
      this.otro=this.formulario.get("otro") as FormGroup;
  }
 
crear(){
  let radio:string; 
  if(this.hombre.value=="masculino"){
    radio= "masculino";
  }else if(this.hombre.value=="femenino"){
    radio="femenino"
  }else{
    radio="otro"
  }
  let user:Usuario = {nombre:this.nombre.value ,apellidos:this.apellidos.value,ciudad:this.ciudad.value,pais:this.pais.value,genero:radio}
  ListaUsuarios.push(user);
  console.log(user.nombre,user.pais,user.apellidos,user.ciudad,user.genero);
}
 //// GuardarEnLista(): void {
//    if (this.formulario.get('nombre').value)
 //   this.user.nombre = this.formulario.get("nombre").value;
 //   ListaUsuarios.push()
 // }
}
