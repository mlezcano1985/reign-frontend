import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodeArticlesComponent } from './node-articles/node-articles.component';

const routes: Routes = [{
  path: 'articles/node',
  component: NodeArticlesComponent
}, {
  path: '',
  redirectTo: 'articles/node',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
