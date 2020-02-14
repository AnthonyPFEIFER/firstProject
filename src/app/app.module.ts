import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { FirstCharPipePipe } from './pipes/first-char-pipe.pipe';
import { TradMoisPipe } from './pipes/trad-mois.pipe';
import { ALaUneComponent } from './components/ala-une/ala-une.component';
import { VieLocaleComponent } from './components/vie-locale/vie-locale.component';
import { LoisirsComponent } from './components/loisirs/loisirs.component';
import { SportsComponent } from './components/sports/sports.component';
import { AdminComponent } from './components/admin/admin.component';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { FormsModule } from '@angular/forms';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
// Import de HttpClientModule depuis '@angular/common/http'
import { HttpClientModule } from '@Angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    DetailArticleComponent,
    FirstCharPipePipe,
    TradMoisPipe,
    ALaUneComponent,
    VieLocaleComponent,
    LoisirsComponent,
    SportsComponent,
    AdminComponent,
    FullArticleComponent,
    AddArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, // import de HttpClient pour pouvoir faire des requêtes HTTP
    FontAwesomeModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
