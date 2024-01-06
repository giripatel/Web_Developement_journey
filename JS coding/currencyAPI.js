let currency = "usd"
function useCurrencyInfo(currency){
    // const [data, setData] = useState(0);

    // useEffect(()=>{

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {

        // console.log(res[currency]);
        console.log(res);
    }
        )
    // },[currency])

}
useCurrencyInfo(currency);