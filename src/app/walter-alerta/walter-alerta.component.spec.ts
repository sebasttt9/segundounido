import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { WalterAlertaComponent } from './walter-alerta.component';

describe('WalterAlertaComponent', () => {
  let component: WalterAlertaComponent;
  let fixture: ComponentFixture<WalterAlertaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WalterAlertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalterAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
