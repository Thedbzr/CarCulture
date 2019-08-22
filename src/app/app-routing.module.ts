import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'first', loadChildren: './pages/first/first.module#FirstPageModule' },
  { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
  { path: 'third', loadChildren: './pages/third/third.module#ThirdPageModule' },
  { path: 'fourth', loadChildren: './pages/fourth/fourth.module#FourthPageModule' },
  { path: 'fifth', loadChildren: './pages/fifth/fifth.module#FifthPageModule' },
  { path: 'sixth', loadChildren: './pages/sixth/sixth.module#SixthPageModule' },
  { path: 'seventh', loadChildren: './pages/seventh/seventh.module#SeventhPageModule' },
  { path: 'eigth', loadChildren: './pages/eigth/eigth.module#EigthPageModule' },
  { path: 'ninth', loadChildren: './pages/ninth/ninth.module#NinthPageModule' },
  { path: 'tenth', loadChildren: './pages/tenth/tenth.module#TenthPageModule' },
  { path: 'eleventh', loadChildren: './pages/eleventh/eleventh.module#EleventhPageModule' },
  { path: 'twelfth', loadChildren: './pages/twelfth/twelfth.module#TwelfthPageModule' },
  { path: 'thirteenth', loadChildren: './pages/thirteenth/thirteenth.module#ThirteenthPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
