import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnSizeComponent } from './btn-size.component';

describe('BtnSizeComponent', () => {
  let component: BtnSizeComponent;
  let fixture: ComponentFixture<BtnSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
