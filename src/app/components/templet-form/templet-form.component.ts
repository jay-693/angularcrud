import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-templet-form',
  imports: [FormsModule],
  templateUrl: './templet-form.component.html',
  styleUrl: './templet-form.component.scss'
})
export class TempletFormComponent {
    userObj: any ={
         emailAddress: '',
         password:'',
         isCheck:false
    }
    onSave(){
      debugger;
      const fromValue=this.userObj;
    }
}
