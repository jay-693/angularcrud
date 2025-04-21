import { Component } from '@angular/core';
@Component({
  selector: 'app-templet-form',
  imports: [],
  templateUrl: './templet-form.component.html',
  styleUrl: './templet-form.component.scss'
})
export class TempletFormComponent {
    userObj: any ={
         emailAddress: '',
         password:'',
         isCheck:false
    }
}
