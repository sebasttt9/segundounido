import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchBPComponent } from './switch-bp.component';

describe('SwitchBPComponent', () => {
  let component: SwitchBPComponent;
  let fixture: ComponentFixture<SwitchBPComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchBPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchBPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
