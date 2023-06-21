import { CategoryScale } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

interface Props {
  filterType: string
  liquidationData: string[]
}

const LiquidationData = ({ filterType, liquidationData }: Props) => {
  const count: number[] = []

  liquidationData.map((item: string) => {
    count.push(liquidationData.filter((element: string) => element === item).length)
  }
  )

  const state = {
    labels: liquidationData,
    datasets: [
      {
        label: filterType,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(20, 40, 150)',
          'rgb(54, 120, 235)',
          'rgb(154, 162, 135)',
          'rgb(4, 162, 235)',
          'rgb(254, 112, 215)',
          'rgb(154, 62, 235)',
          'rgb(154, 16, 135)',
          '9b(54, 162, 235)',
          'rgb(5, 205, 86)'],
        borderColor: 'rgba(255,255,255)',
        data: count
      }
    ]
  }
  ChartJS.register(...registerables, CategoryScale)

  return (
    <div className=''>
      <Doughnut
        width={600}
        height={300}
        data={state}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Liquidation Data',
            },
            legend: {
              display: true,
              position: 'left',
              fullSize: true,
            }
          }
        }}
      />
    </div>
  )
}

export default LiquidationData
