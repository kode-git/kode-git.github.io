import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { TerminalComponent } from '../shared/terminal/terminal.component';
import { IntroComponent } from '../shared/intro/intro.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PricesComponent } from './prices/prices.component';
import { MailComponent } from './mail/mail.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
import { WindowComponent } from '../shared/window/window.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateComponent } from './state/state.component';

@NgModule({
    declarations: [
        HomeComponent,
        NavbarComponent,
        TerminalComponent,
        IntroComponent,
        FooterComponent,
        AboutComponent,
        ProjectsComponent,
        PricesComponent,
        MailComponent,
        FaqComponent,
        TermsComponent,
        WindowComponent,
        PrivacyComponent,
        StateComponent,
    ],
    exports: [
        HomeComponent,
        AboutComponent,
        PricesComponent,
        ProjectsComponent,
        MailComponent,
        FaqComponent,
        TermsComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MatTooltipModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class PagesModule { }
