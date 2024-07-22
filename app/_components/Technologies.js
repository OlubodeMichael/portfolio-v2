"use client"
import React from 'react';
import Ticker, { TICKER_DIRECTION_LEFT, TICKER_DIRECTION_RIGHT } from 'framer-motion-ticker';
import { IoLogoJavascript } from "react-icons/io";


export default function Technologies({left}) {
    const colors = ['#632bf3', '#f122c8', '#f16022', '#9ef344', '#44d3f3'];
    let direction;
    if (left) {
      direction = TICKER_DIRECTION_LEFT;
    } else {
      direction = TICKER_DIRECTION_RIGHT;
    }
    return (
        <div>
            <Ticker duration={20} direction={direction} >
        {colors.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item,
              margin: '5px',
              height: '250px',
              width: '200px',
            }}
          />
        ))}
      </Ticker>
      
        </div>
    );
}
