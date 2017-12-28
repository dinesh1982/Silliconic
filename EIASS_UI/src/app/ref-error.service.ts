
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpErrorResponse } from '@angular/common/http';

// The RefErrorService is a central service where errors can be posted.
// Then error reporting components can subscribe to the error channel here.
@Injectable()
export class RefErrorService {

  // Observable string sources
  private errorPostedSource = new Subject<HttpErrorResponse>();

  // Observable string streams
  public errorPosted$ = this.errorPostedSource.asObservable();

  public postError(error: HttpErrorResponse) {
    this.errorPostedSource.next(error);
  }

}
