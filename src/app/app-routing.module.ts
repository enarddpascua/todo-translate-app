import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { TodoComponent } from "./todo/todo.component";
import { WelcomeComponent } from "./welcome/welcome.component";


const routes: Routes = [
{path: '', component: WelcomeComponent},
{path: 'signup', component: SignupComponent},
{path: 'login', component: LoginComponent},
{path: 'todo', component: TodoComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}