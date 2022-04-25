export namespace ExpVideo {

  export enum AspectRatio {
    sixteenByNine = '16x9',
    fourByThree = '4x3',
    oneByOne = '1x1'
  }

  export interface Params {
    src: string;
    imageUrl: string;
    type: string;
    title: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
  }

  export class Model {
    src: string
    imageUrl: string
    type: string
    title: string
    autoplay: boolean
    loop: boolean
    muted: boolean
    controls: boolean

    constructor (params: Params) {
      this.src = params.src
      this.imageUrl = params.imageUrl
      this.type = params.type
      this.title = params.title

      if (params.autoplay === undefined) {
        this.autoplay = false
      } else {
        this.autoplay = params.autoplay
      }

      if (params.loop === undefined) {
        this.loop = false
      } else {
        this.loop = params.loop
      }

      if (params.muted === undefined) {
        this.muted = false
      } else {
        this.muted = params.muted
      }

      if (params.controls === undefined) {
        this.controls = true
      } else {
        this.controls = params.controls
      }
    }
  }

}
