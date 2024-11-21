import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconofComponent } from './iconof.component';

describe('IconofComponent', () => {
  let component: IconofComponent;
  let fixture: ComponentFixture<IconofComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
