import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { GithubAuthProvider } from 'firebase/auth'
import { from, tap } from 'rxjs';
import { posts } from 'src/app/feed/models/posts';
import { user } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersCollection = this.store.collection<user>('users')

  constructor(
    private authentication: AngularFireAuth,
    private store: AngularFirestore

  ) { }

  get currentUser() {
    return this.authentication.authState
  }
  signInWithGitHub() {
    const githubProvider = new GithubAuthProvider()

    return from(this.authentication.signInWithPopup(githubProvider))
      .pipe(
        tap((credentials) => {

          const uid = credentials.user?.uid as string
          const name = credentials.user?.displayName as string
          const username = credentials.additionalUserInfo?.username as string
          const photoURL = credentials.user?.photoURL as string
          const email = credentials.user?.email as string
          const bio: string = ''
          const posts: posts[] = []

          this.usersCollection.doc(uid).set({
            uid: uid,
            username: username,
            name: name,
            bio: bio,
            email: email,
            photoURL: photoURL,
            posts: posts,
          })
        })
      )
  }

  signOut() {
    this.authentication.signOut()
  }
}
