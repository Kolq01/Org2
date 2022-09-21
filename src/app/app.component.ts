import { Component } from '@angular/core';
import { INode } from 'ngx-org-chart/lib/node';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'org2';
  orientacion="vertical"
  nodes: any = []

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.http.get("https://631114db19eb631f9d6ce17d.mockapi.io/api/v1/users").subscribe((data:any)=>{
     this.nodes= data
     this.spinner.hide()
    })
  }

  test(e:INode){
    console.log(e);
    Swal.fire({
      title: e.name,
      text: e.title,
      imageUrl: e.image,
      html:
      `<div><b> Puesto: ${e.title} </b></div>`+
      `<div><b> Telefono: ${e.telefono} </b></div>`+
      `<div><b> Oficina: ${e.oficina} </b></div>`,
      imageWidth:640,
      imageHeight:400
    })
  }


  change(){
    if(this.orientacion=="vertical"){
      this.orientacion= "horizontal"
    }else{
      this.orientacion="vertical"
    }
  }

}
