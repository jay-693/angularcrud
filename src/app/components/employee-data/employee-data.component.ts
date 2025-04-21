import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
declare var bootstrap : any;
@Component({
  standalone:true,
  selector: 'app-employee-data',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './employee-data.component.html',
  styleUrl: './employee-data.component.scss'
})
export class EmployeeDataComponent {
  @ViewChild('empModal') empModal: ElementRef | undefined;
  employeeForm! : FormGroup;
  employeeList: any[]=[];
  http=inject(HttpClient);

  ngOnInit():void{
    this.getAllEmployee();
    this.employeeForm=new FormGroup({
      fullName:new FormControl(),
      email:new FormControl()
    })
  }
  onSubmit():void{
      console.log(this.employeeForm.value)
  }
  openModel() {
    if(this.empModal){
      this.empModal.nativeElement.style.display='block';
    }
  }
  closeModal(){
    if(this.empModal){
      this.empModal.nativeElement.style.display='none';
    }
  }
  getAllEmployee() {
    this.http.get("https://localhost:7084/api/employees").subscribe({
      next: (res: any) => {
        console.log("Raw API response:", res);
        this.employeeList = res;
      },
      error: err => {
        console.error("API error:", err);
      }
    });
  }
}
// import { HttpClient } from '@angular/common/http';
// import { Component, inject } from '@angular/core';
// import { NgFor } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// declare var bootstrap: any;
// declare var userId:any;

// @Component({
//   selector: 'app-employee-data',
//   imports:[NgFor,FormsModule],
//   templateUrl: './employee-data.component.html',
//   styleUrl: './employee-data.component.scss'
// })
// export class EmployeeDataComponent {
//   employeeList: any[] = [];
//   http = inject(HttpClient);

//   // Form fields
//   userId: number | null = null;
//   userName: string = '';
//   userGender: string = '';

//   ngOnInit(): void {
//     this.getAllEmployee();
//   }

//   getAllEmployee() {
//     this.http.get("https://localhost:7084/api/employees").subscribe({
//       next: (res: any) => {
//         console.log("API Data:", res);
//         this.employeeList = res;
//       },
//       error: err => {
//         console.error('Error fetching employees:', err);
//       }
//     });
//   }

//   openModel() {
//     const modalEl = document.getElementById('userModal');
//     const modal = new bootstrap.Modal(modalEl);
//     modal.show();
//   }

//   saveUser(event: Event) {
//     event.preventDefault();

//     const newEmployee = {
//       id: this.userId,
//       name: this.userName,
//       gender: this.userGender
//     };

//     this.http.post("https://localhost:7084/api/employees", newEmployee).subscribe({
//       next: (res: any) => {
//         this.employeeList.push(res);

//         // Reset form
//         this.userId = null;
//         this.userName = '';
//         this.userGender = '';

//         // Close modal
//         const modalEl = document.getElementById('userModal');
//         const modal = bootstrap.Modal.getInstance(modalEl);
//         modal.hide();
//       },
//       error: err => {
//         console.error("Error saving user:", err);
//       }
//     });
//   }
// }
