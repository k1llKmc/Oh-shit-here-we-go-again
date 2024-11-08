import {Component, AfterViewInit, ElementRef} from '@angular/core';
import {RouterLink} from '@angular/router';
import {RoutingAnimationService} from "../../routing-animation.service";
import {NgForOf} from "@angular/common";
import {Course} from "../../app.interface";
import {Courses} from "../../app.data";
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  courses: Course[] = Courses;

  constructor(private routingAnimationService: RoutingAnimationService, private el: ElementRef) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
  }

  ngAfterViewInit() {
    const headerElements = this.el.nativeElement.querySelectorAll('.header-logo, .header__nav-list li, .header__nav-btn');

    gsap.from(headerElements, {
      opacity: 0,
      y: 25,
      delay: .7,
      duration: .5,
      stagger: 0.2,
      filter: "blur(10px)",
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
  }
}
