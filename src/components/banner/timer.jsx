import React, { useEffect, useState } from "react";
import { StrelkaRight } from "../../assets/header/icon/strelkaRight";

export const Countdown = () => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const target = new Date();
        target.setHours(target.getHours() + 2);

        const interval = setInterval(() => {
            const now = new Date();
            const diff = target - now;

            if (diff <= 0) {
                clearInterval(interval);
                setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                setTime({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center text-white">
            <h4 className="text-sm tracking-[2px] mt-[35px] mb-4">BEST DEALS</h4>
            <h2 className="text-3xl font-bold mb-4">Sale of the Month</h2>

            <div className="flex justify-center mt-2 mb-6 gap-5 text-xl font-bold text-white px-4 py-2 rounded-md">
                <div>
                    {String(time.days).padStart(2, "0")} <br />
                    <span className="text-sm font-normal">DAYS</span>
                </div>
                <span>:</span>
                <div>
                    {String(time.hours).padStart(2, "0")} <br />
                    <span className="text-sm font-normal">HOURS</span>
                </div>
                <span>:</span>
                <div>
                    {String(time.minutes).padStart(2, "0")} <br />
                    <span className="text-sm font-normal">MINS</span>
                </div>
                <span>:</span>
                <div>
                    {String(time.seconds).padStart(2, "0")} <br />
                    <span className="text-sm font-normal">SECS</span>
                </div>
            </div>

            <button className=' flex items-center mr-auto ml-auto gap-4 py-4 px-10 text-[16px] font-semibold bg-white rounded-[53px] text-[#00b207]'>
                Shop now <StrelkaRight />
            </button>
        </div>
    );
};
