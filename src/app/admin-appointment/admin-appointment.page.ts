import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-admin-appointment',
  templateUrl: './admin-appointment.page.html',
  styleUrls: ['./admin-appointment.page.scss'],
})
export class AdminAppointmentPage implements OnInit {
  posts: any;
  constructor(
  private loadingCtrl: LoadingController,
  private toastCtrl: ToastController,
  private firestore: AngularFirestore
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
  this.getPosts();
  }
  async getPosts(){
  //show loader
  let loader = await this.loadingCtrl.create({
  message: "Please wait..."
  });
  loader.present();
  try {
  this.firestore
  .collection("appointment")
  .snapshotChanges()
  .subscribe(data => {
  this.posts = data.map(e => {
  return {
  id: e.payload.doc.id,
  name: e.payload.doc.data()["name"],
  email: e.payload.doc.data()["email"],
  number: e.payload.doc.data()["number"],
  doctor: e.payload.doc.data()["doctor"],
  notes: e.payload.doc.data()["notes"],
  date: e.payload.doc.data()["date"],
  time: e.payload.doc.data()["time"]
  };
  });
  loader.dismiss();
  });
 
  } catch(e){
  this.showToast(e);
  }
  }
  async deletePost(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();
  await this.firestore.doc("appointment/" + id).delete();
  //dismiss loader
  (await loader).dismiss();
  }
  showToast (message:string){
  this.toastCtrl.create({
  message: message,
  duration: 3000
  }).then(toastData => toastData.present());
  }
 }
 
