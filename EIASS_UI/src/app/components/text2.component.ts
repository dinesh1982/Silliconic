import {
    Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit, OnChanges,
    SimpleChanges
} from '@angular/core';
@Component({
    selector: 'home-page',
    template: `
        <div  style="padding-top: 0px">
        <div class="container marketing">
		      <div class="row">
		        <div class="col-lg-4">
		          <img class="rounded-circle" src="./../assets/images/1.jpg" alt="placeholder image" width="140" height="140">
		          <h2>Principal</h2>
		          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
		          <p><a class="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
		        </div>
		        <div class="col-lg-4">
		          <img class="rounded-circle" src="./../assets/images/2.jpg" alt="placeholder image" width="140" height="140">
		          <h2>Testimony</h2>
		          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
		          <p><a class="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
		        </div>
		        <div class="col-lg-4">
		          <img class="rounded-circle" src="./../assets/images/login.jpg" alt="placeholder image" width="140" height="140">
		          <h2>Login</h2>
		           <form class="form-horizontal" role="form" method="POST" action="/login">
			            <div class="row">
			                <div class="col-md-12">
			                    <div class="form-group has-danger">
			                        <label class="sr-only" for="email">E-Mail Address</label>
			                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
			                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
			                            <input type="text" name="userId" class="form-control" id="userId"
			                                   placeholder="User Id" required autofocus>
			                        </div>
			                    </div>
			                </div>			                
			            </div>
			            <div class="row">
			                <div class="col-md-12">
			                	<div class="form-control-feedback">
			                        <span class="text-danger align-middle">
			                            <i class="fa fa-close"></i> Example error message
			                        </span>
			                    </div>
			            	</div>
			            </div>
			            <div class="row">
			                <div class="col-md-12">
			                    <div class="form-group">
			                        <label class="sr-only" for="password">Password</label>
			                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
			                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
			                            <input type="password" name="password" class="form-control" id="password"
			                                   placeholder="Password" required>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div class="row">
			                <div class="col-md-12">
			                	<div class="form-control-feedback">
			                        <span class="text-danger align-middle">
			                        <!-- Put password error message here -->    
			                        </span>
			                    </div>
			            	</div>
			            </div>
			            <div class="row">
			                <div class="col-md-12" style="padding-top: .35rem">
			                    <div class="form-check mb-2 mr-sm-2 mb-sm-0">
			                        <label class="form-check-label">
			                            <input class="form-check-input" name="remember"
			                                   type="checkbox" >
			                            <span style="padding-bottom: .15rem">Remember me</span>
			                        </label>
			                    </div>
			                </div>
			            </div>
			            <div class="row" style="padding-top: 1rem">
			                <div class="col-md-12">
			                    <a class="btn btn-primary" href="#" role="button"><i class="fa fa-sign-in"></i> Login</a>
			                    <a class="btn btn-link" href="/password/reset">Forgot Your Password?</a>
			                </div>
			            </div>
			        </form>
		          
		        </div>
		      </div>

		      <hr class="featurette-divider">

		      <div class="row featurette">
		        <div class="col-md-7">
		          <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
		          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
		        </div>
		        <div class="col-md-5">
		          <img class="featurette-image img-fluid mx-auto" src="./../assets/images/4.jpg" alt="placeholder image">
		        </div>
		      </div>

		      <hr class="featurette-divider">

		      <div class="row featurette">
		        <div class="col-md-7 push-md-5">
		          <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
		          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
		        </div>
		        <div class="col-md-5 pull-md-7">
		          <img class="featurette-image img-fluid mx-auto" src="./../assets/images/5.jpg" alt="placeholder image">
		        </div>
		      </div>

		      <hr class="featurette-divider">

		      <div class="row featurette">
		        <div class="col-md-7">
		          <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
		          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
		        </div>
		        <div class="col-md-5">
		          <img class="featurette-image img-fluid mx-auto" src="./../assets/images/6.jpg" alt="placeholder image">
		        </div>
		      </div>

		      <hr class="featurette-divider">
		    
		      <footer>
		        <p class="float-right"><a href="#">Back to top</a></p>
		        <p>&copy; 2017 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
		      </footer>

		    </div>
        </div>
    `
})
export class Text2 {
    

}