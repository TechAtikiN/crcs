import { CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

interface Props {
  societyData: SocietyDataOverYears[]
}

const App = ({ societyData }: Props) => {
  const years = societyData.map((item: SocietyDataOverYears) => item.year)
  const values = societyData.map((item: SocietyDataOverYears) => item.count)
  const state = {
    labels: years,
    datasets: [
      {
        label: 'Registrations',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        data: values
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
              text: 'Society Registrations over the years',
            },
            legend: {
              display: true,
              position: 'right',
              fullSize: true,
            }
          }
        }}
      />
    </div>
  );
};

export default App;
