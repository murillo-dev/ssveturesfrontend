import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path:"user",
    component: UserComponent
  },
  {
    path:'event',
    component: EventComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
