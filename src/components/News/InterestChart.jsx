import { Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { theme } from '../../styles/theme';
import styled from 'styled-components';

// Chart.js에 필요한 요소 등록
Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const labels = ['경제', '스포츠', '사회', '정치', '생활/문화', 'IT/과학'];
const data = {
  labels,
  datasets: [
    {
      label: '관심도',
      data: [100, 70, 100, 40, 60, 70], // 0~100 사이 값
      backgroundColor: 'rgba(6, 6, 250, 0.13)',
      borderColor: '#0606FA',
      pointBackgroundColor: '#0606FA',
      borderWidth: 0.5,
      pointRadius: 0.8,
      pointHoverRadius: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    r: {
      angleLines: { display: false },
      grid: { 
        color: ['#BFBFBF', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0'], // 바깥쪽부터 안쪽 순서
        lineWidth: [0.4, 0.2, 0.2, 0.2, 0.2], // 바깥쪽부터 안쪽 순서
      },
      pointLabels: {
        color: '#888888',
        font: { size: 6, weight: 500 },
      },
      min: 0,
      max: 100,
      ticks: { 
        display: false,
        stepSize: 20,
      },
    },
  },
  animation: {
    duration: 900,
  },
};

const InterestChartChartJS = () => (
  <ChartCard>
    <ChartTitle>분야별 관심도</ChartTitle>
    <ChartContainer>
      <Radar data={data} options={options} />
    </ChartContainer>
  </ChartCard>
);

export default InterestChartChartJS; 

const ChartCard = styled.div`
  background: white;
  border-radius: 22px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 50%;
  aspect-ratio: 1 / 1; /* 가로:세로 비율을 1:1로 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 10px 0px 10px;
  overflow: hidden;
`;

const ChartTitle = styled.h3`
  color: ${theme.gray};
  font-size: 10px;
  font-weight: 700;
  text-align: center;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;