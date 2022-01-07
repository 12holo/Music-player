let currentPlaying; // 현재 재생되고 있는 리스트 아이템의 index
let currentAudio; // 현재 재생되는 있는 리스트 아이템의 audio 태그

let angle = 0;

$(function(){
    // ===== List 생성하기 =====
    // addItem('Happy Life', 'musics/playlist.png', 'musics/00.mp3');
    // addItem('Jarico - Island', 'musics/01.png', 'musics/01.mp3');
    // addItem('Jarico - Landscape', 'musics/02.png', 'musics/02.mp3');


    // ===== SongList 생성하기 =====
    // addSong('쉴 곳 (Shelter)', 'musics/sad/cd-01.png', 'musics/sad/01.mp3', 'O.WHEN(오왠)', '3:52');
    // addSong('오랜만이야 (feat. Zion.T)', 'musics/sad/cd-02.png', 'musics/sad/02.mp3', '로꼬(Loco)', '3:26');
    // addSong('미안해', 'musics/sad/cd-03.png', 'musics/sad/03.mp3', '양다일', '3:48');
    // addSong('아파', 'musics/sad/cd-04.png', 'musics/sad/04.mp3', '양다일', '4:30');
    // addSong('너의 바다', 'musics/sad/cd-05.png', 'musics/sad/05.mp3', '호피폴라(Hoppipolla)', '4:46');
    // addSong('희망고문', 'musics/sad/cd-06.png', 'musics/sad/06.mp3', '이하이(LEE HI)', '3:56');
    // addSong('지친 하루 (With 곽진언, 김필)', 'musics/sad/cd-07.png', 'musics/sad/07.mp3', '윤종신', '4:33');
    // addSong('회상', 'musics/sad/cd-08.png', 'musics/sad/08.mp3', '장범준', '4:26');
    // addSong('오늘', 'musics/sad/cd-09.png', 'musics/sad/09.mp3', 'O.WHEN(오왠)', '3:52');
    // addSong('잠', 'musics/sad/cd-10.png', 'musics/sad/10.mp3', '나이트오프', '4:18');
    
    addSong('쉴 곳 (Shelter)', 'musics/sad/cd-01.png', 'musics/sad/01.mp3', 'O.WHEN(오왠)', '3:52', 
    '쉴 곳이 필요해 늘 기다려왔지'+'<br>'+
    '그늘이 드리운 하늘 바람 들 곳 하나 없어'+'<br>'+
    '옛날이 그리워 스무고개를 넘어와'+'<br>'+
    '나를 반기는 사람들은 슬픔이 되어 버렸네'+'<br>'+
    'Tonight 우린 아프기도 참 많이 아파'+'<br>'+
    '손을 잡고 있는데도 바람 하나 없어도'+'<br>'+
    '비틀거리네'+'<br>'+
    '얼마나 흐려야 맑은 날이 올까'+'<br>'+
    '이런 얘기를 자꾸 하는 난'+'<br>'+
    '쉴 곳이 필요해 쉴 곳이 필요해'+'<br>'+
    '사람은 많은데 우린 다 모르는 거야'+'<br>'+
    '그게 당연해진 요즘엔 그림자가 편해졌어'+'<br>'+
    '다들 어두워 보여 등잔 밑에 숨어서'+'<br>'+
    '아닌 척을 하는 그대도 괜찮은 가요'+'<br>'+
    'Tonight 우린 아프기도 참 많이 아파'+'<br>'+
    '손을 잡고 있는 대도 바람 하나 없어도'+'<br>'+
    '비틀거리네'+'<br>'+
    '얼마 나 흐려야 맑은 날이 올까'+'<br>'+
    '이런 얘기를 자꾸 하는 난'+'<br>'+
    '쉴 곳이 필요해 쉴 곳이 필요해'+'<br>'+
    '난 너의 힘든 모습이 보여 난 너의 슬픈 얼굴이 보여'+'<br>'+
    '난 너의 그리움이 들려서 그만'+'<br>'+
    '우리의 밤은 이렇게도 어두워 내 방에 불빛들이 너무 어두워'+'<br>'+
    '그럼에도 아침은 찾아오는데 쉴 곳이 필요해'+'<br>'+
    '쉴 곳이 필요해 쉴 곳이 필요해'+'<br>'+
    '쉴 곳이 필요해 쉴 곳이 필요해');

    addSong('오랜만이야 (feat. Zion.T)', 'musics/sad/cd-02.png', 'musics/sad/02.mp3', '로꼬(Loco)', '3:26',
    '음 어 오랜만이야'+'<br>'+
    '네가 줬던 영감으로 가사를 쓴 지가'+'<br>'+
    '벌써 몇 년 전이네'+'<br>'+
    '웃으면서 이렇게 이야기할 수 있어'+'<br>'+
    '기뻐 그리고 다행이야'+'<br>'+
    '정신없이 살다 보니 시간이 너무 빨라'+'<br>'+
    '심장 위에 쌓인 먼지'+'<br>'+
    '서른 즈음에는 아저씨들의 노래였는데'+'<br>'+
    '이젠 가사 하나하나 죄다 와닿기만 해'+'<br>'+
    '요즘도 여전히 작업실 아님 무대 위에'+'<br>'+
    '달라진 건 더 이상 쫄지 않아도 돼 모든 price tags'+'<br>'+
    '전부 다 덕분이라고 생각해'+'<br>'+
    '언제 한번 밥이라도 사야 하는데'+'<br>'+
    '그땐 아무것도 해줄 수가 없어서'+'<br>'+
    '마시던 맥주잔을 눈물로 채웠었지'+'<br>'+
    '오랜만이야 웃음만 나와'+'<br>'+
    '거울 같아 너를 보면 어린 시절 내가 떠올라'+'<br>'+
    '오랜만이야 오랜만이야'+'<br>'+
    '손가락을 접어 이게 얼마 만이야'+'<br>'+
    '언제 봐도 넌 어제 본 것 같아'+'<br>'+
    '어 맞아 그때 들려줬던 나플라가 그 나플라야'+'<br>'+
    '웬일로 TV를 다 봤네'+'<br>'+
    '친하지는 않고 나도 팬이야'+'<br>'+
    '궁금한 게 많네 편안하게 물어봐'+'<br>'+
    '여기도 똑같아 보이는 게 다가 아니야'+'<br>'+
    '돈으론 뭐든 사재끼지 조작이 가능해'+'<br>'+
    '내 친구도 제안받은 적 있고 그걸 작업이라 부른대'+'<br>'+
    '난 궁금해 그들도 나처럼 무대 위에서 행복을 느끼는지'+'<br>'+
    '사람들이 노랠 따라 부를 때 내가 느끼는 것과 같은 기분인지'+'<br>'+
    '아 입대가 많이 늦었지 아마도'+'<br>'+
    '2월 7일에 들어갈 것 같아 논산으로'+'<br>'+
    '반가웠어 계속 잘 지냈음 좋겠다'+'<br>'+
    '우린 언제 다시 또 보게 될까'+'<br>'+
    '오랜만이야 웃음만 나와'+'<br>'+
    '거울 같아 너를 보면 어린 시절 내가 떠올라'+'<br>'+
    '오랜만이야 오랜만이야'+'<br>'+
    '손가락을 접어 이게 얼마 만이야'+'<br>'+
    '언제 봐도 넌 어제 본 것 같아'+'<br>'+
    '어제 본 것 같아'+'<br>'+
    '하지 못한 말 다 하게 될 것 같아'+'<br>'+
    '그땐 몰랐지만'+'<br>'+
    '함께 한 시간은 다 소중한 것 같아'+'<br>'+
    '그 계절은 여기'+'<br>'+
    '아직도 남아 있는데'+'<br>'+
    '다 기억 못 해도 돼'+'<br>'+
    '내가 기억할게'+'<br>'+
    '오랜만이야 웃음만 나와'+'<br>'+
    '거울 같아 너를 보면 어린 시절 내가 떠올라'+'<br>'+
    '오랜만이야 오랜만이야'+'<br>'+
    '손가락을 접어 이게 얼마 만이야'+'<br>'+
    '언제 봐도 넌 어제 본 것 같아' );

    addSong('미안해', 'musics/sad/cd-03.png', 'musics/sad/03.mp3', '양다일', '3:48',
    '습관처럼 떠오르던'+'<br>'+
    '눈에 아른거리던 네 모습이'+'<br>'+
    '더는 그려지지 않아'+'<br>'+
    '거짓뿐이었던 너의 말과'+'<br>'+
    '너도 모르는 너의 모습들을'+'<br>'+
    '더는 원치 않아'+'<br>'+
    '단 한 번뿐인 이별에도 말하지 못한'+'<br>'+
    '너의 진심을 이젠 다 알 것 같은데'+'<br>'+
    '미안해 더는 널 바라보지 않아'+'<br>'+
    '미안해 더는 나 후회하지 않아'+'<br>'+
    '다시 널 마주할 그 순간에도'+'<br>'+
    '널 사랑하지 않아 말할 수 있어'+'<br>'+
    '수화기 너머 들리는'+'<br>'+
    '지친 날 위로하던 네 목소리'+'<br>'+
    '더는 그려지지 않아'+'<br>'+
    '함께 쌓았던 추억과'+'<br>'+
    '그 많던 말들이 아쉬워서'+'<br>'+
    '전하지 못한 말들이'+'<br>'+
    '미안해 더는 널 바라보지 않아'+'<br>'+
    '미안해 더는 나 후회하지 않아'+'<br>'+
    '다시 널 마주할 그 순간에도'+'<br>'+
    '널 사랑하지 않아 말할 수 있어'+'<br>'+
    '어색하게 만난 우리 시작도'+'<br>'+
    '처음 고백했던 그 순간들도'+'<br>'+
    '다 어제 같은 일인데'+'<br>'+
    '누굴 만나 사랑한다는 게'+'<br>'+
    '너를 만나 내가 변해간단 게'+'<br>'+
    '이젠 없어'+'<br>'+
    '미안해 더는 널 사랑하지 않아'+'<br>'+
    '미안해 더는 나 후회하지 않아'+'<br>'+
    '힘든 시간들에 지쳐갈 때도'+'<br>'+
    '이렇게 해야만 내가 편할 것 같아');

    addSong('아파', 'musics/sad/cd-04.png', 'musics/sad/04.mp3', '양다일', '4:30',
    '처음부터 그랬지 서로 닮은 게 많아'+"<br>"+
    '사소한 말투 행동 웃는 표정까지'+"<br>"+
    '자연스럽게 우린 가까워져'+"<br>"+
    '어색할 틈도 없이 매일 같이 만났지'+"<br>"+
    '끊길 새도 없이 쉬지 않는 얘기가'+"<br>"+
    '위로받는 것 같아서'+"<br>"+
    '손을 마주 잡으면 마음이 설레와서'+"<br>"+
    '함께 거릴 걸으면 비추는 세상이'+"<br>"+
    '전부 같았던 그런 기분에'+"<br>"+
    '멀어져 가는 뒷모습에서'+"<br>"+
    '잊고 지냈던 우리를 봤어'+"<br>"+
    '바라만 보는데도'+"<br>"+
    '마음이 너무 아파'+"<br>"+
    '그 누구보다 가까웠는데'+"<br>"+
    '이제 더 이상 볼 수가 없어'+"<br>"+
    '그 이유만으로 아파'+"<br>"+
    '사실 나도 모르는 게 너무 많아'+"<br>"+
    '요즘 따라 내가 왜 이러는 건지'+"<br>"+
    '자연스럽게 변해가나 봐'+"<br>"+
    '손을 마주 잡으면 어색해진 기분에'+"<br>"+
    '함께한 순간마다 버겁기만 해서'+"<br>"+
    '잠시만 네가 없었으면 해'+"<br>"+
    '멀어져 가는 뒷모습에서'+"<br>"+
    '잊고 지냈던 우리를 봤어'+"<br>"+
    '바라만 보는데도'+"<br>"+
    '마음이 너무 아파'+"<br>"+
    '그 누구보다 가까웠는데'+"<br>"+
    '이제 더 이상 볼 수가 없어'+"<br>"+
    '그 이유만으로 아파'+"<br>"+
    '잠깐일 거야 (그럴 때가 있잖아)'+"<br>"+
    '남은 시간을 (함께 지낼 텐데 우린)'+"<br>"+
    '당연한 듯이 말해'+"<br>"+
    '난 널'+"<br>"+
    '너무 미안해 붙잡고 싶어'+"<br>"+
    '돌아서 버린 너를 보면서'+"<br>"+
    '말할 수가 없었어'+"<br>"+
    '마음이 너무 아파'+"<br>"+
    '그 누구보다 가까웠는데'+"<br>"+
    '멈춰 선 채로 무너지고 있어'+"<br>"+
    '두 번 다시는 볼 수 없는걸'+"<br>"+
    '그 하나만으로 아파');

    addSong('너의 바다', 'musics/sad/cd-05.png', 'musics/sad/05.mp3', '호피폴라(Hoppipolla)', '4:46',
    '우리 바다 갈까'+'<br>'+
    '오늘 하늘이 어떻든'+'<br>'+
    '그냥 단둘이서 저 멀리 다녀올까'+'<br>'+
    '해가 지면 어두운 밤이 찾아오면'+'<br>'+
    '우리 늘 그렇듯 밤새 떠들다 잘까'+'<br>'+
    '난 절대 변하지 않을거야'+'<br>'+
    '이토록 간절하니까'+'<br>'+
    '네 맘 지쳐 겨울비 내리면 부디'+'<br>'+
    '이 밤, 우리, 지금 기억해 줘'+'<br>'+
    '나는 눈을 감아 너의 맘속 바다'+'<br>'+
    '깊은 곳 한편에 잠겨간다'+'<br>'+
    '네가 있는 곳으로'+'<br>'+
    '너는 깊은 바달 홀로 걷고 있었다'+'<br>'+
    '이제 널 놓지 않아'+'<br>'+
    '난 떠나지 않아'+'<br>'+
    '이제서야 이제서야'+'<br>'+
    '너의 바다가 보인다'+'<br>'+
    '우리 걸어볼까'+'<br>'+
    '아직 바람은 차지만'+'<br>'+
    '잡은 두 손은 왜 이렇게 따뜻할까'+'<br>'+
    '우린 서로 별다른 말이 없지만'+'<br>'+
    '오늘은 왜일까 전부 알 것만 같아'+'<br>'+
    '난 절대 변하지 않을거야'+'<br>'+
    '이토록 간절하니까'+'<br>'+
    '네 맘 지쳐 겨울비 내리면 부디'+'<br>'+
    '이 밤, 우리, 지금 기억해 줘'+'<br>'+
    '나는 눈을 감아 너의 맘속 바다'+'<br>'+
    '깊은 곳 한편에 잠겨간다'+'<br>'+
    '네가 있는 곳으로'+'<br>'+
    '너는 깊은 바달 홀로 걷고 있었다'+'<br>'+
    '이제 널 놓지 않아'+'<br>'+
    '난 떠나지 않아'+'<br>'+
    '나는 너의 바다 그 위에 비가 될게'+'<br>'+
    '언제라도 내려와 네게 잠겨'+'<br>'+
    '널 안아줄 수 있게'+'<br>'+
    '햇살이 널 비출 때 나에게 웃어줄래'+'<br>'+
    '이제 널 놓지 않아'+'<br>'+
    '난 떠나지 않아'+'<br>'+
    '이제서야 이제서야'+'<br>'+
    '너의 바다가 보인다'+'<br>'+
    '우리 바다 갈까');

    addSong('희망고문', 'musics/sad/cd-06.png', 'musics/sad/06.mp3', '이하이(LEE HI)', '3:56',
    "아무 생각 없이 건넨듯한 한마디에"+"<br>"+
    "1밤새 생각에 잠겨 I think I'm going crazy"+"<br>"+
    "술김에 한 안부 인사뿐일까"+"<br>"+
    "답을 한참 적다가 지운다"+"<br>"+
    "그댄 날 참 쉽게도 지웠지만"+"<br>"+
    "망상일까 요즘은 그대 사진들 속에"+"<br>"+
    "나만 알아볼 수 있는 쓸쓸함이 보여"+"<br>"+
    "아냐 이럼 안되는 거지"+"<br>"+
    "내가 이러길 바라겠지"+"<br>"+
    "언제나 닿을 수 없는 곳에서만 손 내미는 너"+"<br>"+
    "그대여 내게 돌아와 줄 수 없다면"+"<br>"+
    "돌아봐도 안 돼요"+"<br>"+
    "Baby I will try to let you go"+"<br>"+
    "그대여 나는 죽어도 안 되겠다면"+"<br>"+
    "차라리 날 숨 쉬게 하지도 마요"+"<br>"+
    "아직도 난 그대 안에"+"<br>"+
    "마주칠까봐 애써 나를 피하던 니가"+"<br>"+
    "요즘 따라 왜 어딜 가도 보이는 걸까"+"<br>"+
    "우연을 엮어 운명을 만들고"+"<br>"+
    "희망고문인 걸 알면서도"+"<br>"+
    "여전히 닿을 수 없는"+"<br>"+
    "너에게 손을 내미는 나"+"<br>"+
    "그대여 내게 돌아와 줄 수 없다면"+"<br>"+
    "돌아봐도 안 돼요"+"<br>"+
    "Baby I will try to let you go"+"<br>"+
    "그대여 나는 죽어도 안 되겠다면"+"<br>"+
    "차라리 날 숨 쉬게 하지도 마요"+"<br>"+
    "아직도 난 그대 안에 사는데"+"<br>"+
    "그댄 내가 없어도 잘 살 수 있으면서 왜 날 이렇게"+"<br>"+
    "괴롭히고 미치게 만드나요"+"<br>"+
    "Baby please let me go"+"<br>"+
    "Don't you know"+"<br>"+
    "I'm dying"+"<br>"+
    "Oh god"+"<br>"+
    "날 놓아줄 수 없다면 내게 돌아와요"+"<br>"+
    "그대여 내게 돌아와 줄 수 없다면"+"<br>"+
    "돌아봐도 안 돼요"+"<br>"+
    "Baby I will try to let you go"+"<br>"+
    "그대여 나는 죽어도 안 되겠다면"+"<br>"+
    "차라리 날 숨 쉬게 하지도 마요"+"<br>"+
    "아직도 난 그대 안에 살아요");

    addSong('지친 하루 (With 곽진언, 김필)', 'musics/sad/cd-07.png', 'musics/sad/07.mp3', '윤종신', '4:33',
    '거기까지라고 누군가 툭 한마디 던지면'+'<br>'+
    '그렇지 하고 포기할 것 같아'+'<br>'+
    '잘한 거라 토닥이면 왈칵 눈물이 날 것만 같아'+'<br>'+
    '발걸음은 잠시 쉬고 싶은 걸'+'<br>'+
    '하지만 그럴 수 없어 하나뿐인 걸 지금까지 내 꿈은'+'<br>'+
    '오늘 이 기분 때문에 모든 걸 되돌릴 수 없어'+'<br>'+
    '비교하지 마 상관하지 마 누가 그게 옳은 길이래'+'<br>'+
    '옳은 길 따위는 없는 걸 내가 택한 이곳이 나의 길'+'<br>'+
    '미안해 내 사랑 너의 자랑이 되고 싶은데'+'<br>'+
    '지친 내 하루 위로만 바래'+'<br>'+
    '날 믿는다 토닥이면 왈칵 눈물이 날 것만 같아'+'<br>'+
    '취한 한숨에 걸터앉은 이 밤'+'<br>'+
    '해낼게 믿어준 대로 하나뿐인 걸 지금까지 내 꿈은'+'<br>'+
    '오늘 이 기분 때문에 모든 걸 되돌릴 수 없어'+'<br>'+
    '비교하지 마 상관하지 마 누가 그게 옳은 길이래'+'<br>'+
    '옳은 길 따위는 없는 걸 내가 좋은 그곳이 나의 길'+'<br>'+
    '부러운 친구의 여유에 질투하지는 마'+'<br>'+
    '순서가 조금 다른 것뿐'+'<br>'+
    '딱 한 잔만큼의 눈물만 뒤끝 없는 푸념들로'+'<br>'+
    '버텨줄래 그 날이 올 때까지'+'<br>'+
    '믿어준 대로 해왔던 대로 처음 꿈꿨던 대로'+'<br>'+
    '오늘 이 기분 때문에 모든 걸 되돌릴 수 없어'+'<br>'+
    '비교하지 마 상관하지 마 누가 그게 옳은 길이래'+'<br>'+
    '옳은 길 따위는 없는 걸 내가 걷는 이곳이 나의 길'+'<br>'+
    '옳은 길 따위는 없는 걸'+'<br>'+
    '내가 걷는 이곳이 나의 길' );

    addSong('회상', 'musics/sad/cd-08.png', 'musics/sad/08.mp3', '장범준', '4:26',
    "길을 걸었지 누군가 옆에 있다고"+"<br>"+
    "느꼈을 때 나는 알아버렸네"+"<br>"+
    "이미 그대 떠난 후라는 걸"+"<br>"+
    "나는 혼자 걷고 있던 거지"+"<br>"+
    "갑자기 바람이 차가와 지네"+"<br>"+
    "마음은 얼고 나는 그 곳에 서서"+"<br>"+
    "조금도 움직일 수 없었지"+"<br>"+
    "마치 얼어버린 사람처럼"+"<br>"+
    "나는 놀라서 있던거지"+"<br>"+
    "달빛이 숨어 흐느끼고 있네"+"<br>"+
    "떠나버린 그 사람 생각나네"+"<br>"+
    "돌아선 그 사람 생각나네"+"<br>"+
    "묻지 않았지 왜 나를 떠나느냐고"+"<br>"+
    "하지만 마음 너무 아팠네"+"<br>"+
    "이미 그대 돌아서 있는 걸"+"<br>"+
    "혼자 어쩔수 없었지"+"<br>"+
    "미운건 오히려 나였어"+"<br>"+
    "떠나버린 그 사람 생각나네"+"<br>"+
    "돌아선 그 사람 생각나네"+"<br>"+
    "길을 걸었지 누군가 옆에 있다고"+"<br>"+
    "느꼈을 때 나는 알아버렸네"+"<br>"+
    "이미 그대 떠난 후라는 걸"+"<br>"+
    "나는 혼자 걷고 있던 거지"+"<br>"+
    "갑자기 바람이 차가와 지네"+"<br>"+
    "묻지 않았지 왜 나를 떠나느냐고"+"<br>"+
    "하지만 마음 너무 아팠네"+"<br>"+
    "이미 그대 돌아서 있는 걸"+"<br>"+
    "혼자 어쩔수 없었지"+"<br>"+
    "미운건 오히려 나였어"+"<br>"+
    "갑자기 바람이 차가와 지네" );

    addSong('오늘', 'musics/sad/cd-09.png', 'musics/sad/09.mp3', 'O.WHEN(오왠)', '3:52',
    '새벽4시 잠들지 않아'+'<br>'+
    '돌아갈 수 없는 시간들을 생각하곤 해'+'<br>'+
    '습관처럼 마음이 아려와'+'<br>'+
    '집으로 가는 길은 자꾸만 멀어지는데'+'<br>'+
    '저만치 멀어지는 찾을 수 없는 잡을 수 없는'+'<br>'+
    'Take it easy'+'<br>'+
    '나만 왜 이렇게 힘든 건가요'+'<br>'+
    '오늘밤이'+'<br>'+
    '왜 오늘의 나를 괴롭히죠'+'<br>'+
    '아무것도 한게 없는 하루인데'+'<br>'+
    '나는 왜 이렇게 눈치만 보고 있는 건지'+'<br>'+
    '아쉬움은 나를 찾아 다가오네'+'<br>'+
    '창문 밖은 벌써 따뜻한데'+'<br>'+
    'Take it easy'+'<br>'+
    '나만 왜 이렇게 힘든 건가요'+'<br>'+
    '오늘밤이'+'<br>'+
    '왜 오늘의 나를 괴롭히죠'+'<br>'+
    '한번만 다시 또 일어설 수 있나요 음음음'+'<br>'+
    '오늘도 슬픔에 잠겨 밤을 지우고 있나요'+'<br>'+
    'Take it easy'+'<br>'+
    '나만 왜 이렇게 힘든 건가요'+'<br>'+
    '오늘밤이'+'<br>'+
    '왜 오늘의 나를 괴롭히죠'+'<br>'+
    'Take it easy'+'<br>'+
    '왜 오늘의 나를 괴롭히죠' );

    addSong('잠', 'musics/sad/cd-10.png', 'musics/sad/10.mp3', '나이트오프', '4:18',
    '점점 좁아지던 골목의 막힌 끝에 서서'+'<br>'+
    '외투 위의 먼지를 털다 웃었어'+'<br>'+
    '벽에 기대어 앉으며 짐을 내려놓으니'+'<br>'+
    '한 줌의 희망이 그토록 무거웠구나'+'<br>'+
    '탓할 무언가를 애써 떠올려봐도'+'<br>'+
    '오직 나만의 어리석음 뿐이었네'+'<br>'+
    '나 조금 누우면 안 될까'+'<br>'+
    '잠깐 잠들면 안 될까'+'<br>'+
    '날도 저무는데'+'<br>'+
    '아무도 없는데'+'<br>'+
    '나 조금 누우면 안 될까'+'<br>'+
    '이대로 잠들면 안 될까'+'<br>'+
    '따뜻한 꿈속에서'+'<br>'+
    '조금 쉬고 올 거야'+'<br>'+
    '많은 게 달라지고 변하고 시들어 가고'+'<br>'+
    '애써 감춰온 나의 지친 마음도'+'<br>'+
    '더는 필요 없을 자존심을 내려놓으니'+'<br>'+
    '이젠 나 자신을 가엾어해도 되겠지'+'<br>'+
    '탓할 무언가를 애써 떠올려봐도'+'<br>'+
    '오직 나만의 어리석음 뿐이었네'+'<br>'+
    '나 조금 누우면 안 될까'+'<br>'+
    '잠깐 잠들면 안 될까'+'<br>'+
    '날도 저무는데'+'<br>'+
    '아무도 없는데'+'<br>'+
    '나 조금 누우면 안 될까'+'<br>'+
    '이대로 잠들면 안 될까'+'<br>'+
    '따뜻한 꿈속에서'+'<br>'+
    '못다한 악수와 건배를 나누며'+'<br>'+
    '이제 와 뭘 어쩌겠냐고 웃으며 웃으며'+'<br>'+
    '모두 보고 싶다'+'<br>'+
    '나 조금 누우면 안 될까'+'<br>'+
    '잠깐 잠들면 안 될까'+'<br>'+
    '날도 저무는데'+'<br>'+
    '아무도 없는데'+'<br>'+
    '나 조금 누우면 안 될까'+'<br>'+
    '이대로 잠들면 안 될까'+'<br>'+
    '따뜻한 꿈속에서'+'<br>'+
    '조금 쉬고 올 거야' );



    setPlayer(0); // 1번 곡으로 초기값 설정

    // ===== 재생 이벤트 등록 =====
    $('.prev').click(function(){
        playPrev();
       
    });
    $('.pause').click(function(){
        pauseAndPlay();

        // $('.player-img').toggleClass('player-rotate');

        $('.pause').parent().toggleClass('plaingmusic');
        if( $('.pause').parent().hasClass('plaingmusic')){
            $('.pause').html('<i class="fas fa-pause"></i>')
            $('.iconcon').fadeIn(100)
            $('.iconcon-big').fadeIn(100)
            $('.iconcon-stop').fadeOut(100)
            $('.iconcon-big-stop').fadeOut(100)

            // $('.player-img').css('transform', 'none')
            // $('.player-img').addClass('player-rotate')
           
        }else{
            $('.pause').html('<i class="fas fa-play"></i>')
            $('.iconcon').fadeOut(100)
            $('.iconcon-big').fadeOut(100)
            $('.iconcon-stop').fadeIn(100)
            $('.iconcon-big-stop').fadeIn(100)

            // let matrix = $('.player-img').css('transform')
            // $('.player-img').removeClass('player-rotate')
            // $('.player-img').css('transform', matrix)
        }


    });
    $('.next').click(function(){
        playNext();
        $('.iconcon').fadeIn(100)
            $('.iconcon-big').fadeIn(100)
            $('.iconcon-stop').fadeOut(100)
            $('.iconcon-big-stop').fadeOut(100)
       
    });


    // ===== 원형 프로그래스바 채우기 =====
    setInterval(function(){
        let progress = getProgress() * 360 ;
        // console.log(progress);
        $('#bar-progress').css({'transform': 'rotate('+ progress +'deg)'});
        $('#bar-progress-ball').css({'transform': 'rotate('+ progress +'deg)'})
    }, 1000)

    setInterval(function(){
        if(!currentAudio[0].paused){
            angle += 0.5;
            $('.player-img').css('transform','scale(0.9) translate(-55%,0) rotate(' + angle + 'deg)');
        }
        
    }, 10)
})




