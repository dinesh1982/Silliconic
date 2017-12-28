import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {RefErrorService} from './ref-error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-root',
    template: `
        <nav class="navbar navbar-toggleable-md navbar-expand-md fixed-top navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        (click)="toggleCollapsed()">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" [ngClass]="{'collapse': collapsed, 'navbar-collapse': true}">
                    <ul class="nav navbar-nav pull-xs-right">
                        <li class="nav-item"><a routerLink="/home" routerLinkActive="active">Home</a></li>
                        <li class="nav-item"><a routerLink="/who" routerLinkActive="active">Who We are</a></li>
                        <li class="nav-item"><a routerLink="/admission" routerLinkActive="active">Admissions</a></li>
                        <li class="nav-item"><a routerLink="/life" routerLinkActive="active">Life at Sanscriti</a></li>
                        <li class="dropdown"><a [ngClass]="{'collapse': collapsed, 'navbar-collapse': true}">Blog
                            <span class="dropdown-toggle"></span></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item"><a routerLink="/bstaff" routerLinkActive="active">Staff</a></li>
                                <li class="nav-item"><a routerLink="/ballu" routerLinkActive="active">Allumanie</a></li>
                                <li class="nav-item"><a routerLink="/bannual" routerLinkActive="active">Annual Day</a></li>
                                <li class="nav-item"><a routerLink="/bsport" routerLinkActive="active">Sports Day</a></li>                                
                            </ul>
                        </li>
                        <li class="dropdown"><a [ngClass]="{'collapse': collapsed, 'navbar-collapse': true}">Photo Galary
                            <span class="dropdown-toggle"></span></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item"><a routerLink="/pstaff" routerLinkActive="active">Staff</a></li>
                                <li class="nav-item"><a routerLink="/pschool" routerLinkActive="active">Schools Facility</a></li>
                                <li class="nav-item"><a routerLink="/pannual" routerLinkActive="active">Annual Day</a></li>
                                <li class="nav-item"><a routerLink="/psport" routerLinkActive="active">Sports Day</a></li>
                                <li class="nav-item"><a routerLink="/parchive" routerLinkActive="active">Archaive</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a routerLink="/work" routerLinkActive="active">Work at Sanscriti</a></li>
                        <li class="nav-item"><a routerLink="/contact" routerLinkActive="active">Contact Us</a></li>
                    </ul>
                </div>

            <span style="margin-right: 5px;">
                <select #langSelect (change)="translate.use(langSelect.value)">
                  <option *ngFor="let lang of translate.getLangs()" [value]="lang"
                          [selected]="lang === translate.currentLang">{{ lang }}</option>
                </select>
            </span>

        </nav>
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-3">Sanscriti Vidhya Peeth</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a class="btn btn-primary" href="#" role="button">Learn more &raquo;</a></p>
          </div>
        </div>

        <div *ngIf="httpErrorResponse" class="container" style="padding-top: 100px">
            <ngb-alert type="danger" (close)="closeAlert(alert)">
                <pre>{{httpErrorResponse | json}}</pre>
            </ngb-alert>
        </div>
        <div *ngIf="!httpErrorResponse" class="container">
         <router-outlet></router-outlet>
       </div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    httpErrorResponse: HttpErrorResponse | undefined;

    collapsed = true;
    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    public closeAlert() {
        this.httpErrorResponse = undefined;
    }
    // The constructor initializes the translation service
    constructor(
        private refErrorService: RefErrorService,
        private translate: TranslateService
    ) {
        this.translate.addLangs(['en', 'fr']);
        this.translate.setDefaultLang('en');

        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

        // Watch for errors to be posted to the error service.
        refErrorService.errorPosted$.subscribe(
            httpErrorResponse => this.httpErrorResponse = httpErrorResponse
        );
    }

}
