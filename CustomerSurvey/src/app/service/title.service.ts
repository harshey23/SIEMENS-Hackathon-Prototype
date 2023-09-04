import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private messageSource = new Subject<string>();
  private isToolbarVisible = new Subject<boolean>();;

  constructor() { }

  public getMessage(): Observable<string> {
    return this.messageSource.asObservable();
  }

  public setMessage(message: string) {
    return this.messageSource.next(message);
  }

  public getToolBarVisibility(): Observable<boolean> {
    return this.isToolbarVisible.asObservable();
  }

  public setToolbarVisibilty(isVisible: boolean) {
    return this.isToolbarVisible.next(isVisible);
  }

 
}
