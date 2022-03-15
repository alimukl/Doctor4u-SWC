import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController,AlertController, NavController, ToastController } from '@ionic/angular';
import { Appointment } from '../models/post.mode';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

appointment = {} as Appointment;
constructor(
 public alert: AlertController,
 private toastCtrl: ToastController,
 private loadingCtrl: LoadingController,
 private navCtrl: NavController,
 private firestore: AngularFirestore

  ) { }
  ngOnInit() {}
  async createAppointment(appointment: Appointment){
  if(this.formValidation()) {
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();
  try{
  await this.firestore.collection("appointment").add(appointment);
  this.showAlert("Thank you", "Your appointment has been booked")
  } catch(e){
  this.showToast(e);
  }
  //dismiss loader
  (await loader).dismiss();
  //redirect to home page
  this.navCtrl.navigateRoot("home");
  }
  }
 
  formValidation(){
   if(!this.appointment.name){
     this.showToast("Enter name");
     return false;
     }
     if(!this.appointment.email){
     this.showToast("Enter email");
     return false;
     }
     if(!this.appointment.number){
      this.showToast("Enter phone");
      return false;
      }
     if(!this.appointment.doctor){
     this.showToast("Enter doctor");
     return false;
     }
     if(!this.appointment.notes){
     this.showToast("Enter notes");
     return false;
     }
     if(!this.appointment.date){
      this.showToast("Enter date");
      return false;
    }
    if(!this.appointment.time){
      this.showToast("Enter time");
      return false;
    }
     return true;
     }

     async showAlert(header: string, message: string) {
      const alert = await this.alert.create({
        header,
        message,
        buttons: ["ok"]
      })
  
      await alert.present()
    }

     showToast (message:string){
     this.toastCtrl.create({
     message: message,
     duration: 3000
     })
     .then(toastData => toastData.present());
     }}

     
