import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'moneda',
    loadChildren: () => import('./pages/moneda/moneda.module').then( m => m.MonedaPageModule)
  },
  {
    path: 'fecha',
    loadChildren: () => import('./pages/fecha/fecha.module').then( m => m.FechaPageModule)
  },
  {
    path: 'numeros',
    loadChildren: () => import('./pages/numeros/numeros.module').then( m => m.NumerosPageModule)
  },
  {
    path: 'palabras',
    loadChildren: () => import('./pages/palabras/palabras.module').then( m => m.PalabrasPageModule)
  },
  {
    path: 'percent',
    loadChildren: () => import('./pages/percent/percent.module').then( m => m.PercentPageModule)
  },
  {
    path: 'json',
    loadChildren: () => import('./pages/json/json.module').then( m => m.JsonPageModule)
  },
  {
    path: 'moneda/:value',
    loadChildren: () => import('./pages/moneda/moneda.module').then( m => m.MonedaPageModule)
  },
  {
    path: 'fecha/:dateValue',
    loadChildren: () => import('./pages/fecha/fecha.module').then( m => m.FechaPageModule)
  },
  {
    path: 'numeros/:value',
    loadChildren: () => import('./pages/numeros/numeros.module').then( m => m.NumerosPageModule)
  },
  {
    path: 'palabras/:value',
    loadChildren: () => import('./pages/palabras/palabras.module').then( m => m.PalabrasPageModule)
  },
  {
    path: 'percent/:value',
    loadChildren: () => import('./pages/percent/percent.module').then( m => m.PercentPageModule)
  },
  {
    path: 'json/:value',
    loadChildren: () => import('./pages/json/json.module').then( m => m.JsonPageModule)
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
