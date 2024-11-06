import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {RouterLink} from '@angular/router';
import {RoutingAnimationService} from "../../routing-animation.service";
import gsap from "gsap";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {
  constructor(private routingAnimationService: RoutingAnimationService, private el: ElementRef) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
  }

  ngAfterViewInit() {
    const allElements = this.el.nativeElement.querySelectorAll('.footer-logo ,.footer__nav-block, .footer__nav-iframe');

    gsap.from(allElements, {
      opacity: 0,
      y: 25,
      duration: .5,
      stagger: 0.2,
      filter: "blur(10px)",
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: "top 70%",
        toggleActions: "play none none none",
      }
    });
  }
}
