import { Component, OnInit } from '@angular/core';

import { MuseumService } from 'src/app/services/museum/museum.service';
// Import uniqueobject.model

@Component({
  selector: 'app-museumitems',
  templateUrl: './museumitems.component.html',
  styleUrls: ['./museumitems.component.scss']
})
export class MuseumitemsComponent implements OnInit {

  allItemsListGeneral: any[] = [];

  constructor(
    public museumService: MuseumService
  ) { }

  ngOnInit(): void {
    this.museumService.GetAllItems().subscribe((almacenaje) => {
      // this.allItemsListGeneral.push({...almacenaje});
      let simplificar = JSON.stringify(almacenaje);
      let obtenerListaSimple = JSON.parse(simplificar);
      let listaOficial = obtenerListaSimple.objectIDs;

      console.log(listaOficial);

      listaOficial.forEach(element => {
        this.museumService.GetItemId(element).subscribe((item) => {
          this.allItemsListGeneral.push(item);
        }, (error) => {
          console.log("Error obteniendo el item: ", error);
        });
      });

      console.log("Lista de items", this.allItemsListGeneral);
      
    }, (err) => {
      console.log("Error in: ", err);
    });
  }

}