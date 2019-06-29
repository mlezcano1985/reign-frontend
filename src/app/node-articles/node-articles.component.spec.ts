import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeArticlesComponent } from './node-articles.component';

describe('NodeArticlesComponent', () => {
  let component: NodeArticlesComponent;
  let fixture: ComponentFixture<NodeArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
