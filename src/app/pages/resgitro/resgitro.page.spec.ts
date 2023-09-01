import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResgitroPage } from './resgitro.page';

describe('ResgitroPage', () => {
  let component: ResgitroPage;
  let fixture: ComponentFixture<ResgitroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResgitroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
