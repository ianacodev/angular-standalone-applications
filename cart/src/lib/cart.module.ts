import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// routes
import { cartRoutes } from './cart.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(cartRoutes)],
})
export class CartModule {}
