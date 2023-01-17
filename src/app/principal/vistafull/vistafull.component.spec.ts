import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistafullComponent } from './vistafull.component';

describe('VistafullComponent', () => {
  let component: VistafullComponent;
  let fixture: ComponentFixture<VistafullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistafullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistafullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
