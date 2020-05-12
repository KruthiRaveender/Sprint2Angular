import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  updateQuestion: Question;
  constructor(private httpService: HttpClient) { }
  public getQuestions() {
    console.log("ins service get questions");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Question>("http://localhost:5001/questions/GetAllQuestions");
  }

  public addQuestion(addQuestion: Question) {
    console.log("ins service add");
    console.log(addQuestion);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:5000/questions/QuestionCreation", addQuestion,  { headers, responseType: 'text'});
  }
  
  public update(updateQuestion: Question) {
    this.updateQuestion = updateQuestion;
  }
  public updateMethod() {
    return this.updateQuestion;
  }
  public onUpdate(updateQuestion: Question) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:5002/questions/UpdateQuestion", updateQuestion,  { headers, responseType: 'text'});
  }
  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:5003ng/questions/DeleteQuestion/" + id,  { headers, responseType: 'text'});
  }

}
export class Question {
  id: number;
  content: string;
  option1: string;
  option2: string;
  option3: string;
  answer_option: number;
  
}
