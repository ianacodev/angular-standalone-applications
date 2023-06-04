import { Route } from '@angular/router';

// cart routes
export const cartRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./cart-route/cart-route.component').then(
        (mod) => mod.CartRouteComponent
      ),
  },
];
