import { Injectable } from '@angular/core';
import { Database, get, push, ref, set, update } from '@angular/fire/database';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Firebasedbservice {

  constructor(private db: Database) {}

  getSystemId(): string {
    let systemId = localStorage.getItem('systemId');
    if (!systemId) {
      systemId = Math.random().toString(36).substring(2, 12);
      localStorage.setItem('systemId', systemId);
    }
    return systemId;
  }

  createChatroom(passkey: string, userName: string): Observable<void> {
    const systemId = this.getSystemId();
    const roomRef = ref(this.db, `chatrooms/${passkey}/members/${systemId}`);
    return from(set(roomRef, { name: userName, blocked: false }));
  }

  sendMessage(passkey: string, message: string): Observable<void> {
    const systemId = this.getSystemId();
    const messagesRef = push(ref(this.db, `chatrooms/${passkey}/messages`));
    return from(set(messagesRef, { sender: systemId, text: message }));
  }

  // Fetch Messages
  getMessages(passkey: string): Observable<any> {
    return from(get(ref(this.db, `chatrooms/${passkey}/messages`)));
  }

  // Remove a Member (Block them)
  blockMember(passkey: string, systemId: string): Observable<void> {
    return from(update(ref(this.db, `chatrooms/${passkey}/members/${systemId}`), { blocked: true }));
  }

  // Check if a User is Blocked
  isUserBlocked(passkey: string): Observable<boolean> {
    const systemId = this.getSystemId();
    return from(get(ref(this.db, `chatrooms/${passkey}/members/${systemId}`))).pipe(
      map(snapshot => snapshot.exists() && snapshot.val().blocked)
    );
  }

}
