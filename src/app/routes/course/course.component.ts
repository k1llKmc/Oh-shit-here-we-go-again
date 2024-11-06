import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {Course} from '../../app.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {Courses} from '../../app.data';
import {WhyComponent} from "../../components/why/why.component";
import {PriceFormatPipe} from "../../pipes/price-format.pipe";
import {SignUpComponent} from "../../components/sign-up/sign-up.component";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {RoutingAnimationService} from "../../routing-animation.service";

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [WhyComponent, PriceFormatPipe, SignUpComponent],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements AfterViewInit {
  card: Course | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private el: ElementRef, private routingAnimationService: RoutingAnimationService) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.card = Courses.find((course) => course.id === id);

        if (!this.card) {
          this.router.navigate(['/not-found']);
        }
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }

  ngAfterViewInit() {
    this.animateAllElements();
  }

  private animateAllElements() {
    const allElements = this.el.nativeElement.querySelectorAll('.courseDetails-img , .courseDetails-title, .courseDetails-descr, .courseDetails__what-text, .courseDetails__what-title');
    const priceElements = this.el.nativeElement.querySelectorAll('.courseDetails__priceList__block, .courseDetails__priceList-title');

    gsap.from(allElements, {
      opacity: 0,
      y: 25,
      duration: .5,
      delay: .5,
      stagger: 0.2,
      filter: 'blur(10px)',
      scrollTrigger: {
        trigger: allElements[0],
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(priceElements, {
      opacity: 0,
      y: 25,
      duration: .5,
      stagger: 0.2,
      filter: 'blur(10px)',
      scrollTrigger: {
        trigger: priceElements[0],
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }
}
