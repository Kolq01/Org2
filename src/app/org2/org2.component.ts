import { Component, OnInit } from '@angular/core';
import personasJson from 'src/assets/json/Personas.json';
import { INode } from 'ngx-org-chart/lib/node';

@Component({
  selector: 'app-org2',
  templateUrl: './org2.component.html',
  styleUrls: ['./org2.component.scss'],
})
export class Org2Component{
  title="json-personas"
/*
  Personas: any = personasJson;

  function person(id, name, cssClass, title, childs, depende) {
    this.id = id;
    this.name = name;
    this.cssClass = cssClass;
    this.title = title;
    this.childs = childs;
    this.depende
  }

  let organigrama: any[] = [];

  personasJson.array.forEach(hijo => {
    if(hijo.depende == undefined){
      organigrama.push(new persona =>{
        persona.childs.push(new Person(hijo.id, hijo.nombre, '', hijo.rol, [], hijo.depende))
      })
    }else{
      organigrama[0].childs.array.forEach(persona => {
        if(hijo.depende == persona.id){
          persona.childs.push(new Person(hijo.id, hijo.nombre, '', hijo.rol, [], hijo.depende))
        }
      });
    }
  });

console.log(organigrama)
*/
}