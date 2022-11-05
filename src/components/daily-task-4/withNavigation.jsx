import React from "react";
import { useNavigate as _useNavigate } from "react-router-dom";

const withNavigate = (WrapperComponent) => props => {
    const useNavigate = _useNavigate();
    
    return (
        <WrapperComponent useNavigate={useNavigate} {...props}></WrapperComponent>
    )
}

export default withNavigate;