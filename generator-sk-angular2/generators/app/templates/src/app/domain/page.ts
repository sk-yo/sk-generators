/**
 * Classe de Page para chamada de endpoints rest (SpringBoot) com paginação.
 */
export class Page<T> {
    last: boolean;
    totalElements: number;
    totalPages: number;
    sort: string;
    first: boolean;
    numberOfElements: number;
    size: number;
    number: number;
    content: T[] = [];
}
