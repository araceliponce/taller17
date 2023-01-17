import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActMenuComponent } from './act-menu.component';

describe('ActMenuComponent', () => {
  let component: ActMenuComponent;
  let fixture: ComponentFixture<ActMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
