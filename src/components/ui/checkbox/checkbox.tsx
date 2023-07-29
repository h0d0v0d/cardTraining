import s from './checkbox.module.scss'
import { Check } from './Property 1=Default Selected.svg'

export type CheckboxProps = {
  className?: string
  id: string
  label?: string
  isChecked?: boolean
  onChange?: (event: any) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled,
  required,
  label,
  id,
}) => {
  }
  return (
    <label htmlFor={id} className={"checkbox"}>
      <span className={"checkbox-inner"}></span>
      <Check />
    </label>
  )
}
