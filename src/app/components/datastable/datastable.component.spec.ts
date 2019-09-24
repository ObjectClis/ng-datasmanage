import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatastableComponent } from './datastable.component';

describe('DatastableComponent', () => {
  let component: DatastableComponent;
  let fixture: ComponentFixture<DatastableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatastableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatastableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
