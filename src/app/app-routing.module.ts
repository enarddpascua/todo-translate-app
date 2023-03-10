import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { TodoComponent } from "./todo/todo.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AuthguardService } from "./authguard.service";
import { GuestAuthguard } from "./guestAuthguard.service";
import { UserComponent } from "./user/user.component";


const routes: Routes = [
{path: '', component: WelcomeComponent},
{path: 'signup', component: SignupComponent, canActivate:[GuestAuthguard]},
{path: 'login', component: LoginComponent, canActivate:[GuestAuthguard]},
{path: 'todo', component: TodoComponent , canActivate:[AuthguardService]},
{path: 'user', component: UserComponent ,  canActivate:[AuthguardService]}
];

@NgModule({
    imports:[RouterModule.forRoot(routes, {useHash:true})],
    exports:[RouterModule]
})
export class AppRoutingModule{

}