import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.page.html',
  styleUrls: ['./admin-patient.page.scss'],
})
export class AdminPatientPage implements OnInit {
  posts: any;
  constructor(
  private loadingCtrl: LoadingController,
  private toastCtrl: ToastController,
  private firestore: AngularFirestore
  ) { }

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
  .collection("patient")
  .snapshotChanges()
  .subscribe(data => {
  this.posts = data.map(e => {
  return {
  id: e.payload.doc.id,
  name: e.payload.doc.data()["name"],
  email: e.payload.doc.data()["email"],
  phone: e.payload.doc.data()["phone"],
  address: e.payload.doc.data()["address"]
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
  await this.firestore.doc("patient/" + id).delete();
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
 
