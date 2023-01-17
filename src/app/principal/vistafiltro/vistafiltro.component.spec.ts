import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistafiltroComponent } from './vistafiltro.component';

describe('VistafiltroComponent', () => {
  let component: VistafiltroComponent;
  let fixture: ComponentFixture<VistafiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistafiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistafiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
