import { async, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// do not import any other than you test. For others, mock it
import { AppComponent } from './app.component';
import { MockComponent } 

describe('AppComponent', () => {
  var fixture, component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent('my-component-1'),
        MockComponent('my-component-2')
      ]
      // schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
    expect(copmponent.title).toEqual('app');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const h1 = compiled.querySelector('h1');
    expect(h1.textContent).toContain('Welcome to app!');
  }));

});