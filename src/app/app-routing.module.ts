import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CategoryComponent } from './category/category.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
{path: '',component: StartPageComponent},
{ path: 'category', component: CategoryComponent },
{ path: 'list', component: ListComponent },
{ path: 'tasks', component: TasksComponent},
{path:'category-class',component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
