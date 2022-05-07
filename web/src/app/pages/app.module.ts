import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OtamatoneModule } from 'components/otamatone';
import { LearnPage } from './learn/learn.component';
import { PracticePage } from './practice/practice.component';
import { QuizPage } from './quiz/quiz.component';

const routes = [
  { path: 'learn', redirectTo: 'learn/1', pathMatch: 'full' },
  { path: 'learn/:id', component: LearnPage },
  { path: 'practice', redirectTo: 'practice/1', pathMatch: 'full' },
  { path: 'practice/:id', component: PracticePage },
  { path: 'quiz', redirectTo: 'quiz/1', pathMatch: 'full' },
  { path: 'quiz/:id', component: QuizPage },
] as Routes;

@NgModule({
  declarations: [LearnPage, PracticePage, QuizPage],
  imports: [RouterModule.forChild(routes), CommonModule, OtamatoneModule],
  exports: [RouterModule],
})
export class AppModule {}