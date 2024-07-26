import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AdminLoginGuardService implements CanActivate {
     //AdminLoginGuardService: This service guards routes by implementing the CanActivate interface, ensuring that only authenticated admin users can access certain routes.
   //canActivate Method: Determines if a route can be activated based on the user's authentication status.
    //isAuthenticated Method: Checks if the user is authenticated as an admin by inspecting the role stored in localStorage.
    //Navigation: If the user is not authenticated as an admin, they are redirected to the /adminlogin route.
    constructor(public router: Router) {
    }

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigate(['/adminlogin']);
            return false;
        } else {
            return true;
        }
    }

    isAuthenticated() {
        return (localStorage.getItem('role') === 'admin');
    }
}
