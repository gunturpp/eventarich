import { Injectable } from "@angular/core";
import {
  AngularFireAction,
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import * as firebase from "firebase";
import { Observable } from "rxjs/Observable";
import { retry } from "rxjs/operator/retry";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/switchMap";
@Injectable()
export class DataProvider {
  // Data Provider
  // This is the provider class for most of the Firebase observables in the app.
  public getusers: AngularFireList<any>;
  public getbyquery: BehaviorSubject<string | null>;
  public listbyquery: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  public Objects: AngularFireObject<any>;
  public items: Observable<any>;

  constructor(public angularfireDatabase: AngularFireDatabase) {
    this.getbyquery = new BehaviorSubject(null);
    console.log("Initializing Data Provider");
  }
  getUser(userId) {
    this.items = this.angularfireDatabase.object('/users/' + userId).valueChanges();
    return this.items;
  }
}