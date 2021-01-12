import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomTableComponent } from './custom-table/custom-table.component';

const routes: Routes = [
  {
    path: '',
    component: CustomTableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
