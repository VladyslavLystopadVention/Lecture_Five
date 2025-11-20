import { BehaviorSubject } from "rxjs";

export const deepState$ = new BehaviorSubject(false);

export const setDeepState = (newValue: boolean) => deepState$.next(newValue);
export const getDeepState = () => deepState$.asObservable();
