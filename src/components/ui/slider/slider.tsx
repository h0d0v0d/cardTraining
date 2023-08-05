import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

export const Slider = () => (
  <form>
    <SliderRadix.Root
      className={s.sliderRoot}
      defaultValue={[25, 75]}
      max={100}
      step={1}
      orientation={'horizontal'}
    >
      <SliderRadix.Track className={s.sliderTrack}>
        <SliderRadix.Range className={s.sliderRange} />
      </SliderRadix.Track>
      <SliderRadix.Thumb className={s.sliderThumb} />
      <SliderRadix.Thumb className={s.sliderThumb} />
    </SliderRadix.Root>
  </form>
)
