import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  mailForm : FormGroup;
  default : boolean; 
  constructor() { 
    this.default = true;
    this.mailForm = new FormGroup({
      name : new FormControl("", [Validators.required, 	Validators.pattern("^[a-zA-Z]+$")]),
      email : new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      subject : new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      message : new FormControl("", [Validators.required, Validators.maxLength(1000)])
    });
  }

  ngOnInit(): void {
    
  }




}
