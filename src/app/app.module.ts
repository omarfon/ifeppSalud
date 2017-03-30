import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { HomeComponent } from './paginas/home/home.component';

import { APP_ROUTING } from './app.route';
import { NavegadorComponent } from './paginas/nav/navegador/navegador.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { AlertasComponent } from './paginas/alertas/alertas.component';
import { CursoComponent } from './paginas/curso/curso.component';
import { PacienteComponent } from './paginas/paciente/paciente.component';
import { CuidadorComponent } from './paginas/cuidador/cuidador.component';
import { FooterComponent } from './paginas/nav/footer/footer.component';

//servicios
import { AngularFireModule } from 'angularfire2';
import { PacientedetalleComponent } from './paginas/pacientedetalle/pacientedetalle.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyBXCV71VqdSs50LOUw8ZDOFw_Ya9NiQ75w",
    authDomain: "ifeepsalud.firebaseapp.com",
    databaseURL: "https://ifeepsalud.firebaseio.com",
    storageBucket: "ifeepsalud.appspot.com",
    messagingSenderId: "452354677105"
  }


@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    HomeComponent,
    NavegadorComponent,
    BlogComponent,
    AlertasComponent,
    CursoComponent,
    PacienteComponent,
    CuidadorComponent,
    FooterComponent,
    PacientedetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
