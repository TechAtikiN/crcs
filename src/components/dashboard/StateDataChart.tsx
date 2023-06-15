import { CategoryScale } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

interface Props {
  stateData: StateData[]
}

const App = ({ stateData }: Props) => {
  const states = stateData.map((item: StateData) => item.state)
  const count = stateData.map((item: StateData) => item.count)
  const state = {
    labels: states,
    datasets: [

      {
        label: 'Registrations',
        backgroundColor: [
          'rgb(54, 120, 235)',
          'rgb(154, 162, 135)',
          'rgb(4, 162, 235)',
          'rgb(254, 112, 215)',
          'rgb(254, 112, 15)',
          'rgb(154, 62, 235)',
        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: count,
        fill: {
          target: 'origin',
          above: 'rgb(163, 228, 215)',   // Area will be red above the origin
          below: 'rgb(4, 162, 235)'    // And blue below the origin
        }
      }
    ]
  }
  ChartJS.register(...registerables, CategoryScale)

  return (
    <div className=''>
      <Line
        width={600}
        height={300}
        data={state}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Society Registrations by State',
            },
            legend: {
              display: true,
              position: 'right',
              fullSize: false,
            }
          }
        }}
      />
    </div>
  )
}

export default App
