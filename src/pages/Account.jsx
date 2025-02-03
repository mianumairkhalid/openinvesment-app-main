import Navbar from "../components/Navbar";
import logo from "../asset/logo.svg";
import email from "../asset/email.png";
import { Link } from "react-router-dom";

const Account = () => {

    return (
        <>
            <Navbar />


            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#123a38] to-[#86ba8e]">
                <div className="xl:w-[85%] w-[95%] xl:mt-0 mt-5 mx-auto bg-white rounded-3xl border border-[#6EA280]">
                    <div className="flex items-center border-b-[2.5px] border-[#15413F]">
                        <div className="sm:w-[20%] w-[35%] sm:px-0 px-3 py-5 border-r-[2.5px] border-[#15413F] flex justify-center items-center ">
                            <img src={logo} className="sm:w-[50%] w-[80%]" alt="" />
                        </div>
                        <div className="px-4 w-full flex justify-between items-center ">
                            <h3 className="font-inter sm:text-3xl text-base font-bold leading-none uppercase text-[#8ABD90]"> <span className="text-[#15413F]">W</span>allet <br /> <span className="text-[#15413F]">A</span>ccount</h3>
                            <Link to={'/action-pro-mode'} className="bg-[#31685B] text-white sm:w-44 w-28 sm:py-3 py-2.5 uppercase font-inter sm:text-lg text-sm text-center rounded-md">Pro Mode</Link>
                        </div>
                    </div>
                    <div className="xl:px-16 sm:px-4">
                        <div className="flex sm:flex-row flex-col justify-between">
                            <div className="sm:w-[50%] sm:py-10 py-5 sm:px-5 px-2 border-r-[2px] border-[#15413F]">
                                <h3 className="text-[#296A5B] sm:text-lg text-sm leading-none mb-3 font-bold">Total Equity Shares Holding : $ 256,000</h3>
                                <div className="flex w-full items-sart shadow-xl">
                                    <div className="flex w-[90%]">
                                        <div className="sm:w-[34.4%] w-[60%] border-[2px] border-r-0 border-[#15413F] p-3">
                                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">Oa Tesla C<span className="text-[#8FC292]">lose</span></h4>
                                        </div>
                                        <div className="w-full border-[2px] border-[#15413F] ">
                                            <div className="flex items-center min-h-full justify-center">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B]"> 4.2 </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[15%]">
                                        <div className="flex items-center xl:min-h-[63.3px] min-h-full border-l-0 border-[2px] border-[#15413F]">
                                            <div className="w-full">
                                                <h4 className="font-inter text-center sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">+30%</h4>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div>
                                    <p className="text-center ml-[10%] mt-1 font-bold text-[#528067] text-[9px]">
                                        USD live equity share value: $4444
                                    </p>
                                </div>

                                <div className="flex w-full items-sart sm:mt-4 mt-3 shadow-xl">
                                    <div className="flex w-[90%]">
                                        <div className="sm:w-[34.4%] w-[60%] border-[2px] border-r-0 border-[#15413F] p-3">
                                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">Oa Microsoft</h4>
                                        </div>
                                        <div className="w-full border-[2px] border-[#15413F] ">
                                            <div className="flex items-center min-h-full justify-center">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B]"> 2.5 </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[15%]">
                                        <div className="flex items-center sm:min-h-[63.3px] min-h-full border-l-0 border-[2px] border-[#15413F]">
                                            <div className="w-full">
                                                <h4 className="font-inter text-center sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">+23%</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-center ml-[10%] mt-1 font-bold text-[#528067] text-[9px]">
                                        USD live equity share value: $4444
                                    </p>
                                </div>


                                <div className="flex w-full items-strt sm:mt-4 mt-3 shadow-xl">
                                    <div className="flex w-[90%]">
                                        <div className="sm:w-[34.4%] w-[60%] border-[2px] border-r-0 border-[#15413F] p-3">
                                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">AO IBM A<span className="text-[#8FC292]">mount</span></h4>
                                        </div>
                                        <div className="w-full border-[2px] border-[#15413F] ">
                                            <div className="flex items-center min-h-full justify-center">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B]"> 4.6 </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[15%]">
                                        <div className="flex items-center sm:min-h-[63.3px] min-h-full border-l-0 border-[2px] border-[#15413F]">
                                            <div className="w-full">
                                                <h4 className="font-inter text-center sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">+15%</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-center ml-[10%] mt-1 font-bold text-[#528067] text-[9px]">
                                        USD live equity share value: $4444
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <button className="bg-[#31685B] text-white w-full sm:py-3 py-2.5 uppercase font-inter sm:text-lg text-sm text-center rounded-md">View all</button>
                                </div>

                            </div>
                            <div className="sm:w-[50%] sm:py-10 py-5 sm:px-5 px-2">
                                <h3 className="text-[#296A5B] sm:text-lg text-sm leading-none mb-3 font-bold">Total Digital Shares Holding : $ 256,000</h3>
                                <div className="flex w-full items-start shadow-xl">
                                    <div className="flex w-[100%]">
                                        <div className="sm:w-[34.4%] w-[40%] border-[2px] border-r-0 border-[#15413F] p-3">
                                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">Open App A<span className="text-[#8FC292]">mount</span></h4>
                                        </div>
                                        <div className="w-full border-[2px] border-[#15413F] ">
                                            <div className="flex items-center min-h-full justify-center">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B]"> 150,000,000 </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-center ml-[27%] mt-1 font-bold text-[#528067] text-[9px]">
                                        USD live equity share value: $4444
                                    </p>
                                </div>
                                <div className="flex w-full items-start sm:mt-4 mt-3 shadow-xl">
                                    <div className="flex w-[100%]">
                                        <div className="sm:w-[34.4%] w-[40%] border-[2px] border-r-0 border-[#15413F] p-3">
                                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">ICP <br /> A<span className="text-[#8FC292]">mount</span></h4>
                                        </div>
                                        <div className="w-full border-[2px] border-[#15413F] ">
                                            <div className="flex items-center min-h-full justify-center">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B]"> 12,000 </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-center ml-[27%] mt-1 font-bold text-[#528067] text-[9px]">
                                        USD live equity share value: $4444
                                    </p>
                                </div>


                                <div className="flex w-full items-start sm:mt-4 mt-3 shadow-xl">
                                    <div className="flex w-[100%]">
                                        <div className="sm:w-[34.4%] w-[40%] border-[2px] border-r-0 border-[#15413F] p-3">
                                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">CK BITCOIN A<span className="text-[#8FC292]">mount</span></h4>
                                        </div>
                                        <div className="w-full border-[2px] border-[#15413F] ">
                                            <div className="flex items-center min-h-full justify-center">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B]"> 10 </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-center ml-[27%] mt-1 font-bold text-[#528067] text-[9px]">
                                        USD live equity share value: $4444
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <button className="bg-[#31685B] text-white w-full py-3 uppercase font-inter text-lg text-center rounded-md">View all</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Account;
