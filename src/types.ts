export type VendorsDataType = {
  gvlSpecificationVersion: number
  vendorListVersion: number
  tcfPolicyVersion: number
  lastUpdated: string
  purposes: SpecialFeatureType
  specialPurposes: SpecialFeatureType
  features: SpecialFeatureType
  specialFeatures: SpecialFeatureType
  stacks: StackType
  vendors: VendorsType
}

type SpecialFeatureType = {
  [key: string]: {
    id: number
    name: string
    description: string
    descriptionLegal: string
  }
}

type StackType = {
  [key: string]: {
    id: number
    purposes: []
    specialFeatures: CommonType
    name: string
    description: string
  }
}

type VendorsType = {
  [key: string]: VendorType
}

export type VendorType = {
  id: number
  name: string
  purposes: CommonType
  legIntPurposes: []
  flexiblePurposes: CommonType
  specialPurposes: CommonType
  features: CommonType
  specialFeatures: []
  policyUrl: string
  cookieMaxAgeSeconds: number
  usesCookies: boolean
  usesNonCookieAccess: boolean
}

type CommonType = { [key: string]: number }
