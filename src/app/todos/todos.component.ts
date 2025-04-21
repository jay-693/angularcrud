import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  // todoService=inject(TodosService);
  // todoItems= signal<Array<Todo>>([]);
  // ngOnInit(): void {
  //   this.todoService
  //   .getTodosFromApi()
  //   .pipe(
  //     catchError((err)=>{
  //       console.log(err);
  //       throw err;
  //     })
  //   )
  //   .subscribe((todos)=>{
  //     this.todoItems.set(todos);
  //   })
  // }
  signupUsers: any[] = [];
  signupObj:any={
    Username:'',
    Email:'',
    Password:''
  }
  signinObj:any={
    Username:'',
    Password:''
  }
  ngOnInit(): void {
    const localdata=localStorage.getItem('signupUsers');
    if(localdata!=null){
      this.signupUsers=JSON.parse(localdata);
    }
  }

  onsignup(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      Username:'',
      Email:'',
      Password:''
    }
  }
  onlogin(){
    const isUserExist=this.signupUsers.find(m => m.Username==this.signinObj.Username && m.Password==this.signinObj.Password);
    if(isUserExist!=undefined)
    {
      alert("user logged in successfully");
    }
    else{
      alert("wrong Credentials");
    }
  }
 
}
