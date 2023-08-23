import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassaroComponent } from './passaro.component';

describe('PassaroComponent', () => {
  let component: PassaroComponent;
  let fixture: ComponentFixture<PassaroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassaroComponent]
    });
    fixture = TestBed.createComponent(PassaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
