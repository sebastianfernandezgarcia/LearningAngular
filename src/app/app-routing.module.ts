import  {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SebastianComponent} from "./pages/sebastian/sebastian.component";


const routes: Routes = [
  { path: 'sebastian', component: SebastianComponent},
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: '**', redirectTo: '/sebastian'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
