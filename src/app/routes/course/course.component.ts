import { Component } from '@angular/core';
import { Course } from '../../app.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from '../../app.data';
import { WhyComponent } from "../../components/why/why.component";
import { PriceFormatPipe } from "../../pipes/price-format.pipe";
import {SignUpComponent} from "../../components/sign-up/sign-up.component";

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [WhyComponent, PriceFormatPipe, SignUpComponent],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  card: Course | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

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
}
