import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePretty'
})
export class PhonePrettyPipe implements PipeTransform {

  /**
   * Преттирование бел номера телефона по шаблону ТЗ
   * @param phone Номер телефона
   * @param state Государство
   */
  transform(phone: string, state: string): string {
    if (state === 'BY' && phone.match(/\d{12}/)) {
      return `+${phone.slice(0, 3)} (${phone.slice(3, 5)}) ${phone.slice(5, 8)}-${phone.slice(8, 10)}-${phone.slice(10, 12)}`;
    } else {
      return phone;
    }
  }
}
