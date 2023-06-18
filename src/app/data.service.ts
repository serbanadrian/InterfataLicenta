import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // constructor(private db: AngularFireDatabase) {}

  // saveName(name: string): Promise<void> {
  //   const nameRef = this.db.list('names');
  //   return nameRef.push({ name });
  // }
  // getNames(): Observable<any[]> {
  //   return this.db.list('names').valueChanges();
  // }
}