// // ===== List에 아이템을 추가하는 함수 =====
// function addItem(title, image, audio){
//     let newItem = $('#example_item').clone(true);
//     newItem.removeProp('id');
//     newItem.show();

//     // 팀별로 리스트 아이템에 맞는 클래스 정보를 찾아서 교체해주기
//     newItem.find('.item-title').text(title);
//     newItem.find('.item-img').css('background-image', "url('" + image + "')");
//     newItem.find('.item-audio > source').attr('src', audio);
    
//     // 리스트 아이템 클릭시 이벤트 등록
//     newItem.click(function(){
//         currentAudio[0].pause(); // 재생중인 오디오 중지
//         currentAudio[0].currentTime = 0; // 재생중인 오디오 위치 초기화
//         $(this).find('.item-audio')[0].play(); // 선택된 오디오 재생

//         setPlayer( $(this).index() ); // setPlayer 함수 호출 (플레이어로 정보 전달)
//     })

//     // 리스트에 아이템 추가
//     $('#music_list').append(newItem);
// }


function addSong(title, image, audio, artist, time, lyrics){
    let newItem = $('#example_item2').clone(true);
    newItem.removeProp('id');
    newItem.show();

    // 팀별로 리스트 아이템에 맞는 클래스 정보를 찾아서 교체해주기
    newItem.find('.song-title').text(title);
    newItem.find('.album-cover').css('background-image', "url('" + image + "')");
    newItem.find('.item-audio > source').attr('src', audio);
    newItem.find('.song-artist').text(artist);
    newItem.find('.running-time').text(time);
    newItem.find('.lyrics').text(lyrics);
    
    // 리스트 아이템 클릭시 이벤트 등록
    newItem.click(function(){
        currentAudio[0].pause(); // 재생중인 오디오 중지
        currentAudio[0].currentTime = 0; // 재생중인 오디오 위치 초기화
        $(this).find('.item-audio')[0].play(); // 선택된 오디오 재생

        setPlayer( $(this).index() ); // setPlayer 함수 호출 (플레이어로 정보 전달)
    })

    // 리스트에 아이템 추가
    $('#song-item-box').append(newItem);
}


