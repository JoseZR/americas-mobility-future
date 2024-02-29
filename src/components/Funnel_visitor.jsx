import React from 'react'
import ReactApexChart from 'react-apexcharts'

export function Funnel_visitor() {
  const series = [
    {
      name: 'porcentaje %',
      data: [34, 19, 11, 11, 6, 3, 3, 2, 1, 10],
    },
  ]

  const options = {
    chart: {
      type: 'bar',
      height: 450,
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    colors: [
      '#00CADC',
      '#49C3FB',
      '#65A6FA',
      '#7E80E7',
      '#6E7076',
      '#9B57CC',
      '#BB109D',
      '#D0005F',
      '#DE4F45',
      '#F79150',
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: '',
      align: 'middle',
    },
    xaxis: {
      categories: [
        'Automotriz',
        'Logística',
        'Automotriz híbrido',
        'Infraestructura',
        'Ingeniería',
        'Cloud Computing',
        'Desarrolladores',
        'Almacenamiento',
        'Aeronáutica',
        'Otros',
      ],
      labels: {
        colors: ['#000000'],
      },
    },
    legend: {
      show: false,
    },
  }

  return (
    <div>
      <div id='chart'>
        <ReactApexChart
          options={options}
          series={series}
          type='bar'
          height={380}
        />
      </div>
      <div id='html-dist'></div>
    </div>
  )
}
