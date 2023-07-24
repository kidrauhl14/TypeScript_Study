import React from 'react';
import { Button } from 'react-bootstrap';
import { IResult } from '../stores/Result/types';

const Kakao = (window as any).Kakao;

interface Props {
    data: IResult;
}

function KakaoShareButton(props:Props) {

    // netlify로 배포한 url
    const url = "";

    // 결과 나오는 url
    const resultUrl = window.location.href;
    console.log("props", props);

    React.useEffect(()=>{
        if(!Kakao.isInitialized){
            Kakao.init('b23285e24e26ea8e281bd5e8f7fd7709');
        }
    }, []);

    const shareKakao = () => {
        Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: '🐱예비집사 판별기 결과🐱',
            description: '예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${props.data.name}입니다.',
            imageUrl: url + props.data.image,
            link: {
              mobileWebUrl: resultUrl,
              webUrl: resultUrl,
            },
          },

          social: {
            likeCount: 10,
            commentCount: 20,
            sharedCount: 30,
          },
          buttons: [
            {
              title: '나도 테스트 하러기기',
              link: {
                mobileWebUrl: url,
                webUrl: url,
              },
            },
          ],
        });
    }

  return (
    <div>
      <Button onClick={shareKakao}
        className="btn-warning"
        style={{ width: 170, marginTop: 20, fontFamily: 'Jalnan' }}
      >
        공유하기
      </Button>
    </div>
  );
}

export default KakaoShareButton;