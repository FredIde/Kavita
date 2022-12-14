export enum LibraryType {
    Manga = 0,
    Comic = 1,
    Book = 2,
}

export interface Library {
    id: number;
    name: string;
    lastScanned: string;
    type: LibraryType;
    folders: string[];
}