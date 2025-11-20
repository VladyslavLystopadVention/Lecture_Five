import { catchError, fromEvent } from "rxjs";
import { debounceTime, map, distinctUntilChanged, switchMap } from "rxjs";

const searchBox = document.querySelector('.autocomplete--rxjs') as HTMLInputElement;

fromEvent(searchBox, 'input')
.pipe(
    map(event => (event.target as HTMLInputElement).value),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(category => fetch(`https://fakestoreapi.com/products?category=${category}`)
    .then(res => res.json()))
)
.subscribe(results => {
    /// а вот тут можно ререндерить 
    console.log(results)
})