import { Injectable } from '@angular/core';
import {ProductCardType} from "../type/product-card.type";

@Injectable()
export class ProductService {

  constructor() { }

  /**
   * Получение данных продуктов
   */
  public getProducts(): ProductCardType[] {
    // Как будто ajax
    return [
      {
        imageLink: 'macaroon1.png',
        name: 'Макарун с малиной',
        price: 1.70,
      },
      {
        imageLink: 'macaroon2.png',
        name: 'Макарун с манго',
        price: 1.70,
      },
      {
        imageLink: 'macaroon3.png',
        name: 'Пирог с ванилью',
        price: 1.70,
      },
      {
        imageLink: 'macaroon4.png',
        name: 'Пирог с фисташками',
        price: 1.70,
      },
    ]
  }


}
