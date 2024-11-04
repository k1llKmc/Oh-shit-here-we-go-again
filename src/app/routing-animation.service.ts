import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoutingAnimationService {

  constructor(private router: Router) {
  }

  redirectTo(route: string) {
    const overlay = document.querySelector('.transitionOverlay');
    // if (overlay) {
    //   overlay.classList.add('redirect');
    //
    //   setTimeout(() => {
    //     this.router.navigate([route]).then(() => {
    //       window.scrollTo({top: 0, behavior: 'instant'});
    //     });
    //   }, 2000);
    //
    //   setTimeout(() => {
    //     overlay.classList.remove('redirect');
    //   }, 2400);
    // }
    this.router.navigate([route]).then(() => {})
  }
}
