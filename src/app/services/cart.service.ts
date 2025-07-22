import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /**
   * Общее число товаров в корзине
   */
  public count: number = 0;

  /**
   * Общая сумма товаров в корзине
   */
  public total: number = 0;

  constructor() {}
}
