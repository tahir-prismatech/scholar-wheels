import "./AuthLayout.css"
import going_to_school from "./../../assets/images/going_to_school.png"
import sign_up from "./../../assets/images/sign_up.png"
import { useEffect, useState } from "react";

export default function AuthLayout({children}){

    let arr = [going_to_school, sign_up]
    const [crntImgIdx, setIdx] = useState(0)



    useEffect(()=>{
        let timer;
        timer = setInterval(()=>{
            setIdx(prev => (prev === 0 ? 1 : 0));   
        },5000)

        return () => clearInterval(timer)
    }, [])


    return (
        <div className="row auth-layout">
            <div className="col-6">{children}</div>
            <div className="col-6 auth-pic">
                <img src={arr[crntImgIdx]} alt="nothing"></img>
            </div>
        </div>
    );
}
