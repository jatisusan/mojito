import React from 'react'
import gsap from "gsap";
import {SplitText, ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className={"h-[100vh] flex-center"}>
            <h1 className="text-3xl font-bold underline"> Hello world! </h1>
        </div>
    )
}
export default App
