import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AdminClientGuardService implements CanActivate { //AdminClientGuardService: This service protects routes by implementing the Can Activate interface.
    constructor(public router: Router) {
    }

    canActivate(): boolean {
        if (!this.isAuthenticated()) { //isAuthenticated: This method checks if the user is authenticated by verifying the role stored in localStorage
            this.router.navigate(['/adminlogin']);
            return false;
        } else {
            return true;
        }
    }

    isAuthenticated() {
        let isAuth: boolean = false;

        if (typeof localStorage !== 'undefined') {
            isAuth = localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'user' ? true : false;
        }
        return isAuth;
        
    }
}
