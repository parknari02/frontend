import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const TrendAnalysisCard = ({
    title = "트렌드 분석",
    label = "지표",
    data = [10, 15, 25, 40, 30],
}) => {
    const chartData = {
        labels: ["", "", "", "", ""], // 축 라벨 안 보이게
        datasets: [
            {
                label: label,
                data: data,
                borderColor: "#ffffff",
                borderWidth: 1,
                tension: 0.4, // 부드러운 곡선
                pointBackgroundColor: "#ffffff",
                pointRadius: 1.5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
            x: { display: false, grid: { display: false } },
            y: { display: false, grid: { display: false } },
        },
        animation: {
            duration: 1200, // 기본 애니메이션 속도 (ms)
            easing: "easeOutQuart",
        },
    };

    return (
        <CardWrapper>
            <CardTop>
                <CardTitleBold>{title}</CardTitleBold>
                <AnalysisLabel>{label}</AnalysisLabel>
            </CardTop>
            <ChartContainer>
                <Line data={chartData} options={options} />
            </ChartContainer>
        </CardWrapper>
    );
};

export default TrendAnalysisCard;


const CardWrapper = styled.div`
  flex: 1;
  aspect-ratio: 1;
  color: #fff;
  border-radius: 22px;
  padding: 20px;
  background: linear-gradient(167.29deg, rgba(6, 6, 250, 0.6) 26.37%, rgba(132, 132, 255, 0.24) 128.67%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  overflow: hidden;
  aspect-ratio: 1 / 1;

`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
`;

const CardTitleBold = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

const AnalysisLabel = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 55%;
`;