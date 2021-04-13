import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: 'AIzaSyAReIfC3I0ovui0RoOUazbD87XDv2-_9TA',
  authDomain: 'sofkachat-team-5ee74.firebaseapp.com',
  projectId: 'sofkachat-team-5ee74',
  storageBucket: 'sofkachat-team-5ee74.appspot.com',
  messagingSenderId: '82160573604',
  appId: '1:82160573604:web:cdd3dfd08356851b9b9a31'
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
