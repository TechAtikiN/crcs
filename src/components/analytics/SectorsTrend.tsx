import { CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

interface Props {
  sectorsData: SectorsDataNew[]
}

const SectorsTrend = ({ sectorsData }: Props) => {
  const sectors = sectorsData.map((item) => item.sector)
  const societies = sectorsData.map((item) => item.societies)
  const state = {
    labels: sectors,
    datasets: [
      {
        label: 'Registrations',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        data: societies
      }
    ]
  };
  ChartJS.register(...registerables, CategoryScale);

  return (
    <div className=''>
      <Bar
        width={600}
        height={300}
        data={state}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Distribution of Societies by Sector',
            },
            legend: {
              display: false,
              position: 'right',
              fullSize: true,
            }
          }
        }}
      />
    </div>
  );
};

export default SectorsTrend;
