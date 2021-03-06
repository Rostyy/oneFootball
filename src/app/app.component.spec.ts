import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import { PlayerComponent } from './player/player.component';
import { FieldComponent } from './field/field.component';

import { DraggableDirective } from './shared/directives/draggable.directive';
import { DropTargetDirective } from './shared/directives/drop-target.directive';

import { DragService } from './shared/services/drag.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    	imports: [HttpModule],
      declarations: [
        AppComponent,
        FieldComponent,
        PlayerTableComponent,
        PlayerComponent,
        DraggableDirective,
        DropTargetDirective
      ],
      providers: [DragService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  }));
});
