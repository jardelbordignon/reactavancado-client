type ImageAttributes = {
  url: string
  alternativeText: string
}

export type LogoType = {
  data: {
    attributes: ImageAttributes
  }
}

export type HeaderType = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  media: {
    data: {
      attributes: ImageAttributes
    }
  }
}

export type SectionAboutProjectType = {
  title: string
  description: string
  media: {
    data: {
      attributes: ImageAttributes
    }
  }
}

type TechIcon = {
  title: string
  icon: {
    data: {
      attributes: ImageAttributes
    }
  }
}

export type SectionTechType = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsType = {
  title: string
  concepts: {
    title: string
  }[]
}

export type SectionModulesType = {
  title: string
  modules: {
    title: string
    subtitle: string
    description: string
  }[]
}

export type SectionAgendaType = {
  title: string
  description: string
}

export type PricingBoxType = {
  totalPrice: number
  installmentsQuantity: number
  installmentPrice: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

type AuthorType = {
  attributes: {
    name: string
    role: string
    socialLinks: [
      {
        title: string
        url: string
      }
    ]
    avatar: {
      data: {
        attributes: ImageAttributes
      }
    }
    description: string
  }
}

export type SectionAboutUsType = {
  title: string
  authors: {
    data: [
      {
        attributes: {
          name: string
          role: string
          socialLinks: {
            title: string
            url: string
          }[]
          avatar: {
            data: {
              attributes: ImageAttributes
            }
          }
          description: string
        }
      }
    ]
  }
}

export type SectionReviewsType = {
  title: string
  reviews: {
    avatar: {
      data: {
        attributes: ImageAttributes
      }
    }
    name: string
    text: string
  }[]
}

export type SectionFaqType = {
  title: string
  questions: {
    answer: string
    question: string
  }[]
}

export type LandingPageType = {
  landingPage: {
    data: {
      attributes: {
        logo: LogoType
        header: HeaderType
        sectionAboutProject: SectionAboutProjectType
        sectionTech: SectionTechType
        sectionConcepts: SectionConceptsType
        sectionModules: SectionModulesType
        sectionAgenda: SectionAgendaType
        pricingBox: PricingBoxType
        sectionAboutUs: SectionAboutUsType
        sectionReviews: SectionReviewsType
        sectionFaq: SectionFaqType
      }
    }
  }
}
