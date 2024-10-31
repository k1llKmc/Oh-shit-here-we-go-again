import {Component, AfterViewInit, ElementRef} from '@angular/core';
import {RouterLink} from '@angular/router';
import {RoutingAnimationService} from "../../routing-animation.service";
import {NgForOf} from "@angular/common";
import {Course} from "../../app.interface";
import {Courses} from "../../app.data";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  courses: Course[] = Courses;

  constructor(private routingAnimationService: RoutingAnimationService) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
  }
}
