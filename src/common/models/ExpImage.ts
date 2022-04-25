export namespace ExpImage {

    export interface Params {
        src: string;
        title: string;
    }

    export class Model {
        src: string
        title: string

        constructor (params: Params) {
          this.src = params.src
          this.title = params.title
        }

        get alt (): string {
          return this.title
        }
    }

}
