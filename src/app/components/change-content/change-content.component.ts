import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { GetContentService } from 'src/app/services/get-content.service';

@Component({
  selector: 'change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent {
  newTitle = 'Este es el titulo modificado por otro componente';
  hasError = false;
  hasContent = false;

  constructor(private contentServ:ContentService, private service: GetContentService) { }

  changeTitle() {
    // Desarrollar el cuerpo del método / Develop the method body
    this.contentServ.changeTitle(this.newTitle)
  }

  callApi(){
    // Desarrollar el cuerpo del método / Develop the method body
    this.service.getContent().subscribe(res => {
      console.log(res)
      if (res[0] === 'Respuesta modificada por el servicio'){
        this.hasContent = true
      }else{
        this.hasError = true
      }
    })
  }
}
