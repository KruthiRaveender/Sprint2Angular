import { Component, OnInit } from '@angular/core';
import { MyserviceService, Question } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  
 
obj1: any;
Question: Question[];
message: string;
  constructor(private myservice: MyserviceService, private router: Router) { 

  this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(Question:Question): any {
    return this.myservice.onUpdate(Question).subscribe(data => {
      this.message = data
    });
  }
  ngOnInit(): void {
  }
}
