import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundaryComponent } from './secundary.component';

describe('SecundaryComponent', () => {
  let component: SecundaryComponent;
  let fixture: ComponentFixture<SecundaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecundaryComponent]
    });
    fixture = TestBed.createComponent(SecundaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
