import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean{
    return true;
       // 2.) If token is not set, which means a new tab is opened, then check the node server if session is still open. if open then take action similar to 1, ese redirect to sigin page
        // console.log("Check for session");
        // return this.authService.isSessionOpen().take(1).map(obj => {
        //     console.log(obj);
        //     if (obj == true) {
        //         return obj;
        //     }
        //     else {
        //         this.router.navigate(['/signin']);
        //         return obj;
        //     }
        // }
        // );
    }

    canLoad(route: Route) {
        return true;
        // if(this.authService.isAuthenticated()){
        //     return true;
        // }
        // else
        // {
        //     this.router.navigate(['/signin']);
        // }
    }
}