import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios


//Componentes
import { AppComponent } from './app.component';

import { from } from 'rxjs';
//Browse
import { BrowseComponent } from './myComponents/browse/browse.component';
import { NavComponent } from './myComponents/browse/nav/nav.component';
import { FooterComponent } from './myComponents/browse/footer/footer.component';
import { HomeComponent } from './myComponents/browse/home/home.component';
import { ContentComponent } from './myComponents/browse/content/content.component';
import { UserProfileComponent } from './myComponents/browse/user-profile/user-profile.component';
import { UserProfileEditComponent } from './myComponents/browse/user-profile-edit/user-profile-edit.component';
import { UserProfileAvatarComponent } from './myComponents/browse/user-profile-avatar/user-profile-avatar.component';
import { SelectedPeliComponent } from './myComponents/browse/selected-peli/selected-peli.component';
//Login
import { LoginComponent } from './myComponents/login/login.component';
import { InicioComponent } from './myComponents/login/inicio/inicio.component';
import { RegistroComponent } from './myComponents/login/registro/registro.component';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';

//Dashboard
import { AdminProfileComponent } from './myComponents/dashboard/admin-profile/admin-profile.component';
import { PerfilAdminComponent } from './myComponents/dashboard/perfil-admin/perfil-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ContentComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    UserProfileAvatarComponent,
    SelectedPeliComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    AdminProfileComponent,
    PerfilAdminComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
