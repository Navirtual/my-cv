import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueSidebarComponent } from './bloque-sidebar.component';

describe('BloqueSidebarComponent', () => {
  let component: BloqueSidebarComponent;
  let fixture: ComponentFixture<BloqueSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
