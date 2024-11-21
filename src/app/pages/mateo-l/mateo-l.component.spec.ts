import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MateoLComponent } from './mateo-l.component';

describe('MateoLComponent', () => {
  let component: MateoLComponent;
  let fixture: ComponentFixture<MateoLComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MateoLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateoLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
