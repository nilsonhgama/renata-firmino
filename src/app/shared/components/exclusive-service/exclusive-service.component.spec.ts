import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveServiceComponent } from './exclusive-service.component';

describe('ExclusiveServiceComponent', () => {
  let component: ExclusiveServiceComponent;
  let fixture: ComponentFixture<ExclusiveServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExclusiveServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
