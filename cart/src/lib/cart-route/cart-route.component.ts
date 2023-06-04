import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// components
import { BannerComponent } from '@store/shared/ui';

@Component({
  selector: 'store-cart-route',
  standalone: true,
  imports: [CommonModule, RouterModule, BannerComponent],
  templateUrl: './cart-route.component.html',
  styleUrls: ['./cart-route.component.scss'],
})
export class CartRouteComponent {}
