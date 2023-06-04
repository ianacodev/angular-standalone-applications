import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
// components
import { ShopComponent } from './shop/shop.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ShopComponent],
  selector: 'store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';
}
