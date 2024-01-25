import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { UserDashboardComponent } from './Dashboard/user-dashboard/user-dashboard.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { SidebarComponent } from './comps/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIf } from '@angular/common';
import { WelcomeBrianComponent } from './comps/welcome-brian/welcome-brian.component';
import { HomeBudgetTeamComponent } from './comps/home-budget-team/home-budget-team.component';
import { AnalyticsComponent } from './Dashboard/analytics/analytics.component';
import { ContentHomeComponent } from './comps/home-budget-team/content-home/content-home.component';
import { ContentBudgetComponent } from './comps/home-budget-team/content-budget/content-budget.component';
import { ContentTeamComponent } from './comps/home-budget-team/content-team/content-team.component';
import { GitissueComponent } from './charts/gitissue.component';
import { NgChartsModule} from 'ng2-charts';
import { TaskdistributionComponent } from './charts/taskdistribution.component';
import { BudgetDistributionComponent } from './charts/budget-distribution.component';
import { VisitorOverviewComponent } from './charts/visitor-overview.component';
import { ConversationComponent } from './charts/conversation.component';
import { ImpressionComponent } from './charts/impression.component';
import { VisitsComponent } from './charts/visits.component';
import { VisitorvspageComponent } from './charts/visitorvspage.component';
import { Donut1Component } from './charts/donut1.component';
import { Donut2Component } from './charts/donut2.component';
import { Donut3Component } from './charts/donut3.component';
import { Donut4Component } from './charts/donut4.component';
import { FinanceComponent } from './Dashboard/finance/finance.component';
import { AccBalanceComponent } from './charts/acc-balance.component';
import { CryptoComponent } from './Dashboard/crypto/crypto.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BitcoinComponent } from './charts/bitcoin.component';
import { ChatComponent } from './comps/chat/chat.component';
import { ChatlookComponent } from './comps/chatlook/chatlook.component';
import { ChattingareaComponent } from './comps/chattingarea/chattingarea.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './core/interceptor/httpconfig.interceptor';
import { SummaryComponent } from './comps/summary/summary.component';
import { AdminDashboardComponent } from './Dashboard/admin-dashboard/admin-dashboard.component';
import { GitissueComponent2 } from './charts/gitissue2.component';
import { GitissueComponent3 } from './charts/gitissue3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    NavbarComponent,
    SidebarComponent,
    WelcomeBrianComponent,
    HomeBudgetTeamComponent,
    AnalyticsComponent,
    ContentHomeComponent,
    ContentBudgetComponent,
    ContentTeamComponent,
    GitissueComponent,
    GitissueComponent2,
    GitissueComponent3,
    TaskdistributionComponent,
    BudgetDistributionComponent,
    VisitorOverviewComponent,
    ConversationComponent,
    ImpressionComponent,
    VisitsComponent,
    VisitorvspageComponent,
    Donut1Component,
    Donut2Component,
    Donut3Component,
    Donut4Component,
    FinanceComponent,
    AccBalanceComponent,
    CryptoComponent,
    BitcoinComponent,
    ChatComponent,
    ChatlookComponent,
    ChattingareaComponent,
    SummaryComponent,
    AdminDashboardComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgIf,ReactiveFormsModule,
    BrowserAnimationsModule,FormsModule, NgChartsModule.forRoot(),MatFormFieldModule, MatInputModule, MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
