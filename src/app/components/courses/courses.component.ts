import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {Courses} from "../../app.data";
import {Course} from "../../app.interface";
import {NgForOf} from "@angular/common";
import gsap from "gsap";
import {RoutingAnimationService} from "../../routing-animation.service";


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements AfterViewInit {
  courses: Course[] = Courses;

  protected readonly alert = alert;

  constructor(private el: ElementRef, private routingAnimationService: RoutingAnimationService
    ,) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
  }


  ngAfterViewInit() {
    this.animateAllElements()
  }

  animateAllElements() {
    const allElements = this.el.nativeElement.querySelectorAll(
      '.courses-title, .courses__block'
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
}
