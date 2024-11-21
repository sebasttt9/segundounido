import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DiazcheckComponent } from './diazcheck.component';

describe('DiazcheckComponent', () => {
  let component: DiazcheckComponent;
  let fixture: ComponentFixture<DiazcheckComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiazcheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiazcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
