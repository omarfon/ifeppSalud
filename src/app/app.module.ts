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
    CuidadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
