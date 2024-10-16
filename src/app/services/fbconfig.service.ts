import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class FbconfigService {
  // generalInformation: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    // this.generalInformation = db.list('InformacionPersonal')
  }

  // loadInformation() {
  //   return this.generalInformation;
  // }

  getList<T>(listName: string): AngularFireList<T> {
    return this.db.list<T>(listName);
  }

  // Método para cargar información desde una lista
  loadInformation<T>(listName: string): AngularFireList<T> {
    return this.getList<T>(listName);
  }
}
