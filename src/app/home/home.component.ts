import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';
import { SearchComponent } from '../components/search/search.component';
import { TempletFormComponent } from '../components/templet-form/templet-form.component';
import { EmployeeDataComponent } from '../components/employee-data/employee-data.component';
import { RouterLink } from '@angular/router';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [GreetingComponent, CounterComponent, SearchComponent,ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name="";
  homeMessage=signal('hello world');
  keyUpHandler(event:any){
     this.name=event.target.value;
    console.log(event.key);
  }
  product = {
    productname:"iphone",
    price:12300,
    color:"orange",
    discount:8,
    instock:10
  }
  listStyles = 'display: flex; padding: 8px';
  sectionStyles = {
    border: '1px solid black',
    'font-weight': 'bold',
  };
}
