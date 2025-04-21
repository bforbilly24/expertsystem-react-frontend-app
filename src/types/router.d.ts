import { NavigateFunction, Location } from '@tanstack/react-router'

declare module '@tanstack/react-router' {
  interface Register {
    state: ResultRouteState
  }

  export function useNavigate(): NavigateFunction
  export function useLocation<TState>(): Location<TState>
}

interface ResultRouteState {
  answers: number[]
  result: string
}

export type { ResultRouteState }
