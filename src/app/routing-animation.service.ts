import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoutingAnimationService {

  constructor(private router: Router) {
  }

  redirectTo(route: string) {
    const header = document.querySelector('.transitionOverlay');
    if (header) {
      header.classList.add('redirect');
      setTimeout(() => {
        this.router.navigate([route]);
        header.classList.remove('redirect');
      }, 2000);
    }
  }
}
