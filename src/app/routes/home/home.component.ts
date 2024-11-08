import {CommonModule, NgFor, NgIf} from '@angular/common';
import {Courses, Events} from '../../app.data';
import {Course} from '../../app.interface';
import {Event} from '../../app.interface';
import {AfterViewInit, Component, ElementRef, Inject} from '@angular/core';
import {AboutComponent} from '../about/about.component';
import {WhyComponent} from '../../components/why/why.component';
import {RouterLink, Router} from '@angular/router';
import {RoutingAnimationService} from '../../routing-animation.service';
import {PhoneMaskDirective} from '../../phone-mask.directive';
import {FormsModule} from '@angular/forms';
import gsap from 'gsap';
import {WhyHomeComponent} from "../../components/why-home/why-home.component";
import {EventsComponent} from "../../components/events/events.component";
import {CoursesComponent} from "../../components/courses/courses.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgFor,
    NgIf,
    AboutComponent,
    WhyComponent,
    PhoneMaskDirective,
    FormsModule,
    WhyHomeComponent,
    EventsComponent,
    CoursesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  courses: Course[] = Courses;
  events: Event[] = Events;
  event = {
    id: '01',
    name: 'Хакатон',
    title: 'Встречайте Хакатон!',
    description:
      'Дорогие студенты! Это будет незабываемое приключение в мире технологий и творчества! Наш хакатон — это уникальная возможность продемонстрировать свои знания и навыки, а также воплотить самые смелые идеи в реальность. Участие в хакатоне подразумевает работу в командах, где вы сможете взаимодействовать с коллегами по направлениям фронтенда, бэкенда и графического дизайна. Вместе вы будете развивать проекты, направленные на решение актуальных задач, сталкиваться с техническими и дизайнерскими вызовами, а также обмениваться идеями. Ждём ваши идеи и уникальные подходы, которые превратят обычные концепции в интересные и функциональные проекты. Не упустите шанс проявить себя и выиграть ценные призы!',
    startDate: '18.10.24',
    key: 'Cup.svg',
  };
  fullName: string = '';
  phone: string = '';

  constructor(
    private routingAnimationService: RoutingAnimationService,
    private el: ElementRef,
    private router: Router // Внедряем Router для отслеживания изменения маршрутов
  ) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
    this.scrollToTop(); // Сброс прокрутки при навигации
  }

  openInNewTab(url: string): void {
    window.open(url, '_blank');
  }

  onSubmit() {
    if (!this.fullName || !this.phone) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }
    window.open('https://t.me/Ustudy_AcademyRequests_bot', '_blank');
  }

  ngAfterViewInit() {
    this.animateAllElements();
    this.scrollToTop(); // Сброс прокрутки при инициализации компонента
    this.router.events.subscribe(() => {
      this.scrollToTop(); // Сброс прокрутки при изменении маршрута
    });
  }

  private animateAllElements() {
    const allElements = this.el.nativeElement.querySelectorAll(
      '.home__grid__mainBlock, .home__grid__smallBlock, .home__grid__bigBlock'
    );

    gsap.from(this.el.nativeElement.querySelector('.home__hero-title'), {
      opacity: 0,
      y: 25,
      duration: 0.5,
      delay: 1.2,
      stagger: 0.2,
      filter: 'blur(10px)',
    });

    gsap.from(allElements, {
      opacity: 0,
      y: 25,
      duration: 0.5,
      stagger: 0.2,
      filter: 'blur(10px)',
      scrollTrigger: {
        trigger: allElements[0],
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });
  }

  private scrollToTop() {
    window.scrollTo({top: 0, behavior: 'instant'});
  }
}
