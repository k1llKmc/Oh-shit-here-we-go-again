import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    input.value = this.formatPhoneNumber(value);
  }

  private formatPhoneNumber(value: string): string {
    if (!value) return '';

    const areaCode = value.substring(0, 2);
    const prefix = value.substring(2, 5);
    const lineNumber = value.substring(5, 7);
    const lastTwoDigits = value.substring(7, 9);

    // Возвращаем отформатированное значение
    return `(${areaCode})${prefix ? prefix : ''}${lineNumber ? '-' + lineNumber : ''}${lastTwoDigits ? '-' + lastTwoDigits : ''}`;
  }
}
