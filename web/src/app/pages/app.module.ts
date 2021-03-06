import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { OtamatoneModule } from 'app/components/otamatone';
import { OtamatoneClipModule } from 'app/components/otamatone-clip';
import { OtamatoneInputModule } from 'app/components/otamatone-input';
import { TwoColumnModule } from 'app/components/two-column';

import { LearnPage } from './learn/learn.component';
import { QuizPage } from './quiz/quiz.component';
import { ArraysEqualModule } from 'app/pipes/arrays-equal';
import { DashboardPage } from './dashboard/dashboard.component';

const routes = [
  {
    path: '',
    component: DashboardPage,
  },
  { path: 'learn', redirectTo: 'learn/0', pathMatch: 'full' },
  {
    path: 'learn/:index',
    component: LearnPage,
  },
  { path: 'quiz', redirectTo: '', pathMatch: 'full' },
  { path: 'quiz/:id', redirectTo: 'quiz/:id/0', pathMatch: 'full' },
  { path: 'quiz/:id/:question', component: QuizPage },
] as Routes;

@NgModule({
  declarations: [LearnPage, QuizPage, DashboardPage],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    OtamatoneModule,
    OtamatoneClipModule,
    OtamatoneInputModule,
    TwoColumnModule,
    ArraysEqualModule,
  ],
  exports: [RouterModule],
})
export class AppModule {}
