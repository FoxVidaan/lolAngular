export class Character {
  id: number;
  key?: string;
  title: string;
  name?: string;
  tags?: string[];
  active: boolean = true;

  constructor(title: string, key?: string, name?: string, tags?: string[], active?: boolean) {
    this.title = title;
    this.id = 0;

    if (key) {
      this.key = key;
    }

    if (name) {
      this.name = name;
    }

    if (tags) {
      this.tags = tags;
    }

    if (active) {
      this.active = active;
    }
  }
}
