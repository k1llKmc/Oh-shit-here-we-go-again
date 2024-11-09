import {CommonModule, NgFor, NgIf} from '@angular/common';
import {Courses, Events} from '../../app.data';
import {Course} from '../../app.interface';
import {Event} from '../../app.interface';
import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {AboutComponent} from '../about/about.component';
import {WhyComponent} from '../../components/why/why.component';
import {RouterLink} from '@angular/router';
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
    EventsComponent,
    CoursesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  courses: Course[] = Courses;
  events: Event[] = Events;
  event = Events[0]
  fullName: string = '';
  phone: string = '';

  constructor(private routingAnimationService: RoutingAnimationService, private el: ElementRef) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
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
  }

  private animateAllElements() {
    const allElements = this.el.nativeElement.querySelectorAll(
      '.home__grid__mainBlock, .home__grid__smallBlock, .home__grid__bigBlock'
    );

    gsap.from(this.el.nativeElement.querySelector('.home__hero-title'), {
      opacity: 0,
      y: 25,
      duration: .5,
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
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }
}
