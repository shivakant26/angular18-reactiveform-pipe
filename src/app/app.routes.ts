import { Routes } from '@angular/router';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';
import { PipeexComponent } from '../components/pipeex/pipeex.component';
import { PagenotFoundComponent } from '../components/pagenot-found/pagenot-found.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"reative-form",
        pathMatch:'full'
    },
    {
        path:"reative-form",
        component:ReactiveFormComponent
    },
    {
        path:"pipe-example",
        component:PipeexComponent
    },
    {
        path:"**",
        component:PagenotFoundComponent
    }
];
