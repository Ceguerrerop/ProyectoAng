import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lobby',
    loadChildren: () => import('./pages/lobby/lobby.module').then( m => m.LobbyPageModule)
  },
  {
    path: 'pag1',
    loadChildren: () => import('./pages/pag1/pag1.module').then( m => m.Pag1PageModule)
  },
  {
    path: 'pag2',
    loadChildren: () => import('./pages/pag2/pag2.module').then( m => m.Pag2PageModule)
  },
  {
    path: 'pag3',
    loadChildren: () => import('./pages/pag3/pag3.module').then( m => m.Pag3PageModule)
  },  {
    path: 'resgitro',
    loadChildren: () => import('./pages/resgitro/resgitro.module').then( m => m.ResgitroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
