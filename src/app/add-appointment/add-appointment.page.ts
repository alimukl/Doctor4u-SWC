import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Appointment } from '../models/post.mode';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.page.html',
  styleUrls: ['./add-appointment.page.scss'],
})
export class AddAppointmentPage implements OnInit {
  appointment = {} as Appointment;

  constructor(
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
  } catch(e){
  this.showToast(e);
  }
  //dismiss loader
  (await loader).dismiss();
  //redirect to home page
  this.navCtrl.navigateRoot("admin-appointment");
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
     showToast (message:string){
     this.toastCtrl.create({
     message: message,
     duration: 3000
     })
     .then(toastData => toastData.present());
     }}

