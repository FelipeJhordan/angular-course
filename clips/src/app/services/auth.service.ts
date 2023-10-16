import { Injectable } from '@angular/core';
import {
  AngularFireAuth
} from '@angular/fire/compat/auth'
import { Observable, delay, map } from 'rxjs';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore'
import { IUser } from '../models/user.model';
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersCollection:   AngularFirestoreCollection<Omit<IUser, 'password'>>
  public isAuthenticated$: Observable<boolean>
  public isAuthenticatedWithDelay$: Observable<boolean>

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { 
    this.usersCollection = firestore.collection('users')
    this.isAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    )

    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
      delay(1000)
    )
  }

  public async createUser(userData: IUser) {
    if(!userData.password) {
      throw new Error("Password not provided!")
    }

    const { email, password, name, age, phoneNumber} = userData
    const userCredential = await this.auth.createUserWithEmailAndPassword(
      email as string, password as string) 

      if(!userCredential.user) {
        throw new Error('User can´t be found')
      }

      await this.usersCollection.doc(userCredential.user?.uid).set(
        {
          name: name,
          email: email,
          age: age,
          phoneNumber: phoneNumber
        }
      )

      await userCredential.user.updateProfile({
        displayName: name 
      })
  }
}
