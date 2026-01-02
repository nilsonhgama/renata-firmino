import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../../components/menu/menu.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { ProfileComponent } from "../../components/profile/profile.component";
import { ExclusiveServiceComponent } from "../../components/exclusive-service/exclusive-service.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

interface Product {
  src: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    TestimonialsComponent,
    ProfileComponent,
    ExclusiveServiceComponent,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides: Product[] = [
    { src: "assets/img4.png" },
    { src: "assets/img5.png" },
    //{ src: "assets/img6.png" }
  ];

  currentIndex = 0;
  intervalId: any;

  constructor() {}

  next() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
  }

  prev() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
  }

  ngOnInit() {
    this.intervalId = setInterval(() => this.next(), 10000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
