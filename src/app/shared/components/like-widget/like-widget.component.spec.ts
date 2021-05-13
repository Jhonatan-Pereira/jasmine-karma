import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('Should create component', () => {
    const componente = fixture.componentInstance;
    expect(componente).toBeTruthy();
  });

  
  it('Should auto generate ID when id input property is missing', () => {
    const componente = fixture.componentInstance;
    fixture.detectChanges();
    expect(componente.id).toBeTruthy();
  });
});