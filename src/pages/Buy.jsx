import { useState, useRef } from 'react';
import Navbar from "../components/Navbar";
import logo from "../asset/logo.svg";
import email from "../asset/email.png";
import swap from "../asset/swap.png";

const Buy = () => {
    const [selectedEquity, setSelectedEquity] = useState('OA Tesla');
    const [selectedCurrency, setSelectedCurrency] = useState('OPEN APP');
    const [displayEquity, setDisplayEquity] = useState(selectedEquity);
    const [displayCurrency, setDisplayCurrency] = useState(selectedCurrency);
    const [amount, setAmount] = useState('1000'); // Changed to include setter function
    const [equityOptions, setEquityOptions] = useState(['OA Tesla', 'OA Apple', 'OA Amazon', 'OA Google']);
    const [currencyOptions, setCurrencyOptions] = useState(['OPEN APP', 'Bitcoin', 'Ethereum', 'USD Coin']);

    const equitySelectRef = useRef(null);
    const currencySelectRef = useRef(null);

    const handleSwap = () => {
        // Swap displayed values
        const newDisplayEquity = displayCurrency;
        const newDisplayCurrency = displayEquity;
        setDisplayEquity(newDisplayEquity);
        setDisplayCurrency(newDisplayCurrency);

        // Swap selected values
        const newSelectedEquity = selectedCurrency;
        const newSelectedCurrency = selectedEquity;
        setSelectedEquity(newSelectedEquity);
        setSelectedCurrency(newSelectedCurrency);

        // Swap options arrays
        const newEquityOptions = currencyOptions;
        const newCurrencyOptions = equityOptions;
        setEquityOptions(newEquityOptions);
        setCurrencyOptions(newCurrencyOptions);
    };

    const handleAmountChange = (e) => {
        // Allow only numbers and limit to 7 characters
        const value = e.target.value.replace(/\D/g, '').slice(0, 7);
        setAmount(value);
    };

    const handleSelectBoxClick = (type) => {
        if (type === 'equity' && equitySelectRef.current) {
            equitySelectRef.current.click();
            equitySelectRef.current.focus();
        } else if (type === 'currency' && currencySelectRef.current) {
            currencySelectRef.current.click();
            currencySelectRef.current.focus();
        }
    };

    const selectStyle = "appearance-none bg-transparent w-full text-center font-inter text-[18px] font-bold text-[#204E4B] focus:outline-none rounded-lg px-2 transition-colors";

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#123a38] to-[#86ba8e]">
                <div className="xl:w-[40%] xl:mt-0 lg:mt-7 md:w-[70%] w-[95%] sm:mt-0 mt-5 mx-auto bg-white rounded-3xl border border-[#6EA280]">
                    <div className="flex border-b-[2.5px] border-[#103532]">
                        <div className="sm:w-[20%] w-[35%] sm:px-0 px-3 py-5 border-r-[2.5px] border-[#103532] flex justify-center items-center">
                            <img src={logo} className="sm:w-[50%] w-[80%]" alt="logo" />
                        </div>
                        <div className="pl-4">
                            <h3 className="font-inter py-3 sm:text-3xl text-base font-bold leading-none uppercase text-[#8ABD90]"> 
                                <span className="text-[#15413F]">B</span>uy <br /> 
                                <span className="text-[#15413F]">S</span>hares
                            </h3>
                        </div>
                    </div>
                    
                    <div className="p-8">
                        <div className="w-full flex items-start">
                            <div className="w-full">
                                {/* Amount Section */}
                                <div className="sm:flex w-full shadow-lg">
                                    <div className="sm:w-[30%] rounded-l-md border-2 border-[#103532] p-3 flex sm:flex-col flex-row sm:gap-0 gap-2">
                                        <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">
                                            U<span className="text-[#8FC292]">SD</span>
                                        </h4>
                                        <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B] sm:mt-1">
                                            A<span className="text-[#8FC292]">mount</span>
                                        </h4>
                                    </div>
                                    <div className="rounded-r-md w-full border-2 sm:border-l-0 border-[#103532]">
                                        <div className="flex items-center justify-center h-full py-2">
                                            <input 
                                                type="text" 
                                                className="font-inter text-center focus:outline-none text-[18px] font-bold text-[#204E4B] w-full"
                                                value={new Intl.NumberFormat().format(amount)} 
                                                onChange={handleAmountChange}
                                                placeholder="Enter amount"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Rest of the code remains the same as before */}

                                {/* Equity Selection */}
                                <div className="w-full mt-7">
                                    <div className="sm:flex shadow-lg">
                                        <div className="sm:w-[30%] w-full rounded-l-md border-2 border-[#103532] p-3 flex sm:flex-col flex-row sm:gap-0 gap-2">
                                            <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">
                                                E<span className="text-[#8FC292]">quity</span>
                                            </h4>
                                            <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B] sm:mt-1">
                                                S<span className="text-[#8FC292]">hares</span>
                                            </h4>
                                        </div>
                                        <div 
                                            className="rounded-r-md select-box-div w-full b sm:border-l-0 border-2 border-[#103532] relative cursor-pointer"
                                            onClick={() => handleSelectBoxClick('equity')}
                                        >
                                            <div className="flex items-center px-3 sm:py-2 py-3 min-h-full">
                                                <div className="w-[7%] sm:block hidden">
                                                    <img src={email} className="" alt="equity" />
                                                </div>
                                                <img src={email} className="sm:hidden block w-[7%] mr-3" alt="equity" />
                                                <div className={`relative flex justify-center w-[93%]`}>
                                                    <select
                                                        ref={equitySelectRef}
                                                        value={selectedEquity}
                                                        onChange={(e) => {
                                                            setSelectedEquity(e.target.value);
                                                            setDisplayEquity(e.target.value);
                                                        }}
                                                        className={selectStyle}
                                                    >
                                                        {equityOptions.map(option => (
                                                            <option 
                                                                key={option} 
                                                                value={option}
                                                                className="font-inter text-[16px] font-semibold text-[#204E4B] hover:bg-[#8FC292]"
                                                            >
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:ml-[25%]">
                                        <p className="text-center mt-1 font-bold text-[#528067] text-[9px]">
                                            USD live equity share value: $4444
                                        </p>
                                    </div>
                                </div>

                                {/* Currency Selection */}
                                <div className="w-full mt-3">
                                    <div className="sm:flex shadow-lg">
                                        <div className="sm:w-[30%] w-full rounded-l-md border-2 border-[#103532] p-3 flex sm:flex-col flex-row sm:gap-0 gap-2">
                                            <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">
                                                D<span className="text-[#8FC292]">igital</span>
                                            </h4>
                                            <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B] sm:mt-1">
                                                C<span className="text-[#8FC292]">urrency</span>
                                            </h4>
                                        </div>
                                        <div 
                                            className="rounded-r-md select-box-div w-full border-2 sm:border-l-0  border-[#103532] cursor-pointer"
                                            onClick={() => handleSelectBoxClick('currency')}
                                        >
                                            <div className="flex items-center px-3 sm:py-2 py-3 min-h-full">
                                                <div className="sm:w-[7%] sm:block hidden">
                                                    <img src={email} className="" alt="currency" />
                                                </div>
                                                <img src={email} className="sm:hidden block w-[7%] mr-3" alt="currency" />
                                                <div className={`relative w-[93%]`}>
                                                    <select
                                                        ref={currencySelectRef}
                                                        value={selectedCurrency}
                                                        onChange={(e) => {
                                                            setSelectedCurrency(e.target.value);
                                                            setDisplayCurrency(e.target.value);
                                                        }}
                                                        className={selectStyle}
                                                    >
                                                        {currencyOptions.map(option => (
                                                            <option 
                                                                key={option} 
                                                                value={option}
                                                                className="font-inter text-[16px] font-semibold text-[#204E4B] hover:bg-[#8FC292]"
                                                            >
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:ml-[25%]">
                                        <p className="text-center mt-1 font-bold text-[#528067] text-[9px]">
                                            USD live equity share value: $4444
                                        </p>
                                    </div>
                                </div>

                                {/* Swap Section */}
                                <div className="w-full mt-3">
                                    <div className="sm:flex">
                                        <div className="w-[30%] p-3"></div>
                                        <div className="w-full">
                                            <div className="sm:flex items-center justify-between rounded-md border-2 border-[#103532] px-4 sm:py-0 py-2">
                                                <div className="sm:w-[33%] text-center">
                                                    <h4 className="font-inter text-[18px] font-bold text-[#204E4B]">
                                                        {displayEquity}
                                                    </h4>
                                                    <p className="mt-1 font-bold text-[#528067] text-[9px]">
                                                        Total {displayEquity.split(' ')[1] || displayEquity}: 2.5
                                                    </p>
                                                </div>
                                                <div className="sm:w-[33%] text-center my-4">
                                                    <button 
                                                        onClick={handleSwap}
                                                        className="hover:scale-110 transition-transform duration-300"
                                                    >
                                                        <img src={swap} className="sm:w-[30%] w-[15%] mx-auto" alt="swap" />
                                                    </button>
                                                </div>
                                                <div className="sm:w-[33%] text-center">
                                                    <h4 className="font-inter text-[18px] font-bold text-[#204E4B]">
                                                        {displayCurrency}
                                                    </h4>
                                                    <p className="mt-1 font-bold text-[#528067] text-[9px]">
                                                        Total: 2.5 {displayCurrency}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-10">
                                                <button className="bg-[#31685B] hover:bg-[#25544a] text-white w-full py-3 uppercase font-inter text-lg text-center rounded-md transition-colors duration-300">
                                                    Confirm Buy
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Buy;