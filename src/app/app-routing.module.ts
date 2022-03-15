import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'bmi',
    loadChildren: () => import('./bmi/bmi.module').then( m => m.BmiPageModule)
  },
  {
    path: 'pregnant',
    loadChildren: () => import('./pregnant/pregnant.module').then( m => m.PregnantPageModule)
  },
 
  {
    path: 'calender',
    loadChildren: () => import('./calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'doctorlist',
    loadChildren: () => import('./doctorlist/doctorlist.module').then( m => m.DoctorlistPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'allergists',
    loadChildren: () => import('./allergists/allergists.module').then( m => m.AllergistsPageModule)
  },
  {
    path: 'infectious',
    loadChildren: () => import('./infectious/infectious.module').then( m => m.InfectiousPageModule)
  },
  {
    path: 'cardiologists',
    loadChildren: () => import('./cardiologists/cardiologists.module').then( m => m.CardiologistsPageModule)
  },
  {
    path: 'endocrinologists',
    loadChildren: () => import('./endocrinologists/endocrinologists.module').then( m => m.EndocrinologistsPageModule)
  },
  {
    path: 'specialized-about',
    loadChildren: () => import('./specialized-about/specialized-about.module').then( m => m.SpecializedAboutPageModule)
  },
  {
    path: 'dermatologists',
    loadChildren: () => import('./dermatologists/dermatologists.module').then( m => m.DermatologistsPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'admin-appointment',
    loadChildren: () => import('./admin-appointment/admin-appointment.module').then( m => m.AdminAppointmentPageModule)
  },
  {
    path: 'edit-post/:id',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
  {
    path: 'add-appointment',
    loadChildren: () => import('./add-appointment/add-appointment.module').then( m => m.AddAppointmentPageModule)
  },
  {
    path: 'view-appointment',
    loadChildren: () => import('./view-appointment/view-appointment.module').then( m => m.ViewAppointmentPageModule)
  },
  {
    path: 'admin-patient',
    loadChildren: () => import('./admin-patient/admin-patient.module').then( m => m.AdminPatientPageModule)
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'ovulation-calender',
    loadChildren: () => import('./ovulation-calender/ovulation-calender.module').then( m => m.OvulationCalenderPageModule)
  },
  {
    path: 'admin-profile',
    loadChildren: () => import('./admin-profile/admin-profile.module').then( m => m.AdminProfilePageModule)
  },
  {
    path: 'edit-patient/:id',
    loadChildren: () => import('./edit-patient/edit-patient.module').then( m => m.EditPatientPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
