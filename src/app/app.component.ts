import {Component} from '@angular/core';
import {AdvantageType} from "./type/advantage.type";
import {ProductCardType} from "./type/product-card.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Поля карточек преимуществ
   */
  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },


  ]

  /**
   * Поля карточек макарунов
   */
  public productCards: ProductCardType[] = [
    {
      imageLink: 'macaroon1.png',
      name: 'Макарун с малиной',
      price: '1,70 руб.',
    },
    {
      imageLink: 'macaroon2.png',
      name: 'Макарун с манго',
      price: '1,70 руб.',
    },
    {
      imageLink: 'macaroon3.png',
      name: 'Пирог с ванилью',
      price: '1,70 руб.',
    },
    {
      imageLink: 'macaroon4.png',
      name: 'Пирог с фисташками',
      price: '1,70 руб.',
    },
  ]

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
  public shopPhoneNumber: string = '+375 (29) 368-98-68';

  /**
   * Ссылка на сайт магазина
   */
  public instagramLink: string = 'https://donmacaron.ru/main';

  /**
   * Скролл к элементу
   * @param target Элемент, к которому скроллим
   */
  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  /**
   * Скролл к элементу с добавлением названия макаруна с caps-lock в форму заказа
   * @param productCard Карточка макаруна
   * @param target
   */
  public addToCart(productCard: ProductCardType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = productCard.name.toUpperCase();
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
