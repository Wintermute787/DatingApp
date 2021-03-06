import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { MemberEditComponent } from "./members/member-list/member-edit/member-edit.component";
import { MemberDetailComponent } from "./members/member-list/member-detail/member-detail.component";
import { appRoutes } from "./routes";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { AuthService } from "./_services/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { RouterModule } from "@angular/router";
import { MemberCardComponent } from "./members/member-list/member-card/member-card.component";
import { JwtModule } from "@auth0/angular-jwt";
import { TabsModule } from "ngx-bootstrap";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { NgxGalleryModule } from "@kolkov/ngx-gallery";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: ["localhost:5000/api/auth"]
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