// ===== SongList 에서 Player에 정보 넣는 함수 =====
function setPlayer(index){
    currentPlaying = index;
    currentAudio = $('#song-item-box > .song-item').eq(index).find('.item-audio');
    

    // 아이템에 들어가는 정보에 따라 변경
    let title = $('#song-item-box > .song-item').eq(index).find('.song-title').text();
    let artist = $('#song-item-box > .song-item').eq(index).find('.song-artist').text();
    let image = $('#song-item-box > .song-item').eq(index).find('.album-cover').css('background-image');

    $('.player-title').text(title)
    $('.player-artist').text(artist)
    $('.player-img').css('background-image', image);


    // 테스트
    let lyrics = $('#song-item-box > .song-item').eq(index).find('.lyrics').text();
    $('.scroll').html("<h4>" +lyrics +"</h4>");
    

}


// ===== Player에 정보 넣는 함수 =====
// function setPlayer(index){
//     currentPlaying = index;
//     currentAudio = $('#music_list > .item').eq(index).find('.item-audio');
    

//     // 아이템에 들어가는 정보에 따라 변경
//     let title = $('#music_list > .item').eq(index).find('.item-title').text();
//     let image = $('#music_list > .item').eq(index).find('.item-img').css('background-image');

//     $('.player-title').text(title)
//     $('.player-img').css('background-image', image);
// }

