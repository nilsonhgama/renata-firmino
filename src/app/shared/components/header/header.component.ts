import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FreteComponent } from "../frete/frete.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FreteComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


  isControlRoute(): boolean {
    return (
      this.router.url.startsWith('')
    );
  }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile');
  }
}
