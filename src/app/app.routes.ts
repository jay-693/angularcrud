import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { TodosService } from './services/todos.service';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { TempletFormComponent } from './components/templet-form/templet-form.component';

export const routes: Routes = [
    {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
    },
    {
        path:'todos',
        component:TodosComponent
    },
    {
        path:'employee',
        component:EmployeeDataComponent
    },
    {
        path:'templet-form',
        component:TempletFormComponent
    }
];
