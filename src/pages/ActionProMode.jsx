import Navbar from "../components/Navbar";
import logo from "../asset/logo.svg";
import email from "../asset/email.png";
import { Link } from "react-router-dom";

const ActionProMode = () => {

    return (
        <>
            <Navbar />


            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#123a38] to-[#86ba8e]">
                <div className="sm:w-[85%] w-[95%] sm:mt-0 mt-5 mx-auto bg-white rounded-3xl border border-[#6EA280]">
                    <div className="flex items-center border-b-[2.5px] border-[#15413F]">
                        <div className="sm:w-[20%] w-[35%] sm:px-0 px-3 py-5 border-r-[2.5px] border-[#15413F] flex justify-center items-center ">
                            <img src={logo} className="sm:w-[50%] w-[80%]" alt="" />
                        </div>
                        <div className="pl-4">
                            <h3 className="font-inter sm:text-3xl text-base font-bold leading-none uppercase text-[#8ABD90]"> <span className="text-[#15413F]">A</span>ction <br /> <span className="text-[#15413F]">P</span>ro Mode</h3>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="w-full flex sm:flex-row flex-col items-start">
                            <div className="sm:w-[20%] w-full sm:shadow-lg sm:border-b-[2px] border-b-0 border-[2px] sm:border-r-0 border-[#15413F] flex justify-between p-3 ">
                                <div className="flex justify-between items-center gap-5">
                                    <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">Oa Tesla B<span className="text-[#8FC292]">uy</span></h4>
                                    <img src={email} className="sm:w-[15%] w-[10%]" alt="" />
                                </div>
                            </div>
                            <div className="w-full">

                                <div className="">
                                    <div className="flex w-full items-start">
                                        <div className="flex sm:w-[90%] w-[70%] min-h-[53.5px]">
                                            <div className="w-full border-[2px] border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B]"> 4.2 Units </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:w-[10%] w-[30%]">
                                            <div className="flex justify-center min-h-[53.5px] items-center border-l-0 border-[2px] border-[#15413F]">
                                                <div className="w-[50%]">
                                                    <h4 className="font-inter text-center sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">+30%</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex w-full items-start">
                                        <div className="flex w-full">
                                            <div className="sm:w-[30%] w-[50%] border-[2px] border-r-0 border-t-0 border-[#15413F] p-3">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">OA Tesla <br /> O<span className="text-[#8FC292]">pen Price</span></h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <h4 className="font-inter sm:text-[18px] text-sm sm:px-0 px-2 text-center leading-none font-bold text-[#204E4B]"> 4.2 Units @ $402 per Share (D/M/Y) (TIME STAMP) </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex w-full items-start">
                                        <div className="flex w-full">
                                            <div className="sm:w-[30%] w-[50%] border-[2px] border-r-0 border-t-0 border-[#15413F] p-3">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">Open Tesla <br /> I<span className="text-[#8FC292]">nitial</span>  I<span className="text-[#8FC292]">nvestment</span></h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B]"> $1,6800 </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex w-full sm:items-start">
                                        <div className="flex sm:w-[90%] w-[70%]">
                                            <div className="w-[34.4%] border-[2px] border-r-0 border-t-0 border-[#15413F] p-3">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">Oa Tesla C<span className="text-[#8FC292]">lose</span></h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <h4 className="font-inter sm:text-[18px] text-sm sm:px-0 px-2 text-center leading-none font-bold text-[#204E4B]"> 2.8 Units (D/M/Y) (TIME STAMP) </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:w-[10%] w-[30%]">
                                            <div className="flex items-center sm:min-h-[44px] min-h-full border-b-[2px] border-r-[2px] border-[#15413F]">
                                                <div className="w-full">
                                                    <h4 className="font-inter text-center sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">+30%</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex w-full items-start">
                                        <div className="flex w-full">
                                            <div className="sm:w-[30%] w-[50%] border-[2px] border-r-0 border-t-0 border-[#15413F] p-3">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">OA Tesla <br /> T<span className="text-[#8FC292]">otal Value</span></h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <h4 className="font-inter sm:text-[18px] sm:px-0 px-2 text-center text-sm leading-none font-bold text-[#204E4B]"> 4.2 Units @ $402 per Share (D/M/Y) (TIME STAMP) </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex justify-end">
                                        <Link to={'/transaction-history'} className="bg-[#31685B] text-white sm:w-[40%] w-full py-3 uppercase font-inter sm:text-lg text-sm text-center rounded-md">View Transaction History</Link>
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
