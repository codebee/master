import ButtonLinkView from '@/components/ExpButtonLink/ExpButtonLink.vue'
import LinkableImageView from '@/components/ExpLinkableImage/ExpLinkableImage.vue'
import FooterView from '@/components/ExpFooter/ExpFooter.vue'
import HeroView from '@/components/ExpHero/ExpHero.vue'
import NavbarView from '@/components/ExpNavbar/ExpNavbar.vue'
import SocialMetaView from '@/components/ExpSocialMeta/ExpSocialMeta.vue'
import SocialSharerView from '@/components/ExpSocialSharer/ExpSocialSharer.vue'
import VideoView from '@/components/ExpVideo/ExpVideo.vue'
import { ExpAlignment as AlignmentNamespace } from '@/common/ExpAlignment'
import { ExpImage as ImageNamespace } from '@/common/models/ExpImage'
import { ExpLink as LinkNamespace } from '@/common/models/ExpLink'
import { ExpLinkableImage as LinkableImageNamespace } from '@/common/models/ExpLinkableImage'
import { ExpLocation as LocationNamespace } from '@/common/ExpLocation'
import { ExpSocialSharer as SocialSharerNamespace } from '@/components/ExpSocialSharer/ExpSocialSharer.ts'
import { ExpVideo as VideoNamespace } from '@/common/models/ExpVideo'

const Alignment = {
  Horizontal: AlignmentNamespace.Horizontal
}
const ButtonLink = {
  View: ButtonLinkView
}
const Image = {
  Model: ImageNamespace.Model
}
const Footer = {
  View: FooterView
}
const Hero = {
  View: HeroView
}
const Link = {
  Model: LinkNamespace.Model,
  Target: LinkNamespace.Target
}
const LinkableImage = {
  View: LinkableImageView,
  Model: LinkableImageNamespace.Model
}
const Location = {
  Country: LocationNamespace.Country
}
const Navbar = {
  View: NavbarView
}
const SocialMeta = {
  View: SocialMetaView
}
const SocialSharer = {
  View: SocialSharerView,
  Model: SocialSharerNamespace.Model,
  Platform: SocialSharerNamespace.Platform
}
const Video = {
  View: VideoView,
  Model: VideoNamespace.Model,
  AspectRatio: VideoNamespace.AspectRatio
}

export { Alignment }
export { ButtonLink }
export { Image }
export { Footer }
export { Hero }
export { Link }
export { LinkableImage }
export { Location }
export { Navbar }
export { SocialMeta }
export { SocialSharer }
export { Video }

export default {
  Alignment,
  ButtonLink,
  Image,
  Footer,
  Hero,
  Link,
  LinkableImage,
  Location,
  Navbar,
  SocialMeta,
  SocialSharer,
  Video
}
