import styled from "styled-components";
import userProfileIcon from '../../assets/icons/userProfile.svg';

const AgoraBanner = () => {
    return (
        <AgoraBannerContainer>
            <AgoraBannerRow>
                <AgoraBannerText>지금 인기있는 아고라</AgoraBannerText>
                <AgoraBannerUserCount>
                    <UserIconWrapper >
                        <img src={userProfileIcon} alt="user profile icon" />
                    </UserIconWrapper>
                    593명
                </AgoraBannerUserCount>
            </AgoraBannerRow>
            <AgoraBannerTitle>
                기사 제목을 여기에다가 작성해서 기사 제목을 여기에다가
            </AgoraBannerTitle>
            <AgoraBannerRow>
                <AgoraBannerText>18:00 시작 예정</AgoraBannerText>
                <AgoraBannerText>참여 가능 / 관전 가능</AgoraBannerText>
            </AgoraBannerRow>
        </AgoraBannerContainer>
    )
}

export default AgoraBanner;

// background 속성에 여러 개의 그라데이션을 지정하면 위에서부터 순서대로 쌓임 
const AgoraBannerContainer = styled.div`
    width: 100%;
    height: 140px;
    background: 
        linear-gradient(
            180deg, 
            rgba(6, 6, 250, 0.6) 26.37%, 
            rgba(132, 132, 255, 0.24) 128.67%
        );
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 20px 32px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const AgoraBannerRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AgoraBannerText = styled.span`
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
    font-size: 12px;
`;

const AgoraBannerUserCount = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    color: rgba(255, 255, 255, 1);  
    font-weight: 700;
    font-size: 12px;
`;

const UserIconWrapper = styled.div`
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AgoraBannerTitle = styled.div`
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
    font-size: 24px;

`;