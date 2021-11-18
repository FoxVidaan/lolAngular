import {Component} from '@angular/core';
import {Character} from "./models/Character";
import {LolService} from "./services/lol.service";
import {Notifications} from "./models/Notifications";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  characters: Character[] = [];
  notifications: Notifications[] = [];
  isModal: boolean = false;

  constructor(private lolService: LolService) {
  }

  ngOnInit(): void {
    this.lolService.getCharacter();
    this.getCharacters();
  }

  getCharacters = (): void => {
    this.lolService.characterStream.subscribe(
      data => {
        this.characters = data;
      },
      err => {
        this.notifications.push(new Notifications("Impossible de récupérer les personnages", "error"));
      }
    );
  }

  add = (character: string): void => {
    let newCharacter = new Character(character);

    this.lolService.addCharacter(newCharacter).subscribe(data => {
        this.lolService.getCharacter();
        this.notifications.push(new Notifications("Le personnage a été ajouté avec succès", "success"));
      },
      err => {
        this.notifications.push(new Notifications("Impossible de supprimer le personnage", "error"));
      }
    )
  }

  delete = (data: number): void => {
    this.lolService.deleteCharacter(data).subscribe(
      data => {
        this.lolService.getCharacter();
        this.notifications.push(new Notifications("Le personnage a été supprimé avec succès", "success"));
      },
      err => {
        this.notifications.push(new Notifications("Impossible de supprimer le personnage", "error"));
      }
    )
  }

  change = (data: Character): void => {
    this.lolService.changeState(data).subscribe(
      data => {
        this.lolService.getCharacter();
        this.notifications.push(new Notifications("Le status a été changé avec succès", "success"));
      },
      err => {
        this.notifications.push(new Notifications("Impossible de changer le status du personnage", "error"));
      }
    )
  }

  deleteNotifs = (index: number): void => {
    this.notifications.splice(index, 1);
  }
}
