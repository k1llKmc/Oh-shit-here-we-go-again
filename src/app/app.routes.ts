import {Routes} from '@angular/router';
import {HomeComponent} from './routes/home/home.component';
import {AboutComponent} from './routes/about/about.component';
import {EventComponent} from './routes/event/event.component';
import {CourseComponent} from './routes/course/course.component';
import {NotFoundComponent} from './routes/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'events',
    component: EventComponent,
  },
  {
    path: 'course/:id',
    component: CourseComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
