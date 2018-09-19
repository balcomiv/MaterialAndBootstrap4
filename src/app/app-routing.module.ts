import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule' },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: '**', redirectTo: 'contactmanager' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    //  Exporting RouterModule makes router directives available for use in the AppModule components that will need them.
    RouterModule
  ]
})
export class AppRoutingModule { }
