import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setGreen, setPurple, setRed, setBlue } from "./redux/bgSlice";

function Color() {
    const dispatch = useDispatch();
    const bgColor = useSelector((state) => state.bgColor.color);
    
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1 className="pb-2 text-light">Background Color Change</h1>
                <div className="d-flex justify-content-center">
                    <button onClick={() => dispatch(setRed())} className="btn btn-light me-2">Red</button>
                    <button onClick={() => dispatch(setBlue())} className="btn btn-light me-2">Blue</button>
                    <button onClick={() => dispatch(setGreen())} className="btn btn-light me-2">Green</button>
                    <button onClick={() => dispatch(setPurple())} className="btn btn-light">Purple</button>
                </div>
            </div>
        </div>
    );
}

export default Color;
