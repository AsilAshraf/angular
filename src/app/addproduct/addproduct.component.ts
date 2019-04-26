import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../components/product-list/product.model';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private ps:ProductService) { }
  productItem=new IProduct(null,null,null,null,null,null,null,null);

  ngOnInit() {
  }
AddProduct()
{
  this.ps.newProduct(this.productItem);
  alert("Success");
}
}
