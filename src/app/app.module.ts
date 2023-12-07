import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GoogleMapsModule } from "@angular/google-maps";
import { AppRoutingModule } from "./app-routing.module";
import { interceptorProviders } from "./shared";
import { AppComponent } from "./app.component";
import { MasterHeadComponent } from "./components/master-head/master-head.component";
import { NavTopComponent } from "./components/nav-top/nav-top.component";
import { PortalComponent } from "./components/portal/portal.component";
import { AboutUsOverviewComponent } from "./components/about-us-overview/about-us-overview.component";
import { ContactUsOverviewComponent } from "./components/contact-us-overview/contact-us-overview.component";
import { UserManualComponent } from "./components/user-manual/user-manual.component";
import { AnnouncementComponent } from "./components/announcement/announcement.component";
import { AuthInjectComponent } from "./auth-inject/auth-inject.component";
import { LogoutComponent } from "./logout/logout.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { ChangePasswordFormComponent } from "./components/user-profile/change-password-form/change-password-form.component";
import { PublicComponent } from "./public/public.component";
import { SharedModule } from "./shared/shared.module";


@NgModule({
    declarations: [
        AppComponent,
        MasterHeadComponent,
        NavTopComponent,
        PortalComponent,
        AboutUsOverviewComponent,
        ContactUsOverviewComponent,
        UserManualComponent,
        AnnouncementComponent,
        AuthInjectComponent,
        LogoutComponent,
        UserProfileComponent,
        ChangePasswordFormComponent,
    ],
    providers: [interceptorProviders],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        GoogleMapsModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class AppModule { }
