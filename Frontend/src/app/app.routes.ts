import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { HomeComponent } from './myComponents/home/home.component';
import { ContentComponent } from './myComponents/content/content.component';
import { UserProfileComponent } from './myComponents/user-profile/user-profile.component';
import { UserProfileAvatarComponent} from './myComponents/user-profile-avatar/user-profile-avatar.component';
import { UserProfileEditComponent } from './myComponents/user-profile-edit/user-profile-edit.component';
import { LoginComponent }from './myComponents/login/login.component';

const APP_ROUTES: Routes =[
    { path: 'home', component: HomeComponent },
    { path: 'all', component: ContentComponent },
    { path: 'userProfile', component: UserProfileComponent },
    { path: 'editUser', component: UserProfileEditComponent },
    { path: 'avatar', component: UserProfileAvatarComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home'},

    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);