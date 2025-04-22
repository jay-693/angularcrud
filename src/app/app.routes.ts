import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { TodosService } from './services/todos.service';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { TempletFormComponent } from './components/templet-form/templet-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ProductListComponent } from './components/products/products-list/products-list.component';

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
    },
    {
        path:'reactive-form',
        component: ReactiveFormComponent
    },
    { 
        path: 'products',
        component: ProductListComponent
    },
    { 
        path: 'products/add', 
        component: ProductFormComponent 
    },
    { 
        path: 'products/edit/:id', 
        component: ProductFormComponent
    },
    { 
        path: '', 
        redirectTo: '/products', 
        pathMatch: 'full' }
];
