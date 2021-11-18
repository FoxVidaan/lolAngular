import {Component} from '@angular/core';
import {Character} from "./models/Character";
import {LolService} from "./services/lol.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  characters: Character[] = [];
  isModal: boolean = false;

  constructor(private lolService: LolService) {
  }

  ngOnInit(): void {
    this.lolService.getCharacter();
    this.getCharacters();
  }

  activeModal = (): void => {

  }

  getCharacters = (): void => {
    this.lolService.characterStream.subscribe(
      data => {
        this.characters = data;
      },
      err => {
        console.error(err);
      }
    );
  }

  add = (character: string): void => {
    let newCharacter = new Character(character);

    this.lolService.addCharacter(newCharacter).subscribe(data => {
        this.lolService.getCharacter()
      },
      err => console.error(err)
    )

  }

  delete = (data: number): void => {
    this.lolService.deleteCharacter(data).subscribe(
      data => {
        this.lolService.getCharacter()
      },
      err => console.error(err)
    )
  }

  change = (data: Character): void => {
    this.lolService.changeState(data).subscribe(
      data => {
        this.lolService.getCharacter()
      },
      err => console.error(err)
    )
  }
}
