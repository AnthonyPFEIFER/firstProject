export class Article {
    id: number;
    titre: string;
    image: string;
    contenu: string;

    constructor(id = null, titre = null, image = null, contenu = null) {
        this.id = id;
        this.titre = titre;
        this.image = image;
        this.contenu = contenu;
    }
}
