import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {RoutingAnimationService} from "../../routing-animation.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private routingAnimationService: RoutingAnimationService) {
  }

  navigateToCourse(route: string) {
    this.routingAnimationService.redirectTo(route);
  }
}
