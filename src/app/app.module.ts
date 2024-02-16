import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/components/header/header/header.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeComponent } from './recipes/recipe/recipe.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { HomeComponent } from './modules/components/home/home.component';
import { CardComponent } from './modules/components/card/card.component';
import { CardImgComponent } from './modules/components/card-img/card-img.component';
// import { YouTubePlayerModule } from "@angular/youtube-player";
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AboutUsComponent } from './modules/components/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { CardImgCircleComponent } from './modules/components/card-img-circle/card-img-circle.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { CourseComponent } from './modules/components/course/course.component';
import { CourseDetailComponent } from './modules/components/course-detail/course-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Interceptor } from './modules/services/interceptor';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    HomeComponent,
    CardComponent,
    CardImgComponent,
    AboutUsComponent,
    CardImgCircleComponent,
    FooterComponent,
    CourseComponent,
    CourseDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
     // AngularFireModule.initializeApp(environment.firebase),
     AngularFireAuthModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     MatSlideToggleModule,
     MatTabsModule,
     HttpClientModule,
    //  VgCoreModule,
    //     VgControlsModule,
    //     VgOverlayPlayModule,
    //     VgBufferingModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
