import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';



import { BrowseComponent } from './myComponents/browse/browse.component';
import { HomeComponent } from './myComponents/browse/home/home.component';
import { ContentComponent } from './myComponents/browse/content/content.component';
import { UserProfileComponent } from './myComponents/browse/user-profile/user-profile.component';
import { UserProfileEditComponent } from './myComponents/browse/user-profile-edit/user-profile-edit.component';
import { LoginComponent } from './myComponents/login/login.component';
import { InicioComponent } from './myComponents/login/inicio/inicio.component';
import { RegistroComponent } from './myComponents/login/registro/registro.component';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';
import { AdminProfileComponent } from './myComponents/dashboard/admin-profile/admin-profile.component';
import { PerfilAdminComponent } from './myComponents/dashboard/perfil-admin/perfil-admin.component';
import { UserProfileAvatarComponent } from './myComponents/browse/user-profile-avatar/user-profile-avatar.component';
import { SelectedPeliComponent } from './myComponents/browse/selected-peli/selected-peli.component';
import { from } from 'rxjs';

/* import { PerfilAdminAgregarComponent} from './myComponents/perfil-admin-agregar';
 */
const APP_ROUTES: Routes =[
    {path:'login', component: LoginComponent, children:[
        {path: '', component: InicioComponent},
        {path: 'register', component: RegistroComponent}

    ]},
    
    {path: 'browse', component: BrowseComponent, children:[
        {path: '' , component: HomeComponent},
        {path: 'content', component: ContentComponent},
        {path: 'watch', component: SelectedPeliComponent},
        {path:'user', component: UserProfileComponent},
        {path:'editUser', component: UserProfileEditComponent},
        {path:'userAvatar', component: UserProfileAvatarComponent},
    ] },
    {path:'dashboard',component: DashboardComponent, children:[
        {path:'', component: AdminProfileComponent},
        {path:'perfil', component:PerfilAdminComponent}
    ]},
    { path: '**', pathMatch:'full', redirectTo: 'login'},

    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);