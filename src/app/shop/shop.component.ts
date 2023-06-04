import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// components
import { BannerComponent } from '@store/shared/ui';

@Component({
  selector: 'store-shop',
  standalone: true,
  imports: [CommonModule, RouterModule, BannerComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {}
