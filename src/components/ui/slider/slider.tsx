import { FC, useState } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography, Variant } from '@/components/ui'

export type SliderProps = {
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  value?: number[]
  onValueChange?: (value: number[]) => void
  disabled?: boolean
  id?: string
  variantTypography?: Variant
}

export const Slider: FC<SliderProps> = ({
  defaultValue = [10, 75],
  min = 0,
  max = 100,
  step = 1,
  value,
  onValueChange,
  disabled = false,
  id,
  variantTypography,
}) => {
  const [ControlledValue, SetControlledValue] = useState<number[]>(defaultValue)

  return (
    <form>
      <div className={s.container}>
        <div className={s.boxSlider}>
          <Typography
            variant={variantTypography ? variantTypography : 'Body_2'}
            color={disabled ? 'var(--color-dark-100, #808080)' : ''}
          >
            {value ? value[0].toString() : ControlledValue[0].toString()}
          </Typography>
        </div>
        <SliderRadix.Root
          className={s.sliderRoot}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          id={id}
          value={value ? value : ControlledValue}
          onValueChange={onValueChange ? onValueChange : SetControlledValue}
        >
          <SliderRadix.Track className={s.sliderTrack}>
            <SliderRadix.Range className={disabled ? s.disabledRange : s.sliderRange} />
          </SliderRadix.Track>
          <SliderRadix.Thumb className={disabled ? s.disabledThumb : s.sliderThumb} />
          <SliderRadix.Thumb className={disabled ? s.disabledThumb : s.sliderThumb} />
        </SliderRadix.Root>
        <div className={s.boxSlider}>
          <Typography
            variant={variantTypography ? variantTypography : 'Body_2'}
            color={disabled ? 'var(--color-dark-100, #808080)' : ''}
          >
            {value ? value[1].toString() : ControlledValue[1].toString()}
          </Typography>
        </div>
      </div>
    </form>
  )
}
