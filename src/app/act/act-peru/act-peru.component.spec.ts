import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActPeruComponent } from './act-peru.component';

describe('ActPeruComponent', () => {
  let component: ActPeruComponent;
  let fixture: ComponentFixture<ActPeruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActPeruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActPeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
