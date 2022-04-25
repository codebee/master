export namespace ExpLink {

    export enum Target {
        blank = '_blank',
        self = '_self',
        parent = '_parent',
        top = '_top'
    }

    export interface Params {
        url: string;
        title: string;
        target?: Target;
    }

    export class Model {
        url: string
        title: string
        target: Target

        constructor (params: Params) {
          this.url = params.url
          this.title = params.title

          if (params.target === undefined) {
            this.target = Target.self
          } else {
            this.target = params.target
          }
        }
    }

}
