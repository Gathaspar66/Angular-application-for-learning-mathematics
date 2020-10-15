import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StartPageComponent } from './start-page/start-page.component';
import { CategoryComponent } from './category/category.component';

import { TasksComponent } from './tasks/tasks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CategoryClassComponent } from './category-class/category-class.component';
import { ListComponent } from './list/list.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    CategoryComponent,
    TasksComponent,
    NavbarComponent,
    CategoryClassComponent,
    ListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
