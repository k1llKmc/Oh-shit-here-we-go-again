import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {Courses} from "../../app.data";
import {Course} from "../../app.interface";
import gsap from "gsap";
import {RoutingAnimationService} from "../../routing-animation.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.component.html',
  imports: [
    NgForOf
  ],
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements AfterViewInit {
  courses: Course[] = Courses;

  constructor(private el: ElementRef, private routingAnimationService: RoutingAnimationService) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
  }

  ngAfterViewInit() {
    this.animateElements();
  }

  animateElements() {
    const elements = this.el.nativeElement.querySelectorAll('.courses-title, .courses__block');

    gsap.from(elements, {
      opacity: 0,
      y: 25,
      duration: 0.5,
      stagger: 0.2,
      filter: 'blur(10px)',
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });
  }
}
