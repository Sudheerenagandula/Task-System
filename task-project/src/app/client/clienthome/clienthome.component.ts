import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.component.html',
  styleUrls: ['./clienthome.component.css']
})
export class ClienthomeComponent {
  searchText: string = '';
  
  constructor(
    
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.getAllEmployee();
  }

  getAllEmployee(): void {
    
  }

  onSearchInput(ev: any): void {
    // this.employeeService.getSearchEmployee(ev.target.value).pipe(take(1)).subscribe((res) => {
    //   this.employee = res;
    // });
  }

  deleteEmployee(id: any): void {
    // this.employeeService.deleteEmployee(id).pipe(take(1)).subscribe((res) => {
    //   if (res) {
    //     alert("Employee Delete successfully");
    //     this.getAllEmployee();
    //   }
    // });
  }

  updateEmployee(id: any): void {
    this.router.navigate(["/addEmployee"], {queryParams: {id: id}});
  }
}
