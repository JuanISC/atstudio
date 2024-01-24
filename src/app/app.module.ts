import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeComponent } from './recipes/recipe/recipe.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
<<<<<<< Updated upstream
import { InicioComponent } from './inicio/inicio.component';
import { CardComponent } from './card/card.component';
import { CardImgComponent } from './card-img/card-img.component';
// import { YouTubePlayerModule } from "@angular/youtube-player";
=======
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { CardImgComponent } from './card-img/card-img.component';
// import { YouTubePlayerModule } from "@angular/youtube-player";
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { CardImgCircleComponent } from './card-img-circle/card-img-circle.component';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './course/course.component';


>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    // RecipeComponent,
    // RecipeListComponent,
<<<<<<< Updated upstream
    InicioComponent,
    CardComponent,
    CardImgComponent
=======
    HomeComponent,
    CardComponent,
    CardImgComponent,
    AboutUsComponent,
    CardImgCircleComponent,
    FooterComponent,
    CourseComponent
    
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< Updated upstream
=======
     // AngularFireModule.initializeApp(environment.firebase),
     AngularFireAuthModule,
     AppRoutingModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
