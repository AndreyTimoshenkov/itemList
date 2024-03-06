import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  // {
  //   path: 'item-list',
  //   loadChildren: () =>
  //     import('../app/components/item-list/item-list.component').then(
  //       (m) => m.ItemListComponent
  //     ),
  // },
  { path: 'item-list', component: ItemListComponent, title: 'Item List' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
