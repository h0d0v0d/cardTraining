import { Variant } from '../../components/ui/typography'

export const getTag = (variant: Variant) => {
  if (/link_[12]/i.test(variant)) {
    return 'a'
  } else if (/h[123]/i.test(variant)) {
    return variant as 'h1' | 'h2' | 'h3'
  } else if (/body_[12]/i.test(variant)) {
    return 'p'
  } else {
    return 'span'
  }
}
