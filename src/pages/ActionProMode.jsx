import { useState } from 'react';
import Navbar from "../components/Navbar";
import logo from "../asset/logo.svg";
import email from "../asset/email.png";
import { Link } from "react-router-dom";

const ActionProMode = () => {
    const [selectedShare, setSelectedShare] = useState('OA_Tesla');
    
    const sharesData = {
        OA_Tesla: {
            buyUnits: 4.2,
            buyPrice: 402,
            initialInvestment: 16800,
            closeUnits: 2.8,
            totalValue: 16800,
            percentage: "+30%",
            timestamp: "(D/M/Y) (TIME STAMP)"
        },
        OA_Apple: {
            buyUnits: 5.0,
            buyPrice: 185,
            initialInvestment: 9250,
            closeUnits: 3.5,
            totalValue: 9250,
            percentage: "+25%",
            timestamp: "(D/M/Y) (TIME STAMP)"
        },
        OA_Amazon: {
            buyUnits: 3.8,
            buyPrice: 3300,
            initialInvestment: 12540,
            closeUnits: 2.2,
            totalValue: 12540,
            percentage: "+18%",
            timestamp: "(D/M/Y) (TIME STAMP)"
        }
    };

    const handleShareChange = (e) => {
        setSelectedShare(e.target.value);
    };

    const currentData = sharesData[selectedShare];

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#123a38] to-[#86ba8e]">
                <div className="sm:w-[85%] w-[95%] sm:mt-0 mt-5 mx-auto bg-white rounded-3xl border border-[#6EA280]">
                    <div className="flex items-center border-b-[2.5px] border-[#15413F]">
                        <div className="sm:w-[20%] w-[35%] sm:px-0 px-3 py-5 border-r-[2.5px] border-[#15413F] flex justify-center items-center ">
                            <img src={logo} className="sm:w-[50%] w-[80%]" alt="logo" />
                        </div>
                        <div className="pl-4">
                            <h3 className="font-inter sm:text-3xl text-base font-bold leading-none uppercase text-[#8ABD90]"> 
                                <span className="text-[#15413F]">A</span>ction <br /> 
                                <span className="text-[#15413F]">P</span>ro Mode
                            </h3>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="dropdown-box w-full flex sm:flex-row flex-col items-start">
                            <div className="sm:w-[20%] w-full sm:shadow-lg sm:border-b-[2px] border-b-0 border-[2px] sm:border-r-0 border-[#15413F] flex justify-between p-3 ">
                                <div className="flex justify-between items-center gap-1 w-full">
                                    <select 
                                        value={selectedShare}
                                        onChange={handleShareChange}
                                        className="appearance-none font-inter sm:text-[16px] text-sm leading-none font-bold uppercase text-[#204E4B] bg-transparent outline-none cursor-pointer rounded-lg px-2 transition-colors w-full"
                                    >
                                        <option value="OA_Tesla">OA Tesla Buy</option>
                                        <option value="OA_Apple">OA Apple Buy</option>
                                        <option value="OA_Amazon">OA Amazon Buy</option>
                                    </select>
                                    <img src={email} className="sm:w-[15%] w-[10%]" alt="share-icon" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="">
                                    <div className="flex w-full items-start">
                                        <div className="flex sm:w-[90%] w-[70%] min-h-[53.5px]">
                                            <div className="w-full border-[2px] border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <h4 className="font-inter sm:text-[18px] text-[12px] leading-none font-bold text-[#204E4B]">
                                                        {currentData.buyUnits} Units
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:w-[10%] w-[30%]">
                                            <div className="flex justify-center min-h-[53.5px] items-center border-l-0 border-[2px] border-[#15413F]">
                                                <div className="w-[50%]">
                                                    <h4 className="font-inter text-center sm:text-[18px] text-[12px] leading-none font-bold uppercase text-[#204E4B]">
                                                        {currentData.percentage}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex w-full items-start">
                                        <div className="flex w-full">
                                            <div className="sm:w-[30%] w-[50%] border-[2px] border-r-0 border-t-0 border-[#15413F] sm:p-3 p-1">
                                                <h4 className="font-inter sm:text-[18px] text-[12px] leading-none font-bold uppercase text-[#204E4B]">
                                                    {selectedShare.split('_')[1]} <br /> 
                                                    <span className="text-[#8FC292]">Open Price</span>
                                                </h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <h4 className="font-inter sm:text-[18px] text-[12px] sm:px-0 px-2 text-center leading-none font-bold text-[#204E4B]">
                                                        {currentData.buyUnits} Units @ ${currentData.buyPrice} per Share {currentData.timestamp}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex w-full items-start">
                                        <div className="flex w-full">
                                            <div className="sm:w-[30%] w-[50%] border-[2px] border-r-0 border-t-0 border-[#15413F] sm:p-3 p-1">
                                                <h4 className="font-inter sm:text-[18px] text-[12px] leading-none font-bold uppercase text-[#204E4B]">
                                                    Open {selectedShare.split('_')[1]} <br /> 
                                                    <span className="text-[#8FC292]">Initial Investment</span>
                                                </h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <h4 className="font-inter sm:text-[18px] text-[12px] leading-none font-bold text-[#204E4B]">
                                                        ${currentData.initialInvestment.toLocaleString()}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex w-full sm:items-start">
                                        <div className="flex sm:w-[90%] w-[70%]">
                                            <div className="w-[34.4%] border-[2px] border-r-0 border-t-0 border-[#15413F] p-3">
                                                <h4 className="font-inter sm:text-[18px] text-[12px] leading-none font-bold uppercase text-[#204E4B]">
                                                    {selectedShare.split('_')[1]} <span className="text-[#8FC292]">Close</span>
                                                </h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <h4 className="font-inter sm:text-[18px] text-[12px] sm:px-0 px-2 text-center leading-none font-bold text-[#204E4B]">
                                                        {currentData.closeUnits} Units {currentData.timestamp}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:w-[10%] w-[30%]">
                                            <div className="flex items-center sm:min-h-[44px] min-h-full border-b-[2px] border-r-[2px] border-[#15413F]">
                                                <div className="w-full">
                                                    <h4 className="font-inter text-center sm:text-[18px] text-[12px] leading-none font-bold uppercase text-[#204E4B]">
                                                        {currentData.percentage}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex w-full items-start">
                                        <div className="flex w-full">
                                            <div className="sm:w-[30%] w-[50%] border-[2px] border-r-0 border-t-0 border-[#15413F] sm:p-3 p-1">
                                                <h4 className="font-inter sm:text-[18px] text-[12px] leading-none font-bold uppercase text-[#204E4B]">
                                                    {selectedShare.split('_')[1]} <br /> 
                                                    <span className="text-[#8FC292]">Total Value</span>
                                                </h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <h4 className="font-inter sm:text-[18px] sm:px-0 px-2 sm:py-0 py-1 text-center text-sm leading-none font-bold text-[#204E4B]">
                                                        {currentData.buyUnits} Units @ ${currentData.buyPrice} per Share {currentData.timestamp}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex justify-end">
                                        <Link to={'/transaction-history'} className="bg-[#31685B] text-white sm:w-[40%] w-full py-3 uppercase font-inter sm:text-lg text-sm text-center rounded-md hover:bg-[#25544a] transition-colors">
                                            View Transaction History
                                        </Link>
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

export default ActionProMode;