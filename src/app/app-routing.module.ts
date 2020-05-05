import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListQuestionComponent } from './list-question/list-question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';


const routes: Routes = [{path:'listquestion',component:ListQuestionComponent},
{path:'addquestion',component:AddQuestionComponent},
{path:'updateQuestion',component:UpdateQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
