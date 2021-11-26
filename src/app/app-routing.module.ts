import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
    { path: '', component: FormsComponent }
    // { path: 'tutorials', component: TutorialsListComponent },
  //{ path: 'tutorials/:id', component: TutorialDetailsComponent },
  //{ path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

