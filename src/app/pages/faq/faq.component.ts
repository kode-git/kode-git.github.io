import { Component, OnInit } from '@angular/core';
import data from './faq.json'
/**
 * Class that defines an instance of question answer in the FAQ list
 */
class Faq{
  question : string;
  answer : string;
  collapse : string;
  color: string;
  constructor(question : string, answer : string, collapse : string){
    this.question = question;
    this.answer = answer;
    this.collapse = collapse
  }
}
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FaqComponent implements OnInit {

  faqs : Faq[] = [];

  constructor() { 
    this.initialize();
  }

  initialize(){
    var i = 0
    for(const element of data){
      var faq = new Faq(element.question, element.answer, "collapse-" + i)
      faq.color = 'white'
      this.faqs.push(faq)
      i += 1
    }
  }

  ngOnInit(): void {
  }

}
