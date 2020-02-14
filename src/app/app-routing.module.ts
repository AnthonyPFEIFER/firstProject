import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ALaUneComponent } from './components/ala-une/ala-une.component';
import { SportsComponent } from './components/sports/sports.component';
import { VieLocaleComponent } from './components/vie-locale/vie-locale.component';
import { LoisirsComponent } from './components/loisirs/loisirs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'a-la-une', component: ALaUneComponent },
  { path: 'loisirs', component: LoisirsComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'vie-locale', component: VieLocaleComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'article/:id', component: FullArticleComponent },
  { path: 'admin/article/add', component: AddArticleComponent },
  { path: 'admin/article/edit-article/:id', component: EditArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
