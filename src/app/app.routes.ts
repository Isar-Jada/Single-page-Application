import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { RegistrationForm } from './registration-form/registration-form';
import { Home } from './home/home';

export const routes: Routes = [
    {path: 'profile', component: Profile},
    {path: 'register', component: RegistrationForm},
    {path: 'home', component: Home}
];
