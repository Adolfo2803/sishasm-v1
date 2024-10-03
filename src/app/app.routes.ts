import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { CapturaComponent } from './captura/captura.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ModuloComponent } from './modulo/modulo.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'captura', component: CapturaComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'modulo', component: ModuloComponent},
    {path: 'configuracion', component: ConfiguracionComponent},
    {path:'**',redirectTo:'/home',pathMatch:'full'}
];
