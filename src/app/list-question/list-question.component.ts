import { Component, OnInit } from '@angular/core';
import { Question, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
message:string
Question:Question[];
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): any {
    this.myservice.getQuestions().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.Question = response;
  }
  update(updateQuestion: Question) {
    this.myservice.update(updateQuestion);
    this.router.navigate(['/updateQuestion']); 
  }
  delete(deleteQuestion: Question): any {
    this.myservice.delete(deleteQuestion.id).subscribe(data => {
      this.message = data
    });  //deleting the test
    this.router.navigate(['/listQuestion']);
  }

}
