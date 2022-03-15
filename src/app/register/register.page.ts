import { Component, OnInit } from '@angular/core';
  import { AngularFireAuth } from '@angular/fire/compat/auth';
  import { AngularFirestore} from '@angular/fire/compat/firestore';
  import { 
    LoadingController,
    NavController,
    ToastController } from '@ionic/angular';
  import { User } from '../models/user.mode';

  @Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
  })
  export class RegisterPage implements OnInit {
    user = {} as User;

    constructor(
      private toastCtrl: ToastController,
      private loadingCtrl: LoadingController,
      private afAuth: AngularFireAuth,
      private firestore: AngularFirestore,
      private navCtrl: NavController
    ) { }

    ngOnInit() {}

    async register(user: User){
          if(this.formValidation()){
            //show loader
            let loader = this.loadingCtrl.create({
              message:"Please wait..."
            });
            (await loader).present();
            try{
              
              await this.afAuth
              .createUserWithEmailAndPassword(user.email, user.password)
              .then(data =>
                console.log(data));
                //redirect to home page
                this.navCtrl.navigateRoot("login");
            } catch(e){
              this.showToast(e);
            }

            try{
              await this.firestore.collection("patient").add(user);
            } catch(e){
              this.showToast(e);
            }
            
            //dismiss loader
            (await loader).dismiss();
          }
        }
        formValidation(){
          if(!this.user.email){
            this.showToast("Enter email");
            return false;
          }
          if(!this.user.password){
            this.showToast("Enter password");
            return false;
          }
          if(!this.user.name){
            this.showToast("Enter name");
            return false;
          }
          if(!this.user.phone){
            this.showToast("Enter phone");
            return false;
          }
          if(!this.user.address){
            this.showToast("Enter address");
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