// ===== SongList 재생 컨트롤 함수 =====
function playPrev(){
    currentPlaying--;
    if(currentPlaying < 0 ) currentPlaying = $('#song-item-box > .song-item').length - 1;

    $('#song-item-box > .song-item').eq(currentPlaying).click();
}

function pauseAndPlay(){
    if(currentAudio[0].paused) currentAudio[0].play();
    else currentAudio[0].pause();
}

function playNext(){
    currentPlaying++;
    if(currentPlaying >= $('#song-item-box > .song-item').length ) currentPlaying = 0;

    $('#song-item-box > .song-item').eq(currentPlaying).click();
}

function getProgress(){
    return currentAudio[0].currentTime / currentAudio[0].duration;
}



// ===== 재생 컨트롤 함수 =====
// function playPrev(){
//     currentPlaying--;
//     if(currentPlaying < 0 ) currentPlaying = $('#music_list > .item').length - 1;

//     $('#music_list > .item').eq(currentPlaying).click();
// }

// function pauseAndPlay(){
//     if(currentAudio[0].paused) currentAudio[0].play();
//     else currentAudio[0].pause();
// }

// function playNext(){
//     currentPlaying++;
//     if(currentPlaying >= $('#music_list > .item').length ) currentPlaying = 0;

//     $('#music_list > .item').eq(currentPlaying).click();
// }

