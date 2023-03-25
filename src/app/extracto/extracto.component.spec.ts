import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractoComponent } from './extracto.component';

describe('ExtractoComponent', () => {
  let component: ExtractoComponent;
  let fixture: ComponentFixture<ExtractoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
