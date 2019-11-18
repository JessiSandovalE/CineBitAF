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
import { AdminComponent } from './myComponents/dashboard/admin/admin.component';
import { AdminNavComponent } from './myComponents/dashboard/admin-nav/admin-nav.component';
import { UsersComponent } from './myComponents/dashboard/users/users.component';
import { PerfilAdminAgregarComponent  } from './myComponents/dashboard/perfil-admin-agregar/perfil-admin-agregar.component';
import { FormUserComponent } from './myComponents/dashboard/form-user/form-user.component';
import { LateralNavComponent } from './myComponents/dashboard/lateral-nav/lateral-nav.component';
import { CreateUserComponent } from './myComponents/dashboard/create-user/create-user.component';
import { EditUserComponent } from './myComponents/dashboard/edit-user/edit-user.component';
import { CreateContentComponent } from './myComponents/dashboard/create-content/create-content.component';
import { SearchComponent } from './myComponents/browse/search/search.component';
import { BitLikeComponent } from './myComponents/browse/bit-like/bit-like.component';
import { SelectedSerieComponent } from './myComponents/browse/selected-serie/selected-serie.component';
import { SelectedVideoCapComponent } from './myComponents/browse/selected-video-cap/selected-video-cap.component';

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
    PerfilAdminComponent,
    AdminComponent,
    AdminNavComponent,
    PerfilAdminAgregarComponent,
    UsersComponent,
    FormUserComponent,
    LateralNavComponent,
    CreateUserComponent,
    EditUserComponent,
    CreateContentComponent,
    SearchComponent,
    BitLikeComponent,
    SelectedSerieComponent,
    SelectedVideoCapComponent
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
