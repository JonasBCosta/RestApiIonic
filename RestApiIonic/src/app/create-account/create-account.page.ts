import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { UsersService } from './users.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage {

   model: User;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userService: UsersService) {
      this.model = new User();
      this.model.email = 'sydney@fife';
      this.model.password = 'pistol';
  }

  createAccount() {
    this.userService.createAccount(this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso. Token: '
        + result.token, position: 'bottom', duration: 3000}).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar o usuário. Erro: '
        + error.error, position: 'bottom', duration: 3000}).present();
      })
  }
  ngOnInit() {
  }

}
    export class User{
        email: string;
        password: string;
    }