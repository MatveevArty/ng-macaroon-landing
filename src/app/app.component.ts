import {Component, OnInit} from '@angular/core';
import {AdvantageType} from "./type/advantage.type";
import {ProductCardType} from "./type/product-card.type";
import {ProductService} from "./services/product.service";
import {AdvantageService} from "./services/advantage.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  /**
   * Поля карточек преимуществ
   */
  public advantages: AdvantageType[] = [];

  /**
   * Поля карточек макарунов
   */
  public productCards: ProductCardType[] = []

  /**
   * Данные формы заказа
   */
  public formValues = {
    productTitle: '',
    name: '',
    phoneNumber: '',
  }

  /**
   * Флаг показывать ли фиксированный блок с подарком
   */
  public showPresent: boolean = true;

  /**
   * Номер телефона магазина
   */
  public shopPhoneNumber: string = '375293689868';

  /**
   * Ссылка на сайт магазина
   */
  public instagramLink: string = 'https://donmacaron.ru/main';

  constructor(private _productService: ProductService,
              private _advantageService: AdvantageService,
              public cartService: CartService,) {}

  ngOnInit() {
    this.productCards = this._productService.getProducts();
    this.advantages = this._advantageService.getAdvantages();
  }

  /**
   * Скролл к элементу
   * @param target Элемент, к которому скроллим
   */
  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  /**
   * Добавление товара в корзину с увеличением числа товаров и суммы чека
   * @param productCard Карточка товара
   */
  public addToCart(productCard: ProductCardType): void {
    this.cartService.count++;
    this.cartService.total = this.cartService.total + productCard.price;
    alert(`${productCard.name} добавлен в корзину!`);
  }

  /**
   * Создание заказа (имитация)
   */
  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Выберите макарун');
      return;
    }
    if (!this.formValues.name) {
      alert('Напишите ваше Имя');
      return;
    }
    if (!this.formValues.phoneNumber) {
      alert('Напишите ваш телефон');
      return;
    }

    // ajax
    alert('Спасибо за заказ!');

    this.formValues = {
      productTitle: '',
      name: '',
      phoneNumber: '',
    }
  }
}
