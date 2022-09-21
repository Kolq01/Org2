import { Component, OnInit } from '@angular/core';
import personasJson from 'src/assets/json/Personas.json';
import { INode } from 'ngx-org-chart/lib/node';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-org2',
  templateUrl: './org2.component.html',
  styleUrls: ['./org2.component.scss'],
})
export class Org2Component implements OnInit {
  users: any[] = [];
  relations: any[] = [];
  title = 'json-personas';
  orientacion = 'vertical';
  nodes: any = [];
  nodes1: INode[] = [];
  nodes2: INode[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://631114db19eb631f9d6ce17d.mockapi.io/api/v1/users')
      .subscribe((data: any) => {
        this.users = data;
        this.http
          .get('https://631114db19eb631f9d6ce17d.mockapi.io/api/v1/relations')
          .subscribe((data: any) => {
            this.relations = data;
            this.formatData();
          });
      });
  }

  formatData() {
    this.relations.forEach((element) => {
      console.log(element);
      const f = this.users.filter((user: any) => user.id == element.idUser);
      element.dependsOn.forEach((element1: INode) => {
        const f = this.users.filter((user: any) => user.id == element1);
        console.log(f[0]);
        this.nodes2.push({
          image: f[0].image,
          name: f[0].name,
          cssClass: f[0].cssClass,
          title: f[0].title,
          telefono: f[0].telefono,
          oficina: f[0].oficina,
          childs: [],
        });
      });
      console.log(this.nodes2);
      this.nodes1.push({
        image: f[0].image,
        name: f[0].name,
        cssClass: f[0].cssClass,
        title: f[0].title,
        telefono: f[0].telefono,
        oficina: f[0].oficina,
        childs: this.nodes2,
      });
      this.nodes2 = [];
    });
    console.log(this.nodes1);
  }

  change() {
    if (this.orientacion == 'vertical') {
      this.orientacion = 'horizontal';
    } else {
      this.orientacion = 'vertical';
    }
  }

  test(e: INode) {
    console.log(e);
    Swal.fire({
      title: e.name,
      text: e.title,
      imageUrl: e.image,
      html:
        `<div><b> Puesto: ${e.title} </b></div>` +
        `<div><b> Telefono: ${e.telefono} </b></div>` +
        `<div><b> Oficina: ${e.oficina} </b></div>`,
      imageWidth: 640,
      imageHeight: 400,
    });
  }
}
