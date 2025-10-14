import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Question } from './question/question';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About},
    { path: 'question', component: Question },
    { path: '**', redirectTo: '' }
];
