import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PagesModule } from "./pages/pages.module";
import { GithubService } from './services/github/github.service';
import { HttpService } from './services/http/http.service';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent,
    ],
    providers: [
        HttpService,
        GithubService,
        {
            provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        PagesModule
    ],
    exports: [
        AppRoutingModule,

    ]
})
export class AppModule { }
