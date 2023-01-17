import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActUruguayComponent } from './act-uruguay.component';

describe('ActUruguayComponent', () => {
  let component: ActUruguayComponent;
  let fixture: ComponentFixture<ActUruguayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActUruguayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActUruguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
