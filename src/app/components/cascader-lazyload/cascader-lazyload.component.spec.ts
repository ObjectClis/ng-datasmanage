import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderLazyloadComponent } from './cascader-lazyload.component';

describe('CascaderLazyloadComponent', () => {
  let component: CascaderLazyloadComponent;
  let fixture: ComponentFixture<CascaderLazyloadComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderLazyloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderLazyloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
