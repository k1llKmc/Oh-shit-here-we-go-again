// language.service.ts
import {Injectable} from '@angular/core';
// @ts-ignore
import {translations, Lang, Translation} from './translation';  // Путь к файлу

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: Lang = Lang.Ru;

  setLanguage(language: Lang) {
    this.currentLanguage = language;
  }

  getLanguage() {
    return this.currentLanguage;
  }

  getTranslations() {
    return translations[this.currentLanguage];
  }
}
