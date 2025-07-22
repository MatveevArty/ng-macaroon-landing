import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductCardType} from "../../type/product-card.type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productCard: ProductCardType;
  @Output() addToCardEvent: EventEmitter<ProductCardType> = new EventEmitter<ProductCardType>();

  constructor() {
    this.productCard = {
      imageLink: '',
      name: '',
      price: 0,
    }
  }

  ngOnInit(): void {
  }

  /**
   * Добавление текущего товара в корзину
   */
  public addProductToCart() {
    this.addToCardEvent.emit(this.productCard)
  }
}
