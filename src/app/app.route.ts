import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { AlertasComponent } from './paginas/alertas/alertas.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { CursoComponent } from './paginas/curso/curso.component';
import { PacienteComponent } from './paginas/paciente/paciente.component';
import { CuidadorComponent } from './paginas/cuidador/cuidador.component';
import { PacientedetalleComponent } from './paginas/pacientedetalle/pacientedetalle.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'alertas', component: AlertasComponent},
    { path: 'curso', component: CursoComponent},
    { path: 'paciente', component: PacienteComponent},
    { path: 'cuidador', component: CuidadorComponent},
    { path: 'pacientedetalle/:id', component: PacientedetalleComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
