import produce, { castDraft, castImmutable, Draft } from "immer"
import { useState } from "react"

type Dispatch<State> = (dispatch: (draft: Draft<State>) => void | State) => State
type ImmerStore<State> = [State, Dispatch<State>]

export function useImmer<S = any>(initialValue: S): ImmerStore<S> {
    const [state, updateState] = useState<S>(initialValue)
    const dispatch = (updater: (draft: Draft<S>) => void) => {
        const newState = produce(updater)(castImmutable(castDraft(state))) as S
        updateState(newState)
        return newState
    }

    return [state, dispatch]
}