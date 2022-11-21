import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  private title: BehaviorSubject<string> = new BehaviorSubject(
    'Este es el titulo'
  );

  private body: BehaviorSubject<string> = new BehaviorSubject(
    'Este es el contenido principal de la pagina'
  );

  private footer: BehaviorSubject<string> = new BehaviorSubject(
    'este es el footer '
  );

  private title$ = this.title.asObservable();
  private body$ = this.body.asObservable();
  private footer$ = this.footer.asObservable();

  getTitle() {
    return this.title$;
  }

  getBody() {
    return this.body$;
  }

  getFooter() {
    return this.footer$;
  }

  changeTitle(newTitle:string) {
    // Desarrollar el cuerpo del método / Develop the method body
    this.title.next(`${newTitle}`)
  }
}
