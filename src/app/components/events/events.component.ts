import {Component, ElementRef} from '@angular/core';
import {Events} from "../../app.data";
import {Event} from "../../app.interface";
import {NgForOf} from "@angular/common";
import {RoutingAnimationService} from "../../routing-animation.service";
import gsap from "gsap";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  events: Event[] = Events.splice(0, 3);

  constructor(private routingAnimationService: RoutingAnimationService, private el: ElementRef) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
  }

  openInNewTab(url: string) {
    window.open(url, '_blank');
  }

  ngAfterViewInit() {
    this.animateAllElements();
  }

  private animateAllElements() {
    const allElements = this.el.nativeElement.querySelectorAll(
      '.events-title ,.events__block'
    );

    gsap.from(this.el.nativeElement.querySelector('.home__hero-title'), {
      opacity: 0,
      y: 25,
      duration: .5,
      delay: .5,
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
