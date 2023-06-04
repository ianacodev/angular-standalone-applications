import { Route } from '@angular/router';
// components
import { ShopComponent } from './shop/shop.component';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () => import('@store/cart').then((m) => m.CartModule),
  },
  {
    path: '**',
    component: ShopComponent,
  },
];
