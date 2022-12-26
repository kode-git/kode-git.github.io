import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './src/app/shared/navbar/navbar.component';
import { TerminalComponent } from './src/app/shared/terminal/terminal.component';
import { IntroComponent } from './src/app/shared/intro/intro.component';
import { AboutComponent } from './src/app/shared/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TerminalComponent,
    IntroComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
