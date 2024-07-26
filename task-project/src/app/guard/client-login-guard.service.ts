import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
 

@Injectable()
export class ClientLoginGuardService implements CanActivate { //ClientLoginGuardService: This service guards routes by implementing the CanActivate interface, ensuring that only authenticated users (either admin or user) can access certain routes.
    constructor( public router: Router) {
    }

    canActivate(): boolean { //canActivate Method: Determines if a route can be activated based on the user's authentication status.
        if (!this.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }

    isAuthenticated() { //isAuthenticated: This method checks if the user is authenticated by verifying the role stored in localStorage.
        let isAuth: boolean = false;

        if (typeof localStorage !== 'undefined') {
            isAuth = localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'user' ? true : false;
        }
        return isAuth;
       }
}

