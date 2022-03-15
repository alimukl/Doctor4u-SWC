import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user.mode';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.page.html',
  styleUrls: ['./edit-patient.page.scss'],
})
export class EditPatientPage implements OnInit {

  post = {} as User;
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
   
    this.firestore.doc("patient/" + id)
    .valueChanges()
    .subscribe(data => {
      this.post.name = data["name"];
      this.post.email = data["email"];
      this.post.phone = data["phone"];
      this.post.address = data["address"];
    });
    //dismiss loader
    (await loader).dismiss();
    }
   
    async updatePost(post: User){
      if(this.formValidation()) {
        //show loader
        let loader = this.loadingCtrl.create({
        message: "Please wait..."
        });
        (await loader).present();
    
        try{
         
          await this.firestore.doc("patient/" + this.id).update(post);
        } catch(e){
          this.showToast(e);
        }
        //dismiss loader
        (await loader).dismiss();
    
        //redirect to view post page
        this.navCtrl.navigateRoot("admin-patient");
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
   
      if(!this.post.phone){
        this.showToast("Enter phone");
        return false;
      }
   
      if(!this.post.address){
        this.showToast("Enter address");
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

