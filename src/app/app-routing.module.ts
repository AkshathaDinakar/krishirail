import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { UserDashboardComponent } from './Dashboard/user-dashboard/user-dashboard.component';
import { AuthGuardService } from './Login/authguard.service';
import { AnalyticsComponent } from './Dashboard/analytics/analytics.component';
import { FinanceComponent } from './Dashboard/finance/finance.component';
import { CryptoComponent } from './Dashboard/crypto/crypto.component';
import { AdminDashboardComponent } from './Dashboard/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard/admin-dashboard', pathMatch: 'full'},
  // {path: 'dashboard/project', component: UserDashboardComponent},
  {path: 'dashboard/admin-dashboard', component: AdminDashboardComponent},
  {path: 'dashboard/analytics', component: AnalyticsComponent},
  {path: 'dashboard/finance', component: FinanceComponent},
  {path :'dashboard/crypto', component: CryptoComponent},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
