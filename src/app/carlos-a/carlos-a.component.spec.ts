import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarlosAComponent } from './carlos-a.component';

describe('CarlosAComponent', () => {
  let component: CarlosAComponent;
  let fixture: ComponentFixture<CarlosAComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlosAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarlosAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
