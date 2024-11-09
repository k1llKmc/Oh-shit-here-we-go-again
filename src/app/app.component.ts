import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 100 && !this.isScrolled) {
      this.isScrolled = true;
      console.log('Скролл больше 100px');
    }

    if (scrollPosition <= 100 && this.isScrolled) {
      this.isScrolled = false;
      console.log('Скролл меньше 100px');
    }
  }
}
