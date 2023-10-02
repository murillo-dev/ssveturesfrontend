import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./pages/welcome/welcome.component')
                                .then(comp => comp.WelcomeComponent)
    },
    {
        path: "event",
        loadComponent: () => import('./pages/event/event.component')
                                .then(comp => comp.EventComponent)
    }
];
