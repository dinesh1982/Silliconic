import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageHomeComponent} from './components/page-home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PageHomeComponent },
    { path: 'who', component: PageHomeComponent },
    { path: 'admission', component: PageHomeComponent },
    { path: 'life', component: PageHomeComponent },
    { path: 'bstaff', component: PageHomeComponent },
    { path: 'ballu', component: PageHomeComponent },
    { path: 'bannual', component: PageHomeComponent },
    { path: 'bsport', component: PageHomeComponent  },
    { path: 'pstaff', component: PageHomeComponent  },
    { path: 'pschool', component: PageHomeComponent  },
    { path: 'pannual', component: PageHomeComponent  },
    { path: 'psport', component: PageHomeComponent  },
    { path: 'parchive', component: PageHomeComponent  },
    { path: 'work', component: PageHomeComponent  },
    { path: 'contact', component: PageHomeComponent  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
