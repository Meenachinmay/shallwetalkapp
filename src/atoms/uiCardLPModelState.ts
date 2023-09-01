import { atom } from 'recoil'

export interface UICardLPModelState {
    open: boolean,
}

const defaultState: UICardLPModelState = {
    open: false,
}

export const uiCardLPModelState = atom<UICardLPModelState>({
    key: "uiCardLPModelState",
    default: defaultState
})
