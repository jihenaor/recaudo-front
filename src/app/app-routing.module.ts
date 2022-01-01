import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Paso3Component } from './pages/paso3/paso3.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'finalizar/:codsuscrip/:idfactura',
    component: Paso3Component,

  },
  {
    path: 'test',
    component: TestComponent,

  },
//  { path: '**', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, })],
  exports: [RouterModule],
})

export class AppRoutingModule { }
