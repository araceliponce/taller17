import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActChileComponent } from './act-chile.component';

describe('ActChileComponent', () => {
  let component: ActChileComponent;
  let fixture: ComponentFixture<ActChileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActChileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
