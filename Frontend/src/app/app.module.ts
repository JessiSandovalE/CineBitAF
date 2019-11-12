import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/* COMPONENTES */
import { AppComponent } from './app.component';
import { LoginComponent } from './myComponents/login/login.component';
import { RegistroComponent } from './myComponents/registro/registro.component';

/*  */
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { AppGeneralComponent } from './myComponents/app-general/app-general.component';
import { WomakeHomeComponent } from './myComponents/womake-home/womake-home.component';
import { AppGeneralFiltrosComponent } from './myComponents/app-general-filtros/app-general-filtros.component';
import { PerfilAdminComponent } from './myComponents/perfil-admin/perfil-admin.component';
import { PerfilAdminAgregarComponent } from './myComponents/perfil-admin-agregar/perfil-admin-agregar.component';


/* SERVICIOS */



/*  */

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'contenido', component: AppGeneralComponent
  },
  {
    path: 'contenidoConFiltros', component: AppGeneralFiltrosComponent
  },
  {
    path: 'perfilAdmin', component: PerfilAdminComponent
  },
  {
    path: 'perfilAdminAgregar', component: PerfilAdminAgregarComponent
  },
  {
    path: 'Womake/home', component: WomakeHomeComponent
  }
] 

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    FilterPipe,
    LoginComponent,
    AppGeneralComponent,
    WomakeHomeComponent,
    AppGeneralFiltrosComponent,
    PerfilAdminComponent,
    PerfilAdminAgregarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), /* estamos enrutando páginas principales */
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
