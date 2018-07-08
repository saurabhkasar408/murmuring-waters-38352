import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    num1=Math.floor(Math.random()*(100));
    num2=Math.floor(Math.random()*(150));
    num3=this.num1+this.num2;
    num4=NaN;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }


    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/success']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
