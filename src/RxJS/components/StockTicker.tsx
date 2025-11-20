import { useEffect, useState } from "react"
import { interval, map } from "rxjs";

export const StockTicker = () => {

    const [stock, setStock] = useState({
        symbol: 'BTC',
        price: 98000
    });

    console.log(stock)

    useEffect(() => {
        const stockStream = interval(1000)
        .pipe(map(() => ({
            symbol: 'BTC',
            price: Math.random()* 10000
        })));

        const subscription = stockStream.subscribe(setStock);

        return () => subscription.unsubscribe();
    }, []);
    
    return (
        <div>
            <h4>{stock.symbol}</h4>
            <p>{stock.price}$</p>
        </div>
    )
}