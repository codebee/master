import ExpFooter from '@/components/ExpFooter/ExpFooter'
import { ExpAlignment } from '@/common/ExpAlignment'
import { ExpLocation } from '@/common/ExpLocation'
import { ExpLink } from '@/common/models/ExpLink'
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'ExpFooter',
  component: ExpFooter,
  decorators: [withA11y]
}

export const WithCanadaAndDefaultAlignment = () => ({
  components: { ExpFooter },
  template: `<exp-footer :country-code="country"></exp-footer>`,
  data: () => {
    return {
      country: ExpLocation.Country.ca
    }
  }
})

export const WithEuropeAndDefaultAlignment = () => ({
  components: { ExpFooter },
  template: '<exp-footer :country-code="country"></exp-footer>',
  data: () => {
    return {
      country: ExpLocation.Country.eu
    }
  }
})

export const WithEuropeAndDefaultAlignmentWithStubLayoutForCookieBanner = () => ({
  components: { ExpFooter },
  template: '<div><div style="height: 150px; background: #ccc;"></div><exp-footer :country-code="country"></exp-footer></div>',
  data: () => {
    return {
      country: ExpLocation.Country.eu
    }
  }
})

export const WithUSAAndDefaultAlignment = () => ({
  components: { ExpFooter },
  template: '<exp-footer :country-code="country"></exp-footer>',
  data: () => {
    return {
      country: ExpLocation.Country.us
    }
  }
})

export const WithUSAAndDefaultAlignmentAndCustomHeight = () => ({
  components: { ExpFooter },
  template: '<exp-footer :country-code="country" style="height: 150px;"></exp-footer>',
  data: () => {
    return {
      country: ExpLocation.Country.us
    }
  }
})

export const WithUSAAndLeftAlignment = () => ({
  components: { ExpFooter },
  template: '<exp-footer :country-code="country" :alignment="alignment"></exp-footer>',
  data: () => {
    return {
      country: ExpLocation.Country.us,
      alignment: ExpAlignment.Horizontal.left
    }
  }
})

export const WithUSAAndCenterAlignment = () => ({
  components: { ExpFooter },
  template: '<exp-footer :country-code="country" :alignment="alignment"></exp-footer>',
  data: () => {
    return {
      country: ExpLocation.Country.us,
      alignment: ExpAlignment.Horizontal.center
    }
  }
})

export const WithUSAAndRightAlignment = () => ({
  components: { ExpFooter },
  template: '<exp-footer :country-code="country" :alignment="alignment"></exp-footer>',
  data: () => {
    return {
      country: ExpLocation.Country.us,
      alignment: ExpAlignment.Horizontal.right
    }
  }
})

export const WithUSAAndDefaultAlignmentAndExtraLinks = () => ({
  components: { ExpFooter },
  template: '<exp-footer :country-code="country" :extra-links="extraLinks"></exp-footer>',
  data: () => {
    return {
      country: ExpLocation.Country.us,
      extraLinks: [
        new ExpLink.Model({
          url: 'https://www.example.com/one.html',
          title: 'Example one',
          target: '_blank'
        }),
        new ExpLink.Model({
          url: 'https://www.example.com/two.html',
          title: 'Example two',
          target: '_blank'
        })
      ]
    }
  }
})

export const WithUSAAndDefaultAlignmentAndCopyrightText = () => ({
  components: { ExpFooter },
  template: '<exp-footer :country-code="country" :copyright-text="copyrightText"></exp-footer>',
  data: () => {
    return {
      country: ExpLocation.Country.us,
      copyrightText: "© 2021 Expedia Inc an Expedia Group company. All Rights Reserved."
    }
  }
})

export const WithUSAAndDefaultAlignmentAndCustomLinks = () => ({
  components: { ExpFooter },
  template: '<exp-footer :country-code="country" :custom-links="customLinks"></exp-footer>',
  data: () => {
    return {
      country: ExpLocation.Country.us,
      customLinks: [
        new ExpLink.Model({
          url: 'https://www.example.com/one.html',
          title: 'Example one',
          target: '_blank'
        }),
        new ExpLink.Model({
          url: 'https://www.example.com/two.html',
          title: 'Example two',
          target: '_blank'
        })
      ]
    }
  }
})

export const WithUSAAndDefaultAlignmentAndCopyrightTextAndCustomLinks = () => ({
  components: { ExpFooter },
  template: '<exp-footer :country-code="country" :custom-links="customLinks" :copyright-text="copyrightText"></exp-footer>',
  data: () => {
    return {
      country: ExpLocation.Country.us,
      copyrightText: "© 2021 Expedia Inc an Expedia Group company. All Rights Reserved.",
      customLinks: [
        new ExpLink.Model({
          url: 'https://www.example.com/one.html',
          title: 'Example one',
          target: '_blank'
        }),
        new ExpLink.Model({
          url: 'https://www.example.com/two.html',
          title: 'Example two',
          target: '_blank'
        })
      ]
    }
  }
})