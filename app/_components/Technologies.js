"use client"
import React from 'react';
import Ticker from 'framer-motion-ticker';
import { TICKER_DIRECTION_LEFT, TICKER_DIRECTION_RIGHT } from 'framer-motion-ticker';
import { 
    CPlusPlusIcon, JavaScriptIcon, PythonIcon, 
    ReactIcon, SwiftIcon, MySQLIcon, 
    JavaIcon, HTML5Icon, NodeJsIcon, NextJsIcon, ExpressJsLightIcon, TailwindCSSIcon
} from "developer-icons"; 

export default function Technologies({ left, list }) {
  let direction = left ? TICKER_DIRECTION_LEFT : TICKER_DIRECTION_RIGHT;

  return (
    <div className="overflow-hidden">
      <DisplayList list={list} direction={direction}/>
    </div>
  );
}

function DisplayList({ list, direction }) {
  return (
    <div className="overflow-hidden">
      <Ticker duration={20} direction={direction}>
        {list.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center mx-4 h-40 w-40"
          >
            <div className="flex items-center justify-center">
              {item.component}
            </div>
            <span className="mt-1 text-white text-sm">{item.label}</span>
          </div>
        ))}
      </Ticker>
    </div>
  )
}