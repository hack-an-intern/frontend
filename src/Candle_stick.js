import React from 'react'
import ApexCharts from 'apexcharts'

export default function candle_stick() {
  return (
    <ApexCharts options={options} series={series} type="candlestick" height={350} />
  )
}
