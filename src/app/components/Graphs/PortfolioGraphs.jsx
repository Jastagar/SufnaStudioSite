'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

export default function PortfolioGraph({percent,color}) {
    const outOfHundred= 100-percent

  return (
    <div data-aos="fade-bottom-right" className='' >
        <Doughnut className='w-[80%]' data={{
            datasets:[
                    {
                      data: [percent, outOfHundred], // Ratio Goes Here
                      backgroundColor: [color, "rgba(220, 220, 220, 1)"],
                    },
                ]
        }}>
        </Doughnut>
        <div className=' text-3xl font-thin    absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            {percent + "%"}
        </div>
    </div>
  )
}
