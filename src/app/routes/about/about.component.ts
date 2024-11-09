import { Component } from '@angular/core';
import {WhyComponent} from "../../components/why/why.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    WhyComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
