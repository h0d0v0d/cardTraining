import { FC, memo } from 'react'

import { clsx } from 'clsx'

import { ArrowBack, ArrowForward } from '../../../assets/icons/components'
import { Select } from '../select'
import { Typography } from '../typography'

import s from './pagination.module.scss'
import { usePagination } from './usePagination.ts'

export const Pagination: FC<PaginationProps> = ({
  page,
  onChange,
  siblings = 1,
  count,
  onSelectChange,
  selectOptions,
  selectCurrent,
}) => {
  const {
    paginationRange,
    handlePreviousPageClicked,
    handleNextPageClicked,
    handleMainPageClicked,
  } = usePagination({
    page,
    count,
    onChange,
    siblings,
  })

  return (
    <div className={s.root}>
      <PrevButton onClick={handlePreviousPageClicked} disabled={page === 1} />
      <MainPaginationButtons
        currentPage={page}
        onClick={handleMainPageClicked}
        paginationRange={paginationRange}
      />
      <NextButton onClick={handleNextPageClicked} disabled={page === count} />
      <ShowOnPageSelect
        selectOptions={selectOptions}
        selectCurrent={selectCurrent}
        onSelectChange={onSelectChange}
      />
    </div>
  )
}
const MainPaginationButtons: FC<MainPaginationButtonsProps> = ({
  paginationRange,
  currentPage,
  onClick,
}) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} page={page} selected={isSelected} onClick={onClick} />
      })}
    </>
  )
}

const PageButton: FC<PageButtonProps> = memo(({ onClick, selected, page }) => {
  return (
    <button
      onClick={() => onClick(page)}
      className={clsx(s.pageBtn, selected && s.selected)}
      disabled={selected}
    >
      {page}
    </button>
  )
})

const PrevButton: FC<NavigationButtonProps> = memo(({ onClick, disabled }) => {
  return (
    <button className={s.navigationBtn} onClick={onClick} disabled={disabled}>
      <ArrowBack size={16} color={disabled ? 'var(--color-dark-100)' : ''} />
    </button>
  )
})

const NextButton: FC<NavigationButtonProps> = memo(({ onClick, disabled }) => {
  return (
    <button className={s.navigationBtn} onClick={onClick} disabled={disabled}>
      <ArrowForward size={16} color={disabled ? 'var(--color-dark-100)' : ''} />
    </button>
  )
})

const Dots: FC = () => {
  return <span className={s.dots}>&#8230;</span>
}

export const ShowOnPageSelect: FC<ShowOnPageSelectProps> = ({
  selectCurrent,
  selectOptions,
  onSelectChange,
}) => {
  return (
    <div className={s.selectBox}>
      <Typography variant={'Body_2'}>Показать</Typography>
      <Select
        selectCurrent={selectCurrent}
        onSelectChange={onSelectChange}
        selectOptions={selectOptions}
        className={'pagination'}
      />
      <Typography variant={'Body_2'}>на странице</Typography>
    </div>
  )
}

//types
export type ShowOnPageSelectProps = {
  selectCurrent: string
  selectOptions: string[]
  onSelectChange?: (item: string) => void
}
export type PaginationProps = {
  page: number //текущая страница
  onChange: (page: number) => void
  siblings?: number //кол-во сосендих отображаемых стр от текущей
  count: number //общее число старниц
} & ShowOnPageSelectProps

type MainPaginationButtonsProps = {
  paginationRange: (number | string)[]
  currentPage: number
  onClick: (pageNumber: number) => void
}

type NavigationButtonProps = {
  onClick: () => void
  disabled?: boolean
}
type PageButtonProps = {
  onClick: (pageNumber: number) => void
  page: number
  selected: boolean
}
