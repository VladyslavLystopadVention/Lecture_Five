import { BehaviorSubject } from "rxjs";

const toggleOn$ = new BehaviorSubject(false);

export const setToggleOn = () => toggleOn$.next(toggleOn$.value);
export const getToggleOn = () => toggleOn$.asObservable();
