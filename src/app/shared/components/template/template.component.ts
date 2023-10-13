import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  obj ={
    "email": "JHON",
    "password": "feff",
    "selected": "skills",
    "bymail": "bymail",
    "byphone": ""
}
   selected : string = 'skills'
   contact = [{moc: "bymail", id:123},{moc: "byphone", id:345}]

   
  constructor() { }

  ngOnInit(): void {
  }
  signIn(signInForm:any){
    console.log(signInForm.value)
     signInForm.reset()
  }
  onUpdate(signInForm:NgForm){
    console.log('gd')
    signInForm.form.patchValue(this.obj)
  }

}