// function getProgress(){
//     return currentAudio[0].currentTime / currentAudio[0].duration;
// }




// 
$('.back').click(function(){
  location.href = "index.html";
  // $('.list-box').fadeOut(500);
});


$('.song-item').click(function(){ 
    currentAudio[0].pause(); // 재생중인 오디오 중지
        currentAudio[0].currentTime = 0; // 재생중인 오디오 위치 초기화
        $(this).find('.item-audio')[0].play(); // 선택된 오디오 재생

        setPlayer( $(this).index() ); // setPlayer 함수 호출 (플레이어로 정보 전달)
        $('.list-box').fadeOut(500);
        
        $('.pause').parent().addClass('plaingmusic');
        if( $('.pause').parent().hasClass('plaingmusic')){
          $('.pause').html('<i class="fas fa-pause"></i>')
        }else{
            $('.pause').html('<i class="fas fa-play"></i>')
        }

        $('.iconcon').fadeIn(100)
        $('.iconcon-big').fadeIn(100)
        $('.iconcon-stop').fadeOut(100)
        $('.iconcon-big-stop').fadeOut(100)
     
});

$('.list').click(function(){
  // location.href = "play.html";
  $('.list-box').fadeToggle(500);
  
  
});

// $('.song-item').click(function(){
//   $(this).find('.list-box').css("opacity", "0");
// });


// $('.player-icons pause').click(function(){
//  $('.iconcon').fadeOut(500);
// })

function setup(){
    createCanvas(370, 370);
}
function draw(){
    clear();
    noFill();
    stroke('#E7E7E7');
    strokeWeight(2);
    strokeCap(SQUARE);
    circle(185, 185, 340);
    
    noFill();
    stroke('#44679D');
    strokeWeight(5);
    strokeCap(SQUARE);
    let angle =  getProgress() * 2*PI;
    arc(185, 185, 340, 340, -PI/2, -PI/2 + angle);

    let x = 185 + 170*cos(-PI/2 + angle);
    let y = 185 + 170*sin(-PI/2 + angle);
    noStroke();
    fill('#44679D');
    circle(x, y, 20);
    
}

// =============팁 추가=============

$('.close-btn').click(function(){
    $('#feeling-tips').fadeOut(500);
  });

$('.feeling').click(function(){
  $('#feeling-tips').fadeIn(500);
});