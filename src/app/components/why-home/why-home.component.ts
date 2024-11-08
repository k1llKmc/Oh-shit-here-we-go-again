import {Component, ElementRef, AfterViewInit} from '@angular/core';
import gsap from "gsap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {PhoneMaskDirective} from "../../phone-mask.directive";
import {WhyComponent} from "../why/why.component";
import {RoutingAnimationService} from "../../routing-animation.service";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-why-home',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    PhoneMaskDirective,
    ReactiveFormsModule,
    WhyComponent
  ],
  templateUrl: './why-home.component.html',
  styleUrl: './why-home.component.scss'
})
export class WhyHomeComponent implements AfterViewInit {
  constructor(private routingAnimationService: RoutingAnimationService, private el: ElementRef) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
  }

  ngAfterViewInit() {
    this.animateAllElements();
  }

  private animateAllElements() {
    const allElements = this.el.nativeElement.querySelectorAll('.why-title, .why__block');

    gsap.from(allElements, {
      opacity: 0,
      y: 25,
      duration: .5,
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
