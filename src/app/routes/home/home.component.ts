import {CommonModule, NgFor, NgIf} from '@angular/common';
import {Courses, Events} from '../../app.data';
import {Course} from '../../app.interface'; // Adjust import as necessary
import {Event} from '../../app.interface'; // New import for AppEvent
import {Component, NgModule} from '@angular/core';
import {AboutComponent} from '../about/about.component';
import {WhyComponent} from '../../components/why/why.component';
import {CoursesComponent} from '../../components/courses/courses.component';
import {RouterLink} from '@angular/router';
import {RoutingAnimationService} from "../../routing-animation.service";
import {PhoneMaskDirective} from "./phone-mask.directive";

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
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.component.scss'],
})
export class HomeComponent {
  courses: Course[] = Courses;
  events: Event[] = Events;

  constructor(private routingAnimationService: RoutingAnimationService) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
  }

}
