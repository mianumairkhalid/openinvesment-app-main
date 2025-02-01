import Navbar from "../components/Navbar";
import logo from "../asset/logo.svg";
import email from "../asset/email.png";
import swap from "../asset/swap.png";

const Swap = () => {

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#123a38] to-[#86ba8e]">
                <div className="sm:w-[40%] w-[95%] sm:mt-0 mt-5 mx-auto bg-white rounded-3xl border border-[#6EA280]">
                    <div className="flex border-b-[2.5px] border-[#103532]">
                        <div className="sm:w-[20%] w-[35%] sm:px-0 px-3 py-5 border-r-[2.5px] border-[#103532] flex justify-center items-center ">
                            <img src={logo} className="sm:w-[50%] w-[80%]" alt="" />
                        </div>
                        <div className="pl-4">
                            <h3 className="font-inter py-3 sm:text-3xl text-base font-bold leading-none uppercase text-[#8ABD90]"> <span className="text-[#15413F]">S</span>wap <br /> <span className="text-[#15413F]">S</span>hares</h3>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="w-full flex items-start">
                            <div className="w-full">
                                <div className="sm:flex w-[100%] shadow-lg">
                                    <div className="sm:w-[30%] rounded-l-md border-[2px] sm:border-r-0 border-[#103532] p-3 flex sm:flex-col flex-row sm:gap-0 gap-2">
                                        <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">U<span className="text-[#8FC292]">SD</span></h4>
                                        <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B] sm:mt-1">A<span className="text-[#8FC292]">mount</span></h4>
                                    </div>
                                    <div className="rounded-r-md w-full border-[2px] border-[#103532] sm:py-0 py-2">
                                        <div className="flex items-center min-h-full justify-center">
                                            <h4 className="font-inter text-[18px] leading-none font-bold text-[#204E4B]"> $1,000 </h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full mt-7 ">
                                    <div className="sm:flex shadow-lg">
                                        <div className="sm:w-[30%] w-full rounded-l-md border-[2px] sm:border-r-0 border-[#103532] p-3 flex sm:flex-col flex-row sm:gap-0 gap-2">
                                            <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">E<span className="text-[#8FC292]">quity</span></h4>
                                            <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B] sm:mt-1">S<span className="text-[#8FC292]">hares</span></h4>
                                        </div>
                                        <div className="rounded-r-md w-full border-[2px] border-[#103532] sm:py-0 py-2">
                                        <div className="flex items-center min-h-full justify-start px-3">
                                                <div className="w-[37%] sm:block hidden">
                                                    <img src={email} className="w-[20%]" alt="" />
                                                </div>
                                                <img src={email} className="sm:hidden block w-[7%] mr-3" alt="" />

                                                <h4 className="font-inter text-[18px] leading-none font-bold text-[#204E4B]"> OA Tesla </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:ml-[25%]">
                                        <p className="text-center  bg-transparent mt-1 font-bold text-[#528067] text-[9px]">"USD live quity share value : $ 4444"</p>
                                    </div>
                                </div>


                                <div className="w-full mt-3 ">
                                    <div className="sm:flex shadow-lg">
                                        <div className="sm:w-[30%] w-full rounded-l-md border-[2px] sm:border-r-0 border-[#103532] p-3 flex sm:flex-col flex-row sm:gap-0 gap-2">
                                            <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">D<span className="text-[#8FC292]">igital</span></h4>
                                            <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B] sm:mt-1">C<span className="text-[#8FC292]">urrency</span></h4>
                                        </div>
                                        <div className="rounded-r-md w-full border-[2px] border-[#103532] sm:py-0 py-2">
                                            <div className="flex items-center min-h-full justify-start px-3">
                                                <div className="w-[37%] sm:block hidden">
                                                    <img src={email} className="w-[20%]" alt="" />
                                                </div>
                                                <img src={email} className="sm:hidden block w-[7%] mr-3" alt="" />

                                                <h4 className="font-inter text-[18px] leading-none font-bold text-[#204E4B]"> OA Mincrosoft </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:ml-[25%]">
                                        <p className="text-center  bg-transparent mt-1 font-bold text-[#528067] text-[9px]">"USD live quity share value : $ 4444"</p>
                                    </div>
                                </div>


                                <div className="w-full mt-3 ">
                                    <div className="sm:flex">
                                        <div className="w-[30%] p-3">
                                        </div>
                                        <div className="w-full">
                                           <div className="sm:flex items-center justify-between rounded-md border-[2px] border-[#103532]  p-4">
                                           <div className="sm:w-[33%] text-center">
                                                <h4 className="font-inter text-[18px] leading-none font-bold text-[#204E4B]"> OA Tesla </h4>
                                        <p className=" bg-transparent mt-1 font-bold text-[#528067] text-[9px]">Total Tesla : 2.5 Tesla</p>
                                            </div>
                                            <div className="sm:w-[33%] text-center flex justify-center my-4">
                                                <img src={swap} className="sm:w-[30%] w-[20%]" alt="" />
                                            </div>
                                            <div className="sm:w-[33%] text-center min-w-max">
                                                <h4 className="font-inter text-[18px] leading-none font-bold text-[#204E4B]"> OA Mincrosoft </h4>
                                        <p className=" bg-transparent mt-1 font-bold text-[#528067] text-[9px]">Total : 2.5 Tesla</p>
                                            </div>
                                           </div>


                                            <div className="mt-10">
                                        <button className="bg-[#31685B] text-white w-full py-3 uppercase font-inter text-lg text-center rounded-md">Confirm Sell</button>
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

export default Swap;
