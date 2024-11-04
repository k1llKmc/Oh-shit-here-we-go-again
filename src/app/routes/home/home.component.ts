import {CommonModule, NgFor, NgIf} from '@angular/common';
import {Courses, Events} from '../../app.data';
import {Course} from '../../app.interface';
import {Event} from '../../app.interface';
import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {AboutComponent} from '../about/about.component';
import {WhyComponent} from '../../components/why/why.component';
import {CoursesComponent} from '../../components/courses/courses.component';
import {RouterLink} from '@angular/router';
import {RoutingAnimationService} from '../../routing-animation.service';
import {PhoneMaskDirective} from './phone-mask.directive';
import {FormsModule} from '@angular/forms';
import gsap from 'gsap';

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
    CoursesComponent,
    PhoneMaskDirective,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  courses: Course[] = Courses;
  events: Event[] = Events;
  fullName: string = '';
  phone: string = '';

  constructor(private routingAnimationService: RoutingAnimationService, private el: ElementRef) {
  }


  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
  }

  onSubmit() {
    if (!this.fullName || !this.phone) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    console.log('Отправляем заявку:', {fullName: this.fullName, phone: this.phone});
    window.location.href = 'https://example.com/thank-you';
  }

  ngAfterViewInit() {
    this.animateAllElements();
  }

  private animateAllElements() {


    const allElements = this.el.nativeElement.querySelectorAll(
      '.home__grid__mainBlock, .home__grid__smallBlock, .home__grid__bigBlock'
    );


    gsap.from(allElements, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: .5,
      stagger: 0.2,
      filter: 'blur(10px)',
      scrollTrigger: {
        trigger: allElements[0],
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }
}
