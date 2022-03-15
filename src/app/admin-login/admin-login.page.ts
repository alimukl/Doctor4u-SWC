import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Admin } from '../models/admin.mode';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {
  admin = {} as Admin;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) { }

  ngOnInit() {}
  async loginAdmin(admin: Admin) {
    if(this.formValidation()) {
      //show loader
      let loader = this.loadingCtrl.create({
        message: "Please wait..."
      });
      (await loader).present();
      
      try {
        if(admin.username == 'admin' && admin.password == 'admin') {
          //redirect to home page
          this.navCtrl.navigateRoot("admin-home");
        } else {
          this.showToast("invalid user");
        }
    
      } catch (e) {
        this.showToast(e);
      }
     
      //dismis loader
      (await loader).dismiss();
      }
  }

  formValidation(){
    if(!this.admin.username){
      this.showToast("Enter username");
      return false;
    }
 
    if(!this.admin.password){
      this.showToast("Enter password");
      return false;
    }
 
    return true;
  }
  
 
  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

}