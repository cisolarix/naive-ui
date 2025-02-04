import { SelectGroupOption, SelectBaseOption } from '../../select/src/interface'

export type AutoCompleteOption = SelectBaseOption<string, string>
export interface AutoCompleteGroupOption
  extends Omit<SelectGroupOption, 'children'> {
  children: string[]
}

export type AutoCompleteOptions = Array<
AutoCompleteOption | AutoCompleteGroupOption | string
>

export type OnUpdateValue = (value: string & (string | null)) => void
export type OnUpdateImpl = (value: string | null) => void
export type OnSelect = (value: string | number) => void
