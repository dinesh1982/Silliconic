import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { HttpTranslateLoaderFactory } from './http-translate-loader.factory';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageHomeComponent} from './components/page-home.component';

import { RefErrorService } from './ref-error.service';

@NgModule({
  imports: [
      NgbModule.forRoot(),
      BrowserModule,
      FormsModule,
      HttpClientModule,
      TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpTranslateLoaderFactory),
                deps: [HttpClient]
            }
        }),
      ReactiveFormsModule,
      AppRoutingModule,
      NgxDatatableModule
  ],
  declarations: [
    AppComponent,
    PageHomeComponent
  ],  
  providers: [
  	RefErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
