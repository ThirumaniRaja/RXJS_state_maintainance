// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { HomeComponent } from './components/login/home/home.component';
// import { AppComponent } from './app.component';

// const routes: Routes = [
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'home',
//     component: HomeComponent
//   },
// ];

// @NgModule({
//   declarations: [],
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports: [RouterModule]
// })
// export class AuthRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/login/home/home.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

