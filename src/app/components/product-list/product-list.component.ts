import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']//check this
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  public products: any;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      data => { this.products = data },
      err =>  console.error(err),
      () => console.log('products loaded')
    );
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

}
