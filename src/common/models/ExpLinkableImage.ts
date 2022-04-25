import { ExpImage } from '@/common/models/ExpImage.ts'
import { ExpLink } from '@/common/models/ExpLink.ts'

export namespace ExpLinkableImage {

  export interface Params {
    image: ExpImage.Model;
    link?: ExpLink.Model;
  }

  export class Model {
    image: ExpImage.Model
    link: ExpLink.Model | null

    constructor (params: Params) {
      this.image = params.image

      if (params.link === undefined) {
        this.link = null
      } else {
        this.link = params.link
      }
    }
  }

}
