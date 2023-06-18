import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private namesCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.namesCollection = firestore.collection<any>('names');
   }

   addNameFire(name: string): void {
    const data = { name: name };
    this.namesCollection.add(data)
      .then(() => {
        console.log('Nume adăugat cu succes în baza de date.');
      })
      .catch((error) => {
        console.error('Eroare la adăugarea numelui în baza de date:', error);
      });
  }

  getNames(): Observable<any[]> {
    return this.namesCollection.valueChanges();
  }
}
