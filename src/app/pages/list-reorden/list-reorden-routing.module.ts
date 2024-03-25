import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListReordenPage } from './list-reorden.page';

const routes: Routes = [
  {
    path: '',
    component: ListReordenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListReordenPageRoutingModule {}
