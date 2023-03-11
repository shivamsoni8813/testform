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
              src="https://www.freeiconspng.com/thumbs/number-1-png/number-1-png-image-20.png"
              className="firstImg"
              />
            
            
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://m.media-amazon.com/images/I/41b8MNprCaL.jpg"
              className="secoundImg"
            />
          )}
        </Step>

        <Step transition="scale">
          {({ accomplished }) => (
              <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://www.kindpng.com/picc/m/11-112569_number-3-in-circle-hd-png-download.png"
              className="thirdImg"
              />
              )}
        </Step>
      

      </ProgressBar>
      </div>

    );
}