import { CategoryScale } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

interface Props {
  areas: string[]
}

const App = ({ areas }: Props) => {
  // unique areas
  const uniqueAreas = areas.filter((item, index) => {
    return areas.indexOf(item) === index
  })

  const count: number[] = []

  areas.map((item: string) => {
    count.push(areas.filter((element: string) => element === item).length)
  }
  )

  const state = {
    labels: uniqueAreas,
    datasets: [
      {
        label: 'Societies',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: count,
        fill: {
          target: 'origin',
          above: 'rgba(75, 1, 192, 0.2)',   // Area will be red above the origin
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
              text: 'Society Areas of Operation',
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
