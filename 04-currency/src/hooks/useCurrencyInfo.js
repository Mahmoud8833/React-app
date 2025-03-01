import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {
        const fetchCurrencyInfo = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data && data.rates) {
                    setCurrencyInfo(data.rates);
                } else {
                    console.error('Invalid data structure:', data);
                    setCurrencyInfo({});
                }
            } catch (error) {
                console.error('Error fetching currency information:', error);
                setCurrencyInfo({});
            }
        };

        if (currency) {
            fetchCurrencyInfo();
        }
    }, [currency]);

    console.log(currencyInfo);
    
    return currencyInfo;
};

export default useCurrencyInfo;