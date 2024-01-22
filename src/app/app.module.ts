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
import { InicioComponent } from './inicio/inicio.component';
import { CardComponent } from './card/card.component';
import { CardImgComponent } from './card-img/card-img.component';
// import { YouTubePlayerModule } from "@angular/youtube-player";

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
    InicioComponent,
    CardComponent,
    CardImgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }