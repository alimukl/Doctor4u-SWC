import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Appointment } from 'src/app/models/post.mode';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {
  post = {} as Appointment;
  id: any;
  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string){
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();
   
    this.firestore.doc("appointment/" + id)
    .valueChanges()
    .subscribe(data => {
      this.post.name = data["name"];
      this.post.email = data["email"];
      this.post.number = data["number"];
      this.post.doctor = data["doctor"];
      this.post.notes = data["notes"];
      this.post.date = data["date"];
      this.post.time = data["time"];
    });
    //dismiss loader
    (await loader).dismiss();
    }
   
    async updatePost(post: Appointment){
      if(this.formValidation()) {
        //show loader
        let loader = this.loadingCtrl.create({
        message: "Please wait..."
        });
        (await loader).present();
    
        try{
         
          await this.firestore.doc("appointment/" + this.id).update(post);
        } catch(e){
          this.showToast(e);
        }
        //dismiss loader
        (await loader).dismiss();
    
        //redirect to view post page
        this.navCtrl.navigateRoot("admin-appointment");
        }
    }
   
    formValidation(){
      if(!this.post.name){
        this.showToast("Enter name");
        return false;
      }
   
      if(!this.post.email){
        this.showToast("Enter email");
        return false;
      }
   
      if(!this.post.doctor){
        this.showToast("Enter doctor");
        return false;
      }
   
      if(!this.post.notes){
        this.showToast("Enter notes");
        return false;
      }

      if(!this.post.date){
        this.showToast("Enter date");
        return false;
      }

      if(!this.post.time){
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
    }
  }
