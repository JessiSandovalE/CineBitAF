import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios


//Componentes
import { AppComponent } from './app.component';
import { NavComponent } from './myComponents/nav/nav.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { ContentComponent } from './myComponents/content/content.component';
import { HomeComponent } from './myComponents/home/home.component';
import { UserProfileComponent } from './myComponents/user-profile/user-profile.component';
import { UserProfileEditComponent } from './myComponents/user-profile-edit/user-profile-edit.component';
import { UserProfileAvatarComponent} from './myComponents/user-profile-avatar/user-profile-avatar.component';
import { PerfilAdminComponent } from './myComponents/perfil-admin/perfil-admin.component';

import { from } from 'rxjs';
import { LoginComponent } from './myComponents/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    UserProfileAvatarComponent,
    LoginComponent,
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
