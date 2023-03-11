import React, { useContext } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { StepPercent } from '../context/StepContext'
import "./ProgressStep.css"
export function StepProgressBar(params) {

    let {stepPercent} = useContext(StepPercent)
    return (
        <div className="progressBar">

      <ProgressBar
        percent={stepPercent}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale" >
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://i.pinimg.com/originals/ec/2c/c4/ec2cc45a21e60b927beee270822aa1b8.png"
              
            />
            
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://www.clipartmax.com/png/middle/80-804604_number-2-in-circle.png"
            />
          )}
        </Step>

        <Step transition="scale">
          {({ accomplished }) => (
              <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://www.kindpng.com/picc/m/11-112569_number-3-in-circle-hd-png-download.png"
              />
              )}
        </Step>
      

      </ProgressBar>
      </div>

    );
}