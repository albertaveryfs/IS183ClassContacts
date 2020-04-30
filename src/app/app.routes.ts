import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CoursesComponent } from './courses/courses.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'courses',
    component: CoursesComponent
  }, {
    path: 'groups',
    component: GroupsComponent
  }, {
    path: '**',
    component: LoginComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
