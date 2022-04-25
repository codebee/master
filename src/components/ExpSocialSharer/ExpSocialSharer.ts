import { ExpImage } from '@/common/models/ExpImage.ts'

export namespace ExpSocialSharer {

  export enum Platform {
    facebook = 'Facebook',
    twitter = 'Twitter',
    email = 'Email'
  }

  export interface Params {
    platform: Platform;
    image?: ExpImage.Model;
  }

  export class Model {
    platform: Platform
    image: ExpImage.Model | null

    constructor (params: Params) {
      this.platform = params.platform

      if (params.image === undefined) {
        this.image = null
      } else {
        this.image = params.image
      }
    }
  }

}
