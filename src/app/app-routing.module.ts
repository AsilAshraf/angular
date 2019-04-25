import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:'addproduct',component:AddproductComponent},
  {path:'productlist',component:ProductListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
