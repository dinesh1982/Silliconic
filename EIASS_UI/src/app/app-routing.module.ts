import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Text2 } from './components/text2.component';
/*import { PageGettingStartedComponent } from './components/page-getting-started.component';
import { PageProcessInstancesComponent } from './components/page-process-instances.component';
import { PageWorkItemsComponent } from './components/page-work-items.component';
import { PageProcessDefinitionsComponent } from './components/page-process-definitions.component';
import { PageOthersComponent } from './components/page-others.component';
import { PageServicesComponent } from './components/page-services.component';
import { PageAdvancedTableComponent } from './components/page-advanced-table.component';
import { PageObjectsComponent } from './components/page-objects.component';*/

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Text2 },
    { path: 'who', component: Text2 },
    { path: 'admission', component: Text2 },
    { path: 'life', component: Text2 },
    { path: 'bstaff', component: Text2 },
    { path: 'ballu', component: Text2 },
    { path: 'bannual', component: Text2 },
    { path: 'bsport', component: Text2  },
    { path: 'pstaff', component: Text2  },
    { path: 'pschool', component: Text2  },
    { path: 'pannual', component: Text2  },
    { path: 'psport', component: Text2  },
    { path: 'parchive', component: Text2  },
    { path: 'work', component: Text2  },
    { path: 'contact', component: Text2  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
