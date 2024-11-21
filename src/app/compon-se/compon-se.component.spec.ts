import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponSEComponent } from './compon-se.component';

describe('ComponSEComponent', () => {
  let component: ComponSEComponent;
  let fixture: ComponentFixture<ComponSEComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponSEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
