import { Courses } from './../../app.data';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Carousel } from '@fancyapps/ui';
import '@fancyapps/ui/dist/carousel/carousel.css';
import { Course } from '../../app.interface';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor, RouterModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = Courses;

  ngOnInit() {
    const element = document.getElementById('myCarousel');
    if (element) {
      const carousel = new Carousel(element, {
        infinite: true,
      });
    }
  }
}
