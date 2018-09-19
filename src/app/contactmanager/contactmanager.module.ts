import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/material.module';

import { ContactManagerAppComponent } from './contactmanagerapp.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: '', component: ContactManagerAppComponent,
    children: [
      { path: '', component: MainContentComponent}
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  declarations: [
    ToolbarComponent, 
    ContactManagerAppComponent, 
    MainContentComponent, 
    SidenavComponent
  ]
})
export class ContactmanagerModule { }
