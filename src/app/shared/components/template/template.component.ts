import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {


   selected : string = 'skills'
   contact = [{moc: "bymail", id:123},{moc: "byphone", id:345}]
  constructor() { }

  ngOnInit(): void {
  }
  signIn(signInForm:any){
    console.log(signInForm.value)
     signInForm.reset()
  }

}
