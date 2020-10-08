import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
{path: '',component: StartPageComponent},
{ path: 'category', component: CategoryComponent },
{ path: 'category-list', component: CategoryListComponent },
{ path: 'task', component: TasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
