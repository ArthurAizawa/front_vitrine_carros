import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarroCard } from './carro-card';

describe('CarroCard', () => {
  let component: CarroCard;
  let fixture: ComponentFixture<CarroCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CarroCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
