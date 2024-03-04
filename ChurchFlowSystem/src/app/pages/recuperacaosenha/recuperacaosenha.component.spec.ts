import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacaosenhaComponent } from './recuperacaosenha.component';

describe('RecuperacaosenhaComponent', () => {
  let component: RecuperacaosenhaComponent;
  let fixture: ComponentFixture<RecuperacaosenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperacaosenhaComponent]
    });
    fixture = TestBed.createComponent(RecuperacaosenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
