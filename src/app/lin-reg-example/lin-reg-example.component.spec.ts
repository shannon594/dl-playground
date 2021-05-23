import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinRegExampleComponent } from './lin-reg-example.component';

describe('LinRegExampleComponent', () => {
  let component: LinRegExampleComponent;
  let fixture: ComponentFixture<LinRegExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinRegExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinRegExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
