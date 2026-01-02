import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-frete',
  imports: [CommonModule],
  templateUrl: './frete.component.html',
  styleUrl: './frete.component.scss'
})
export class FreteComponent implements OnInit, OnDestroy {
  phrases: string[] = [
    'PARCELE EM ATÉ 12x',
    'DESCONTOS DE 5% NO PIX',
    'FRETE GRÁTIS ACIMA DE R$ 1.000,00 ',
  ];

  currentIndex = 0;
  intervalId?: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}