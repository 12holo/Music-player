let currentPlaying; // 현재 재생되고 있는 리스트 아이템의 index
let currentAudio; // 현재 재생되는 있는 리스트 아이템의 audio 태그

let angle = 0;

$(function(){
    // ===== List 생성하기 =====
    // addItem('Happy Life', 'musics/playlist.png', 'musics/00.mp3');
    // addItem('Jarico - Island', 'musics/01.png', 'musics/01.mp3');
    // addItem('Jarico - Landscape', 'musics/02.png', 'musics/02.mp3');


    // ===== SongList 생성하기 =====
    // addSong('나만 알고 싶다', 'musics/happy/cd-01.png', 'musics/happy/01.mp3', '소란(SORAN)', '3:31');
    // addSong('있어주면 (Be with me)', 'musics/happy/cd-02.png', 'musics/happy/02.mp3', '소란(SORAN)', '4:37');
    // addSong('언젠', 'musics/happy/cd-03.png', 'musics/happy/03.mp3', 'O.WHEN(오왠)', '3:31');
    // addSong('신호등', 'musics/happy/cd-04.png', 'musics/happy/04.mp3', '이무진', '3:51');
    // addSong('Let`s!', 'musics/happy/cd-05.png', 'musics/happy/05.mp3', '호피폴라(Hoppipolla)', '3:15');
    // addSong('일어났어?', 'musics/happy/cd-06.png', 'musics/happy/06.mp3', '안녕하신가영 & 원필(DAY6)', '3:19');
    // addSong('Welcome (feat. Daowl)', 'musics/happy/cd-07.png', 'musics/happy/07.mp3', '공기남(Airman)', '3:06');
    // addSong('행운을 빌어', 'musics/happy/cd-08.png', 'musics/happy/08.mp3', '전기뱀장어', '2:26');
    
    addSong('나만 알고 싶다', 'musics/happy/cd-01.png', 'musics/happy/01.mp3', '소란(SORAN)', '3:31', 
    '요즘 들어 벌써 몇 번'+"<br>"+
    '네 얘기를 들어'+"<br>"+
    '예쁘고 사람 참 괜찮다고'+"<br>"+
    '그건 누구보다 내가'+"<br>"+
    '확실하게 알지'+"<br>"+
    '그런데 이상해, 왜 이래?'+"<br>"+
    '나만 알고 싶다'+"<br>"+
    '나만 보고 싶다'+"<br>"+
    '아무도 못 보게 '+"<br>"+
    '널 감추고 싶다'+"<br>"+
    '자꾸 보고 싶다'+"<br>"+
    '안아보고 싶다'+"<br>"+
    '이 모든 감정 '+"<br>"+
    '나만 느끼고 싶다'+"<br>"+
    '넘치는 매력들'+"<br>"+
    '다 감추고서 살았데'+"<br>"+
    '이런 나라서 미안해'+"<br>"+
    '너만 보면 나도 모르게'+"<br>"+
    '이기적이게 돼'+"<br>"+
    '나만 알고 싶다'+"<br>"+
    '웃을 때 하는 손짓'+"<br>"+
    '너만의 걸음걸이'+"<br>"+
    '가방을 드는 건 항상 왼손'+"<br>"+
    '알면 알수록 미쳐'+"<br>"+
    '너만의 디테일'+"<br>"+
    '그런데 이상해, 나 왜이래?'+"<br>"+
    '나만 알고,'+"<br>"+
    '나만 보고 싶다'+"<br>"+
    '아무도 못 보게 '+"<br>"+
    '널 감추고 싶다'+"<br>"+
    '자꾸 보고 싶다'+"<br>"+
    '안아보고 싶다'+"<br>"+
    '이 모든 감정 '+"<br>"+
    '나만 느끼고 싶다'+"<br>"+
    '어떻게 사람들이 모르게'+"<br>"+
    '어떻게 오랫동안 이렇게'+"<br>"+
    '넘치는 매력들'+"<br>"+
    '다 감추고서 살았데'+"<br>"+
    '이런 나라서 미안해'+"<br>"+
    '너만 보면 나도 모르게'+"<br>"+
    '이기적이게 돼'+"<br>"+
    '나만 알고 싶다'+"<br>"+
    '나만 알고 싶다'+"<br>"+
    '나만 보고 싶다'+"<br>"+
    '널 감추고 싶다'+"<br>"+
    '자꾸 보고 싶다'+"<br>"+
    '세상에 다른 남잔'+"<br>"+
    '없음 좋겠따'+"<br>"+
    '안아보고 싶다'+"<br>"+
    '어떻게 사람들이 모르게'+"<br>"+
    '어떻게 오랫동안 이렇게'+"<br>"+
    '넘치는 매력들'+"<br>"+
    '다 감추고서 살았데'+"<br>"+
    '이런 나라서 미안해'+"<br>"+
    '너만 보면 나도 모르게'+"<br>"+
    '이기적이게 돼'+"<br>"+
    '나만 알고 싶다'+"<br>");

    addSong('있어주면 (Be with me)', 'musics/happy/cd-02.png', 'musics/happy/02.mp3', '소란(SORAN)', '4:37',
    '말하면'+"<br>"+
    '나 혼자 너를 좋아하는'+"<br>"+
    '이것마저 못하게 될지도'+"<br>"+
    '모르니까'+"<br>"+
    '오늘도 그냥 웃으며 안녕'+"<br>"+
    '몇번을'+"<br>"+
    '망설이다가 연락했어'+"<br>"+
    '네 웃음 가슴이 아프게 좋았어'+"<br>"+
    '어쩌다 둘이 남게 됐던 날'+"<br>"+
    '내가 미쳤었나 봐'+"<br>"+
    '이번 주 내내 날씨가 좋다던데'+"<br>"+
    '혹시 너도 좋다면'+"<br>"+
    '그대와 둘이 걷는다면'+"<br>"+
    '지금 내 옆에 네가 있어주면'+"<br>"+
    '차가운 밤도'+"<br>"+
    '어두웠던 시간도'+"<br>"+
    '괜찮을 것 같은데'+"<br>"+
    '하지만 혼자 걷고 있어'+"<br>"+
    '내일도 너를 볼 수 있으려면'+"<br>"+
    '참을 수 없는 마음도'+"<br>"+
    '숨길 수 있으니까'+"<br>"+
    '오늘도 두 발 옆에'+"<br>"+
    '누군가 너에 대해 묻던 날'+"<br>"+
    '뭐에 홀렸었나 봐'+"<br>"+
    '너의 좋은 점 사소한 습관까지'+"<br>"+
    '그냥 친구 사인데'+"<br>"+
    '그대와 둘이 걷는다면'+"<br>"+
    '지금 내 옆에 네가 있어주면'+"<br>"+
    '차가운 밤도'+"<br>"+
    '어두웠던 시간도'+"<br>"+
    '괜찮을 것 같은데'+"<br>"+
    '하지만 혼자 걷고 있어'+"<br>"+
    '내일도 너를 볼 수 있으려면'+"<br>"+
    '참을 수 없는 마음도'+"<br>"+
    '숨길 수 있으니까'+"<br>"+
    '오늘도 두 발 옆에'+"<br>"+
    '언젠가'+"<br>"+
    '누군가를 만난다면'+"<br>"+
    '꼭 너 같으면 좋겠단 말'+"<br>"+
    '그럼 나는 어떡하면돼'+"<br>"+
    '자기전에 늘 통화하고'+"<br>"+
    '중요한 날엔 내가 깨워주면'+"<br>"+
    '외로운 날도'+"<br>"+
    '혼자였던시간도'+"<br>"+
    '잊혀질 것 같은데'+"<br>"+
    '힘들떈 서로 안아주고'+"<br>"+
    '맛있는 집에 같이 가고싶어'+"<br>"+
    '숨길 수만 있다면'+"<br>"+
    '이렇게 너의 곁에'+"<br>"+
    '머물 수 있을 텐데'+"<br>"+
    '그대와 둘이 (그대론데)'+"<br>"+
    '지금 내 옆에(있어주면)'+"<br>"+
    '그대와 둘이'+"<br>"+
    '지금 내 옆에(있어주면)'+"<br>"+
    '그대와 둘이(걷는다면)'+"<br>"+
    '지금 내 옆에(있어주면)'+"<br>"+
    '그대와 둘이'+"<br>"+
    '지금 내 옆에(있어주면)'+"<br>");

    addSong('언젠', 'musics/happy/cd-03.png', 'musics/happy/03.mp3', 'O.WHEN(오왠)', '3:31',
    '그 어떤 밤이 내려와도'+"<br>"+
    '딱히 재미난 일이 없어'+"<br>"+
    '그 어떤 날이 반겨와도'+"<br>"+
    '나는 아무 의미 없어 보여'+"<br>"+
    '왜 사람들을 보면 나를 보고'+"<br>"+
    '있는 것 같을까'+"<br>"+
    '불안 불안한 내 모습을 보면'+"<br>"+
    '아마 아직 불안한 건가 봐'+"<br>"+
    '언젠간 느끼겠지 지나가면'+"<br>"+
    '웃고 있을 거야'+"<br>"+
    '언젠간 생각하겠지'+"<br>"+
    '지나가면 깨닫게 될 거야'+"<br>"+
    '내가 좋아하는 비가 내려도'+"<br>"+
    '이젠 그렇게 들뜨지 않아'+"<br>"+
    '그 어떤 여자가 날 좋아해도'+"<br>"+
    '딱히 만나고 싶지도 않아'+"<br>"+
    '왜 사람들을 보면 다들'+"<br>"+
    '잘 살고 있어 보일까'+"<br>"+
    '두근두근 되는 마음이'+"<br>"+
    '내 마음이 아마 아직 어린가 봐'+"<br>"+
    '언젠간 느끼겠지 지나가면 웃고 있을 거야'+"<br>"+
    '언젠간 생각하겠지 지나가면 깨닫게 될 거야'+"<br>"+
    '답답한 내일이 저 멀리 보이네'+"<br>"+
    '넋을 놓고 한숨 쉬고 울어봐도'+"<br>"+
    '잡히는 건 하나 없네 우린 에 에'+"<br>"+
    '언젠간 느끼겠지'+"<br>"+
    '지나가면 웃고 있을 거야'+"<br>"+
    '언젠간 생각하겠지'+"<br>"+
    '지나가면 깨닫게 될 거야'+"<br>"+
    '언젠간 느끼겠지'+"<br>"+
    '여유롭게 웃고 있을 거야'+"<br>"+
    '언젠간 말하겠지'+"<br>"+
    '지나가면 깨닫게 될 거야'+"<br>"+
    '그 어떤 밤이 내려와도'+"<br>"+
    '이젠 오늘 같진 않겠지'+"<br>"+
    '그 어떤 날이 반겨와도'+"<br>"+
    '이젠 오늘 같진 않겠지'+"<br>");

    addSong('신호등', 'musics/happy/cd-04.png', 'musics/happy/04.mp3', '이무진', '3:51',
    '이제야 목적지를 정했지만'+"<br>"+
    '가려한 날 막아서네 난 갈 길이 먼데'+"<br>"+
    '새빨간 얼굴로 화를 냈던'+"<br>"+
    '친구가 생각나네'+"<br>"+
    '이미 난 발걸음을 떼었지만'+"<br>"+
    '가려한 날 재촉하네 걷기도 힘든데'+"<br>"+
    '새파랗게 겁에 질려 도망간'+"<br>"+
    '친구가 뇌에 맴도네'+"<br>"+
    '건반처럼 생긴 도로 위 수많은 동그라미들 모두가'+"<br>"+
    '멈췄다 굴렀다 말은 잘 들어'+"<br>"+
    '그건 나도 문제가 아냐'+"<br>"+
    '붉은색 푸른색 그 사이 3초 그 짧은 시간'+"<br>"+
    '노란색 빛을 내는 저기 저 신호등이'+"<br>"+
    '내 머릿속을 텅 비워버려 내가 빠른지도'+"<br>"+
    '느린지도 모르겠어 그저 눈앞이 샛노랄 뿐이야'+"<br>"+
    '솔직히 말하자면 차라리'+"<br>"+
    '운전대를 못 잡던 어릴 때가 더 좋았었던 것 같아'+"<br>"+
    '그땐 함께 온 세상을 거닐 친구가 있었으니'+"<br>"+
    '건반처럼 생긴 도로 위 수많은 조명들이 날 빠르게'+"<br>"+
    '번갈아 가며 비추고 있지만'+"<br>"+
    '난 아직 초짜란 말이야'+"<br>"+
    '붉은색 푸른색 그 사이 3초 그 짧은 시간'+"<br>"+
    '노란색 빛을 내는 저기 저 신호등이'+"<br>"+
    '내 머릿속을 텅 비워버려 내가 빠른지도'+"<br>"+
    '느린지도 모르겠어 그저 눈앞이 샛노랄 뿐이야'+"<br>"+
    '꼬질꼬질한 사람이나 부자 곁엔 아무도 없는'+"<br>"+
    '삼색 조명과 이색 칠 위에 서 있어 괴롭히지 마'+"<br>"+
    '붉은색 푸른색 그 사이 3초 그 짧은 시간'+"<br>"+
    '노란색 빛을 내는 저기 저 신호등이'+"<br>"+
    '내 머릿속을 텅 비워버려 내가 빠른지도'+"<br>"+
    '느린지도 모르겠어 그저 눈앞이 샛노랄 뿐이야'+"<br>");

    addSong('Let`s!', 'musics/happy/cd-05.png', 'musics/happy/05.mp3', '호피폴라(Hoppipolla)', '3:15',
    'Lets sit in my car'+"<br>"+
    '무작정 떠나 네 주위를 봐'+"<br>"+
    '놀라지는 마 길고 긴 시간을 달려서'+"<br>"+
    '저기 바다가 보여'+"<br>"+
    '새로운 풍경과 사람들'+"<br>"+
    '이제 나는 떠날래'+"<br>"+
    'Hey look at the stars'+"<br>"+
    '별이 빛나는 밤 하늘 좀 봐'+"<br>"+
    '우린 뭘 놓치고 살았는지'+"<br>"+
    '좋아하고 미워하는 건 다 지쳤어'+"<br>"+
    '오늘은 다 잊고 즐기자'+"<br>"+
    '아무도 우릴 모르니까'+"<br>"+
    'Lets sit in my car get out of this town'+"<br>"+
    'Lets sit in my car get out of this town'+"<br>"+
    'All day baby all night long'+"<br>"+
    '우리 노래 부르자'+"<br>"+
    'All day baby all night long'+"<br>"+
    '우리 꿈을 꿔보자'+"<br>"+
    'Lets jump in my car'+"<br>"+
    '모래성을 짓고 무알콜 한잔'+"<br>"+
    '취할 것만 같아 기분 좋은 밤 기분 좋은 vibe'+"<br>"+
    '이 음악 제목이 뭐지 상관없어 춤추면 되지'+"<br>"+
    'Lets sit in my car get out of this town'+"<br>"+
    'Lets sit in my car get out of this town'+"<br>"+
    'All day baby all night long'+"<br>"+
    '우리 노래 부르자'+"<br>"+
    'All day baby all night long'+"<br>"+
    '우리 꿈을 꿔보자'+"<br>"+
    'Lets sit in my car get out of this town'+"<br>"+
    'Lets sit in my car get out of this town'+"<br>"+
    'All day baby all night long'+"<br>"+
    '우리 노래 부르자'+"<br>"+
    'All day baby all night long'+"<br>"+
    '우리 꿈을 꿔보자'+"<br>"+
    'Lets sit in my car get out of this town'+"<br>"+
    'Lets sit in my car get out of this town'+"<br>"+
    'All day baby all night long'+"<br>"+
    '우리 노래 부르자'+"<br>"+
    'All day baby all night long'+"<br>"+
    '우리 꿈을 꿔보자'+"<br>"+
    'Lets sit in my car get out of this town'+"<br>"+
    'Lets sit in my car get out of this town'+"<br>"+
    'All day baby all night long'+"<br>"+
    '우리 노래 부르자'+"<br>"+
    'All day baby all night long'+"<br>"+
    '우리 품을 춰보자'+"<br>"+
    'Lets sit in my car'+"<br>"+
    '오늘은 떠나자'+"<br>");
    
    addSong('일어났어?', 'musics/happy/cd-06.png', 'musics/happy/06.mp3', '안녕하신가영 & 원필(DAY6)', '3:19',
    '일어났어?'+"<br>"+
    '난 니 생각에 잠 못 이뤘다고 하면'+"<br>"+
    '너의 단잠을 깨울까 봐 쿨쿨 잤어'+"<br>"+
    '꿈이 아니어서 다행이야'+"<br>"+
    '오늘도'+"<br>"+
    '좋은 하루가 될 것만 같아'+"<br>"+
    '저녁이 오기 전에 낮의 어디쯤에서'+"<br>"+
    '눈이 부시게 햇살 같은 너를 보게 된다면'+"<br>"+
    '좋은 사람이 될 것만 같아'+"<br>"+
    '슬픔이 찾아와도 괜찮다 말할 수 있는'+"<br>"+
    '그런 사람이고 싶어'+"<br>"+
    '그렇게 너를 닮아가'+"<br>"+
    '일어났어?'+"<br>"+
    '난 니 생각해'+"<br>"+
    '기분 좋은 꿈을 꾸고 난 아침엔'+"<br>"+
    '니 생각이 나'+"<br>"+
    '꿈이 아니어서 다행이야'+"<br>"+
    '오늘도'+"<br>"+
    '좋은 하루가 될 것만 같아'+"<br>"+
    '저녁이 오기 전에 낮의 어디쯤에서'+"<br>"+
    '눈이 부시게 햇살 같은 너를 보게 된다면'+"<br>"+
    '좋은 사람이 될 것만 같아'+"<br>"+
    '슬픔이 찾아와도 괜찮다 말할 수 있는'+"<br>"+
    '그런 사람이고 싶어'+"<br>"+
    '그렇게 너를 닮아가'+"<br>"+
    '좋은 하루가 될 것만 같아'+"<br>"+
    '저녁이 오기 전에 낮의 어디쯤에서'+"<br>"+
    '눈이 부시게 햇살 같은 너를 보게 된다면'+"<br>"+
    '좋은 사람이 될 것만 같아'+"<br>"+
    '슬픔이 찾아와도 괜찮다 말할 수 있는'+"<br>"+
    '그런 사람이고 싶어'+"<br>"+
    '그렇게 너를 닮아가'+"<br>"
    );
    addSong('Welcome (feat. Daowl)', 'musics/happy/cd-07.png', 'musics/happy/07.mp3', '공기남(Airman)', '3:06',
    'Please 내게도 사랑이 찾아왔으면 해 '+"<br>"+
    '수없이 너를 생각해 늘 그려 보곤 했어'+"<br>"+
    '1 2 3 4 5 6 7 9 10'+"<br>"+
    '외롭던 밤은 다 지나갔을까'+"<br>"+
    '1 2 3 4 5 6 7 9 10'+"<br>"+
    '별을 담아 내게 와줄래'+"<br>"+
    '어서 와 내 맘 받아줘 이미 준비하고 있어'+"<br>"+
    '아무 생각 말고 다가와도 돼'+"<br>"+
    '어서 와 내 맘 받아줘 이미 준비하고 있어'+"<br>"+
    '아무 생각 말고 다가와도 돼'+"<br>"+
    'you 생각 말고 들어와도 돼'+"<br>"+
    'you 생각 말고 들어와도 돼'+"<br>"+
    '아무런 말도 없이 너는 내게 왔고'+"<br>"+
    '나만큼 너를 좋아하는가 봐'+"<br>"+
    '아무런 말도 없이 네게 빠졌나 봐'+"<br>"+
    '1 2 3 4 5 6 7 9 10'+"<br>"+
    '외롭던 밤은 다 지나갔을까'+"<br>"+
    '1 2 3 4 5 6 7 9 10'+"<br>"+
    '별을 담아 내게 와줄래'+"<br>"+
    '어서 와 내 맘 받아줘 이미 준비하고 있어'+"<br>"+
    '아무 생각 말고 다가와도 돼'+"<br>"+
    '어서 와 내 맘 받아줘 이미 준비하고 있어'+"<br>"+
    '아무 생각 말고 다가와도 돼'+"<br>"+
    'you 생각 말고 들어와도 돼'+"<br>"+
    'you 생각 말고 들어와도 돼'+"<br>"+
    'you 생각 말고 들어와도 돼'+"<br>"+
    'you 생각 말고 들어와도 돼'+"<br>"+
    'Please 내게도 사랑이 찾아왔으면 해'+"<br>"
    );

    addSong('행운을 빌어', 'musics/happy/cd-08.png', 'musics/happy/08.mp3', '전기뱀장어', '2:26',
    '그 길이 끝나기 전에 넌 내게 말했지'+"<br>"+
    '우리 좋았던 시간들 잊지 않을 거야'+"<br>"+
    '달리는 파란 버스에 실린'+"<br>"+
    '내 발을 보다가'+"<br>"+
    '내린 이 동네는'+"<br>"+
    '내게는 서먹한 동네'+"<br>"+
    '한참을 서성거리다가'+"<br>"+
    '왜 너에게 해야 했던 '+"<br>"+
    '그 말들이 자꾸만 생각나'+"<br>"+
    '다신 볼 수 없더라도 행운을 빌어'+"<br>"+
    '너에겐 익숙한 동네'+"<br>"+
    '한참을 서성거리다가'+"<br>"+
    '왜 너에게 해야 했던'+"<br>"+
    '그 말들이 자꾸만 생각나'+"<br>"+
    '다신 볼 수 없더라도 행운을 빌어'+"<br>"+
    '너에게 해야 했던'+"<br>"+
    '그 말들이 자꾸만 생각나'+"<br>"+
    '다신 볼 수 없더라도'+"<br>"+
    '그 길을 혼자 걸으며 난 네게 말했지'+"<br>"+
    '다신 볼 수 없더라도'+"<br>"+
    '행운을 빌어'+"<br>");




    


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


// // ===== SongList에 아이템을 추가하는 함수 =====
// function addSong(title, image, audio, artist, time){
//     let newItem = $('#example_item2').clone(true);
//     newItem.removeProp('id');
//     newItem.show();

//     // 팀별로 리스트 아이템에 맞는 클래스 정보를 찾아서 교체해주기
//     newItem.find('.song-title').text(title);
//     newItem.find('.album-cover').css('background-image', "url('" + image + "')");
//     newItem.find('.item-audio > source').attr('src', audio);
//     newItem.find('.song-artist').text(artist);
//     newItem.find('.running-time').text(time);
    
//     // 리스트 아이템 클릭시 이벤트 등록
//     newItem.click(function(){
//         currentAudio[0].pause(); // 재생중인 오디오 중지
//         currentAudio[0].currentTime = 0; // 재생중인 오디오 위치 초기화
//         $(this).find('.item-audio')[0].play(); // 선택된 오디오 재생

//         setPlayer( $(this).index() ); // setPlayer 함수 호출 (플레이어로 정보 전달)
//     })

//     // 리스트에 아이템 추가
//     $('#song-item-box').append(newItem);
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
    stroke('#FFD35D');
    strokeWeight(5);
    strokeCap(SQUARE);
    let angle =  getProgress() * 2*PI;
    arc(185, 185, 340, 340, -PI/2, -PI/2 + angle);

    let x = 185 + 170*cos(-PI/2 + angle);
    let y = 185 + 170*sin(-PI/2 + angle);
    noStroke();
    fill('#FFD35D');
    circle(x, y, 20);
    
}

// $('.scroll').animate({scrollTop: "300px"}, 5000);
// $('.scroll').animate({ scrollTop: document.body.scrollHeight }, "slow");
 

// =============팁 추가=============

$('.close-btn').click(function(){
    $('#feeling-tips').fadeOut(500);
  });

$('.feeling').click(function(){
  $('#feeling-tips').fadeIn(500);
});