import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvComponent } from './tv/tv.component';


const routes: Routes = [
  {path : "",  component : LoginComponent},
  {path : "home",canActivate :[AuthGuard], component : HomeComponent},
  {path : "about",canActivate :[AuthGuard], component : AboutComponent},
  {path : "movies",canActivate :[AuthGuard], component : MoviesComponent},
  {path : "moviesDetails/:id",canActivate :[AuthGuard], component : MoviesDetailsComponent},
  {path : "tv" ,canActivate :[AuthGuard], component : TvComponent},
  {path : "people" ,canActivate :[AuthGuard], component : PeopleComponent},
  {path : "network" ,canActivate :[AuthGuard], component : NetworkComponent},
  {path : "register", component : RegisterComponent},
  {path : "tvDetails/:id", component : TvDetailsComponent},
  {path : "peopleDetails/:id", component : PeopleDetailsComponent},
  {path : "login", component : LoginComponent},
  {path : "**" , component : NotFoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
