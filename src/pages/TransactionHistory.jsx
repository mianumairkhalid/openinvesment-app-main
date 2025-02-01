import { useState } from 'react';
import Navbar from "../components/Navbar";
import logo from "../asset/logo.svg";
import email from "../asset/email.png";

const TransactionHistory = () => {
  const [selectedShare, setSelectedShare] = useState('OA_Tesla');
  
  const sharesData = {
    OA_Tesla: {
      totalUnits: 5.8,
      profitLoss: "+50%",
      transactions: [
        { units: 1.2, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+30%" },
        { units: 1.2, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+30%" },
        { units: 1.2, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+30%" }
      ]
    },
    OA_Apple: {
      totalUnits: 4.5,
      profitLoss: "+42%",
      transactions: [
        { units: 1.5, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+25%" },
        { units: 1.5, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+25%" },
        { units: 1.5, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+25%" }
      ]
    },
    OA_Amazon: {
      totalUnits: 6.2,
      profitLoss: "+38%",
      transactions: [
        { units: 2.1, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+18%" },
        { units: 2.0, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+18%" },
        { units: 2.1, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+18%" }
      ]
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
          <div className="dropdown-div flex items-center border-b-[2.5px] border-[#15413F]">
            <div className="sm:w-[20%] w-[35%] sm:px-0 px-3 py-5 border-r-[2.5px] border-[#15413F] flex justify-center items-center">
              <img src={logo} className="sm:w-[50%] w-[80%]" alt="logo" />
            </div>
            <div className="pl-4">
              <h3 className="font-inter sm:text-3xl text-base font-bold leading-none uppercase text-[#8ABD90]">
                <span className="text-[#15413F]">T</span>ransaction <br />
                <span className="text-[#15413F]">H</span>istory
              </h3>
            </div>
          </div>
          <div className="sm:p-8 p-2">
            <div className="w-full flex sm:flex-row flex-col items-start">
              <div className="sm:w-[20%] w-full sm:shadow-lg border-[2px] sm:border-r-0 border-[#15413F] flex justify-between p-3">
                <div className="flex justify-between items-center gap-2 w-full">
                  <select 
                    value={selectedShare}
                    onChange={handleShareChange}
                    className="appearance-none font-inter sm:text-[15px] text-sm leading-none font-bold uppercase text-[#204E4B] bg-transparent outline-none cursor-pointer rounded-lg px-2 transition-colors w-full"
                  >
                    <option value="OA_Tesla">OA Tesla Buy</option>
                    <option value="OA_Apple">OA Apple Buy</option>
                    <option value="OA_Amazon">OA Amazon Buy</option>
                  </select>
                  <img src={email} className="sm:w-[15%] w-[10%]" alt="share-icon" />
                </div>
              </div>
              <div className="w-full">
                <div className="border-[2px] sm:border-t-[2px] border-t-0 border-[#15413F] flex">
                  <div className="flex w-full">
                    <div className="flex items-center min-h-[50px] justify-center w-full">
                      <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#679877]">
                        Total Units Closed :
                      </h4>
                      <h4 className="font-inter font-extrabold sm:text-[18px] text-sm leading-none uppercase text-[#204E4B]">
                        &nbsp; {currentData.totalUnits} Units @ P/L {currentData.profitLoss}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  {currentData.transactions.map((transaction, index) => (
                    <div key={index} className="flex sm:flex-row flex-col w-full items-start">
                      <div className="flex sm:w-[70%] w-full sm:shadow-lg">
                      <div className={`border-[2px] border-r-0 ${index === 0 ? 'border-t-0' : ''} border-[#15413F] p-3`}>
                          <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">
                            {selectedShare.split('_')[1]} <span className="text-[#8FC292]">Close</span>
                          </h4>
                        </div>
                        <div className={`w-full border-[2px] ${index !== 0 ? 'border-t-[2px]' : 'border-t-0'} border-[#15413F]`}>
                          <div className="flex items-center min-h-full justify-center">
                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B]">
                              {transaction.units} Units {transaction.timestamp}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="sm:w-[30%] w-full shadow-lg">
                        <div className={`flex items-center sm:${index !== 0 ? 'border-t-[2px]' : ''} border-r-[2px] border-[#15413F]`}>
                          <div className="border-r-[2px] sm:border-l-0 border-l-[2px] border-[#15413F] p-3">
                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">
                              {selectedShare.split('_')[1]} <span className="text-[#8FC292]">Profit</span> &amp; L
                              <span className="text-[#8FC292]">oss</span>
                            </h4>
                          </div>
                          <div className="w-[50%]">
                            <h4 className="font-inter text-center sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">
                              {transaction.percentage}
                            </h4>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex justify-end w-full">
                            <h2 className="bg-[#BF0001] w-full text-center text-white text-lg font-normal font-inter uppercase">
                              Closed
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="mt-5">
                    <button className="bg-[#31685B] hover:bg-[#25544a] text-white w-full py-3 uppercase font-inter text-lg text-center rounded-md transition-colors">
                      View all closed trades
                    </button>
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

export default TransactionHistory;