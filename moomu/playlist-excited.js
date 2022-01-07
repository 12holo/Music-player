let currentPlaying; // 현재 재생되고 있는 리스트 아이템의 index
let currentAudio; // 현재 재생되는 있는 리스트 아이템의 audio 태그

let angle = 0;

$(function(){
    // ===== List 생성하기 =====
    // addItem('Happy Life', 'musics/playlist.png', 'musics/00.mp3');
    // addItem('Jarico - Island', 'musics/01.png', 'musics/01.mp3');
    // addItem('Jarico - Landscape', 'musics/02.png', 'musics/02.mp3');


    // ===== SongList 생성하기 =====
    // addSong('안녕', 'musics/excited/cd-01.png', 'musics/excited/01.mp3', 'JOY(조이)', '3:38');
    // addSong('꽃길만 걷게 해줄게', 'musics/excited/cd-02.png', 'musics/excited/02.mp3', '데이브레이크(DAYBREAK)', '3:50');
    // addSong('Dun Dun Dance', 'musics/excited/cd-03.png', 'musics/excited/03.mp3', '오마이걸(OH MY GIRL)', '3:40');
    // addSong('뜨거운 안녕 (feat.성시경)', 'musics/excited/cd-04.png', 'musics/excited/04.mp3', '싸이(PSY)', '3:29');
    // addSong('붕붕 (feat. Sik-K) ', 'musics/excited/cd-05.png', 'musics/excited/05.mp3', '김하온(HAON)', '3:54');
    // addSong('Running', 'musics/excited/cd-06.png', 'musics/excited/06.mp3', 'Gaho(가호)', '3:30');
    // addSong('다시 여기 바닷가', 'musics/excited/cd-07.png', 'musics/excited/07.mp3', 'SSAK3(싹쓰리)', '3:53');
    // addSong('출첵 (feat.나얼)', 'musics/excited/cd-08.png', 'musics/excited/08.mp3', '다이나믹 듀오', '3:49');
    // addSong('불꽃놀이 (Fireworks)', 'musics/excited/cd-09.png', 'musics/excited/09.mp3', '다이나믹 듀오', '3:52');
    // addSong('행운을 빌어요', 'musics/excited/cd-10.png', 'musics/excited/10.mp3', '페퍼톤스', '4:20');

    addSong('안녕', 'musics/excited/cd-01.png', 'musics/excited/01.mp3', 'JOY(조이)', '3:38',
    '외로운 날들이여 모두 다 안녕'+"<br>"+
    "내 마음속의 눈물들도 이제는 안녕 Oh"+"<br>"+
    "어제의 너는 바람을 타고 멀리"+"<br>"+
    "후회도 없이 미련 없이 날아가"+"<br>"+
    "Goodbye oh oh oh"+"<br>"+
    "영원히 Oh oh oh"+"<br>"+
    "거울에 비친 너의 모습이 슬퍼"+"<br>"+
    "늘 웃음 짓던 예전의 넌 어디에 있니"+"<br>"+
    "저 파란 하늘 눈부신 별들도"+"<br>"+
    "모두 다 너를 위해 있잖니"+"<br>"+
    "더 이상 네 안에 그 일은 없던 일"+"<br>"+
    "그래서 아픈 기억 모두 버려야할 일"+"<br>"+
    "눈물짓지 마 새로운 오늘을"+"<br>"+
    "맞이할 준비를 해봐 Ooh ooh"+"<br>"+
    "외로운 날들이여 모두 다 안녕"+"<br>"+
    "내 마음속의 눈물들도 이제는 안녕 Oh"+"<br>"+
    "어제의 너는 바람을 타고 멀리"+"<br>"+
    "후회도 없이 미련 없이 날아가"+"<br>"+
    "Goodbye oh oh oh"+"<br>"+
    "영원히 Oh oh oh"+"<br>"+
    "슬프게 내린 비는 꽃을 피우고"+"<br>"+
    "너의 눈물은 예쁜 사랑을 피울 거야"+"<br>"+
    "슬퍼하지 마 새로운 오늘을"+"<br>"+
    "맞이할 준비를 해봐 Ooh ooh"+"<br>"+
    "햇살 가득한 날들이여 안녕"+"<br>"+
    "긴 잠에서 날 깨워준 아침이여 안녕 Oh"+"<br>"+
    "너의 유리처럼 맑은 미소가"+"<br>"+
    "세상을 환히 웃음 짓게 할 거야"+"<br>"+
    "Ooh ah- 날아가도 돼"+"<br>"+
    "외로운 날들이여 모두 다 안녕"+"<br>"+
    "내 마음속의 눈물들도 이제는 안녕 Oh"+"<br>"+
    "어제의 너는 바람을 타고 멀리"+"<br>"+
    "후회도 없이 미련 없이 날아가"+"<br>"+
    "햇살 가득한 날들이여 안녕"+"<br>"+
    "긴 잠에서 날 깨워준 아침이여 안녕 Oh"+"<br>"+
    "너의 유리처럼 맑은 미소가"+"<br>"+
    "세상을 환히 웃음 짓게 할 거야"+"<br>"+
    "Goodbye oh oh oh"+"<br>"+
    "영원히 Oh oh oh");
    
    addSong('꽃길만 걷게 해줄게', 'musics/excited/cd-02.png', 'musics/excited/02.mp3', '데이브레이크(DAYBREAK)', '3:50',
    "딱 걸렸어 널 보는 내 눈빛이"+"<br>"+
    "무심한 척 잘 숨겨왔었는데 오 예"+"<br>"+
    "너 땜에 잠도 못 자고"+"<br>"+
    "너 땜에 밤새 설레는데"+"<br>"+
    "이제는 솔직히 말해볼래 (딱 떨어지는)"+"<br>"+
    "꽃길만 걷게 해줄게"+"<br>"+
    "네 맘에 쏙 들게 할게"+"<br>"+
    "널 알게 된 순간부터"+"<br>"+
    "내 머릿속엔 온통 너뿐이야"+"<br>"+
    "항상 널 웃게 해줄게"+"<br>"+
    "오랫동안 느껴왔어 누구보다"+"<br>"+
    "딱 딱 떨어지는"+"<br>"+
    "딱 딱 딱 딱 떨어지는 우리"+"<br>"+
    "딱 알겠어 날 보는 네 눈빛이"+"<br>"+
    "혹시 너도 바라고 있던 거야? 오 예"+"<br>"+
    "나 때문에 잠 못 들지 마"+"<br>"+
    "나 때문에 고민하지도 마"+"<br>"+
    "이제는 너만 바라볼게 All Right? (딱 떨어지는)"+"<br>"+
    "꽃길만 걷게 해줄게"+"<br>"+
    "네 맘에 쏙 들게 할게"+"<br>"+
    "널 알게 된 순간부터"+"<br>"+
    "내 머릿속엔 온통 너뿐이야"+"<br>"+
    "항상 널 웃게 해줄게"+"<br>"+
    "오랫동안 느껴왔어 누구보다"+"<br>"+
    "딱 딱 떨어지는"+"<br>"+
    "딱 딱 딱 딱 떨어지는 우리"+"<br>"+
    "꽃길만 걷게 해줄게"+"<br>"+
    "그 길을 같이 걸을래"+"<br>"+
    "매일 널 설레게 할래"+"<br>"+
    "널 알게 된 순간부터"+"<br>"+
    "말하지 못한 아껴왔던 이 말"+"<br>"+
    "꽃길만 걷게 해줄게"+"<br>"+
    "오랫동안 꿈꿔왔어 누구보다"+"<br>"+
    "딱 딱 떨어지는"+"<br>"+
    "딱 딱 딱 딱 떨어지는"+"<br>"+
    "꽃길 위를 걸어가는 우리");

    addSong('Dun Dun Dance', 'musics/excited/cd-03.png', 'musics/excited/03.mp3', '오마이걸(OH MY GIRL)', '3:40',
    "Dun Dun Dance Dun Dun Dance Dun Dun Dance"+"<br>"+
    "Just dance Just dance"+"<br>"+
    "Dun Dun Dance Dun Dun Dance Dun Dun Dance"+"<br>"+
    "Just dance Just dance"+"<br>"+
    "유성이 비처럼 쏟아지는 하늘"+"<br>"+
    "그 아래 너와 함께 춤추고 싶어"+"<br>"+
    "색색의 옷들과 예쁜 액세서리 oh baby"+"<br>"+
    "흐르는 저 음악이 내 맘을 설레게 하지"+"<br>"+
    "I feel the disco rhythm in my body"+"<br>"+
    "다른 아무것도 생각하진 마"+"<br>"+
    "yeah 발자국으로 가득한 무대 위에 올라"+"<br>"+
    "자유로운 몸짓 그 사랑스런 느낌"+"<br>"+
    "저 따분했던 하루와 일상에서 벗어나 oh tonight"+"<br>"+
    "Just you and I 지구를 등지고 떠올라"+"<br>"+
    "맘껏 crazy crazy crazy 긴 춤을 춰"+"<br>"+
    "말리지 마 지금 내 기분은 feel so high"+"<br>"+
    "멀리 멀리 멀리 다 눈부셔"+"<br>"+
    "I just wanna Dun Dun Dance"+"<br>"+
    "Dun Dun Dance Dun Dun Dance"+"<br>"+
    "Oh baby give me baby give me baby give me more"+"<br>"+
    "날 멈추지 마 love this song"+"<br>"+
    "Just wanna Dun Dun Dance"+"<br>"+
    "Dun Dun Dance Dun Dun Dance"+"<br>"+
    "Just dance Just dance"+"<br>"+
    "Shining like a disco ball"+"<br>"+
    "빨간 high heels on the road"+"<br>"+
    "Got my eyes on you and you got yours"+"<br>"+
    "저 태양이 다시 눈뜰 때까지"+"<br>"+
    "넌 평범한데 뭔가 달라 왠지 묘한 구석이 있네"+"<br>"+
    "난 가려져 있는 게 보여"+"<br>"+
    "우린 모두 이상해 조금씩은 yeah"+"<br>"+
    "사람을 가장한 낯선 존재들처럼 oh baby"+"<br>"+
    "yeah 놀라지 않아 괜찮아 좀 더 가까이 와"+"<br>"+
    "다른 시선 따위 다 잊어버려 우리"+"<br>"+
    "늘 복잡한 저세상과 기대에서 벗어나 oh tonight"+"<br>"+
    "Just you and I 지구를 등지고 떠올라"+"<br>"+
    "맘껏 crazy crazy crazy 긴 춤을 춰"+"<br>"+
    "말리지 마 지금 내 기분은 feel so high"+"<br>"+
    "멀리 멀리 멀리 다 눈부셔"+"<br>"+
    "I just wanna Dun Dun Dance"+"<br>"+
    "Dun Dun Dance Dun Dun Dance"+"<br>"+
    "Oh baby give me baby give me baby give me more"+"<br>"+
    "날 멈추지 마 love this song"+"<br>"+
    "Just wanna Dun Dun Dance Dun Dun Dance Dun Dun Dance"+"<br>"+
    "Just dance Just dance"+"<br>"+
    "어차피 작은 점일 뿐야 보석 같은 아이야"+"<br>"+
    "몇 발짝 멀리 떨어져서 바라보면 돼"+"<br>"+
    "우린 dancing on ﬁre"+"<br>"+
    "Just you and I 지구를 등지고 떠올라"+"<br>"+
    "맘껏 crazy crazy crazy 긴 춤을 춰"+"<br>"+
    "말리지 마 지금 내 기분은 feel so high"+"<br>"+
    "멀리 멀리 멀리 다 눈부셔"+"<br>"+
    "I just wanna Dun Dun Dance"+"<br>"+
    "Dun Dun Dance Dun Dun Dance"+"<br>"+
    "Oh baby give me baby give me baby give me more"+"<br>"+
    "날 멈추지 마 love this song"+"<br>"+
    "Just wanna Dun Dun Dance"+"<br>"+
    "Dun Dun Dance Dun Dun Dance"+"<br>"+
    "Just dance Just dance");
    
    addSong('뜨거운 안녕 (feat.성시경)', 'musics/excited/cd-04.png', 'musics/excited/04.mp3', '싸이(PSY)', '3:29',
    "PSY collaboration"+"<br>"+
    "TOY introducing 성발라드"+"<br>"+
    "불타 올랐던 남과 여 나 없이 괜찮니 넌"+"<br>"+
    "죽기 아니면 까무러칠 줄 알았어 미칠 줄 알았어 지칠 줄 알았어"+"<br>"+
    "그리워 너 미워"+"<br>"+
    "근사했고 감사했고 자기야 자기야 밤새 했고"+"<br>"+
    "이젠 오래돼버린 한 조각조각이 나도 너무 나서"+"<br>"+
    "하도 오래된 일이라서 나도 사는 게 바빠서"+"<br>"+
    "그만 맘에도 없는 말"+"<br>"+
    "그만 숨어서 한숨만"+"<br>"+
    "그만 우리 함께 했던 날"+"<br>"+
    "나만 미쳐 가는 걸까"+"<br>"+
    "소중했던 내 사람아 이젠 안녕 (그래 그래 이젠 안녕)"+"<br>"+
    "찬란하게 반짝이던 눈동자여 (그대 그대 눈동자여)"+"<br>"+
    "사랑했던 날들이여 이젠 안녕 (그래 그래 이젠 안녕)"+"<br>"+
    "달빛 아래 타오르던 붉은 입술"+"<br>"+
    "떠난다면 보내드리리"+"<br>"+
    "뜨겁게 뜨겁게 안녕"+"<br>"+
    "같이 베었던 베개에 배어있는 너의 흔적을 버려"+"<br>"+
    "미련을 버려 남는 건 사진이야 다 지워버려"+"<br>"+
    "미팅 소개팅으로 재부팅해버려"+"<br>"+
    "너의 모든걸 삭제 맘대로 안돼"+"<br>"+
    "가슴과 머리가 따로 논다는 소리 BABY I AM SORRY"+"<br>"+
    "아침부터 밤까지 하나부터 열까지"+"<br>"+
    "다 같이 했기 때문에 너무 힘들어 입술을 깨무네"+"<br>"+
    "술김에 억지로 잠을 재우네"+"<br>"+
    "술도 수면제도 너를 못 이겨"+"<br>"+
    "또 밤을 새우네 왜 헤어졌냐 자존심 때문에"+"<br>"+
    "소중했던 내 사람아 이젠 안녕 (그래 그래 이젠 안녕)"+"<br>"+
    "찬란하게 반짝이던 눈동자여 (그대 그대 눈동자여)"+"<br>"+
    "사랑했던 날들이여 이젠 안녕 (그래 그래 이젠 안녕)"+"<br>"+
    "달빛 아래 타오르던 붉은 입술 (그대 그대 붉은 입술)"+"<br>"+
    "그리워 어지러워 서러워 기분 더러워"+"<br>"+
    "ONE MORE TIME"+"<br>"+
    "그리워 어지러워 서러워 기분 더러워"+"<br>"+
    "하나뿐인 목숨을 바치고"+"<br>"+
    "같은 날 생을 마치고"+"<br>"+
    "나 같은 놈에게 이 모든 건 사치고"+"<br>"+
    "다치고 닥치고 아디오스"+"<br>"+
    "소중했던 내 사람아 이젠 안녕 (그래 그래 이젠 안녕)"+"<br>"+
    "찬란하게 반짝이던 눈동자여 (그대 그대 눈동자여)"+"<br>"+
    "사랑했던 날들이여 이젠 안녕 (그래 그래 이젠 안녕)"+"<br>"+
    "달빛 아래 타오르던 붉은 입술"+"<br>"+
    "떠난다면 보내드리리"+"<br>"+
    "뜨겁게 뜨겁게 안녕"+"<br>"+
    "잘자요");

    addSong('붕붕 (feat. Sik-K) ', 'musics/excited/cd-05.png', 'musics/excited/05.mp3', '김하온(HAON)', '3:54',
    "Black에서 brown"+"<br>"+
    "brown에서 yello"+"<br>"+
    "yellow에서 whit"+"<br>"+
    "white에서 what"+"<br>"+
    "많은 곳을 도"+"<br>"+
    "돌아보고 왔지만"+"<br>"+
    "다음 곳은 가봐"+"<br>"+
    "Shawty I’m flyi"+"<br>"+
    "마음이 붕 떠"+"<br>"+
    "여긴 밑도 위도 "+"<br>"+
    "하늘이 파래서 "+"<br>"+
    "너의 눈엔 내가 "+"<br>"+
    "보일 테니까"+"<br>"+
    "난 붕 떠 like "+"<br>"+
    "툭 뚝 떨어져도 "+"<br>"+
    "아님 Ocean 바람"+"<br>"+
    "상품이 되어버린"+"<br>"+
    "나의 emotion ya"+"<br>"+
    "속 시원 하게 뱉"+"<br>"+
    "추진력이 되었고"+"<br>"+
    "슝 하고 뛰쳐나"+"<br>"+
    "너는 어떻게 보"+"<br>"+
    "나 나 삐끗하고 "+"<br>"+
    "펴버린 날개를 "+"<br>"+
    "치 치워버린 것"+"<br>"+
    "비행 아닌 비행"+"<br>"+
    "뛰 뛰어 구름들"+"<br>"+
    "바람이 발등의 "+"<br>"+
    "푸르구나 우리들"+"<br>"+
    "날아가는 중 lik"+"<br>"+
    "먹구름 쿠릉 let"+"<br>"+
    "Finally famous"+"<br>"+
    "근데 이게 무슨 "+"<br>"+
    "나도 모르게 툭 "+"<br>"+
    "다시 귀로 돌아"+"<br>"+
    "만물에 대한 감"+"<br>"+
    "현재 내게 삶이"+"<br>"+
    "Shawty I don’t "+"<br>"+
    "그게 뭐가 됐든"+"<br>"+
    "부모님이 주신 "+"<br>"+
    "나는 그저 온 김"+"<br>"+
    "어디로 가는지 "+"<br>"+
    "Just swervin’"+"<br>"+
    "어디로 가는지 "+"<br>"+
    "날아가서 구름 "+"<br>"+
    "나는 발자국을 "+"<br>"+
    "Cuz I don’t see"+"<br>"+
    "anymore"+"<br>"+
    "시동 걸어"+"<br>"+
    "vroom vroom"+"<br>"+
    "달려 like 추추 "+"<br>"+
    "And I don’t giv"+"<br>"+
    "Set me free 하"+"<br>"+
    "Set me free"+"<br>"+
    "I never let me "+"<br>"+
    "Set me free 하"+"<br>"+
    "Set me free"+"<br>"+
    "I never let me "+"<br>"+
    "떨어지는 내 모"+"<br>"+
    "보게 된다 해도 "+"<br>"+
    "떨어지는 내 모"+"<br>"+
    "바람에 부딪혀"+"<br>"+
    "더 높게 뛰어오"+"<br>"+
    "I never go skrt"+"<br>"+
    "Cuz I fly I don"+"<br>"+
    "잘 보라고"+"<br>"+
    "나는 더 많은 걸"+"<br>"+
    "내가 발을 딛는 "+"<br>"+
    "발자국 남기고 s"+"<br>"+
    "발자국 남기고 s"+"<br>"+
    "난 발자국 남기"+"<br>"+
    "Seoul city 위로"+"<br>"+
    "날아 올라가지"+"<br>"+
    "하늘이 까맣게 "+"<br>"+
    "난 더 자유롭게"+"<br>"+
    "비행해도 별 탈"+"<br>"+
    "걱정 get outta "+"<br>"+
    "걱정 get outta "+"<br>"+
    "어디로 가는지 "+"<br>"+
    "Just swervin'"+"<br>"+
    "어디로 가는지 "+"<br>"+
    "날아가서 구름 "+"<br>"+
    "나는 발자국을 "+"<br>"+
    "Cuz I don’t see"+"<br>"+
    "Ain’t got no pr"+"<br>"+
    "발목에 족쇄를 "+"<br>"+
    "억지로 걸어왔던"+"<br>"+
    "발을 구르던 이 "+"<br>"+
    "꽤나 많이 둘러"+"<br>"+
    "현재의 나에 대"+"<br>"+
    "plus 휘몰아치는"+"<br>"+
    "And I don’t giv"+"<br>"+
    "Set me free 하"+"<br>"+
    "Set me free"+"<br>"+
    "I never let me "+"<br>"+
    "Set me free 하"+"<br>"+
    "Set me free"+"<br>"+
    "I never let me "+"<br>"+
    "어디로 가는 건"+"<br>"+
    "just swervin’"+"<br>"+
    "가능태를 따라 "+"<br>"+
    "let me call it"+"<br>"+
    "걸음걸이 팔자고"+"<br>"+
    "무한대를 그려 "+"<br>"+
    "질리게 따른 영"+"<br>"+
    "Impossible 사이"+"<br>"+
    "I’m possible pa"+"<br>"+
    "계속돼야지 누가"+"<br>"+
    "이글이글 기름 "+"<br>"+
    "지금 리듬 빙글"+"<br>"+
    "하루 이틀 믿은 칠흑 속의 믿음 ya");

    addSong('Running', 'musics/excited/cd-06.png', 'musics/excited/06.mp3', 'Gaho(가호)', '3:30',
    "Breathe in 숨을 내쉬고"+"<br>"+
    "두려움에 맞설 때"+"<br>"+
    "내게 들려온 한 마디"+"<br>"+
    "조금 더 힘을 내라고"+"<br>"+
    "안개 속에 가려져"+"<br>"+
    "한 줄기 빛도 없이"+"<br>"+
    "고민하고 또 고민했었어"+"<br>"+
    "오늘의 나를 위해서"+"<br>"+
    "남과 다른 시선에"+"<br>"+
    "또 다시 뒤쳐지는 그런 "+"<br>"+
    "반대로 나를 일으켜 달"+"<br>"+
    "지금부터 시작해봐 앞을"+"<br>"+
    "Running Running 세상에"+"<br>"+
    "막다른 길이 나타나도 "+"<br>"+
    "지금부터 시작해봐 앞을"+"<br>"+
    "Running Running 너와 "+"<br>"+
    "뭐든 할 수 있어"+"<br>"+
    "끝없이 달려봐 거친 세"+"<br>"+
    "삶이 나를 누르고"+"<br>"+
    "점점 버거워질 때"+"<br>"+
    "내게 건네온 그 손길"+"<br>"+
    "한 번 더 일어나라고"+"<br>"+
    "때론 울기도 하고"+"<br>"+
    "때론 소리치지만"+"<br>"+
    "내겐 절대로 지울 수 없"+"<br>"+
    "나만의 중심이 있어"+"<br>"+
    "남과 다른 시선에"+"<br>"+
    "또 다시 뒤쳐지는 그런 "+"<br>"+
    "반대로 나를 일으켜 달"+"<br>"+
    "지금부터 시작해봐 앞을"+"<br>"+
    "Running Running 세상에"+"<br>"+
    "막다른 길이 나타나도 "+"<br>"+
    "지금부터 시작해봐 앞을"+"<br>"+
    "Running Running 너와 "+"<br>"+
    "뭐든 할 수 있어"+"<br>"+
    "끝없이 달려봐 거친 세"+"<br>"+
    "서로에게"+"<br>"+
    "빛이 되는"+"<br>"+
    "간절했던 꿈 하나"+"<br>"+
    "칠흑 같던 밤하늘도"+"<br>"+
    "또 한 번 이겨내면 돼 "+"<br>"+
    "(달려 나가 I can be th"+"<br>"+
    "(I love myself)"+"<br>"+
    "잃어버린 나를 다시 찾"+"<br>"+
    "Running Running 너와 "+"<br>"+
    "뭐든 할 수 있어"+"<br>"+
    "바라던 곳에 닿을 그날을" );

    addSong('다시 여기 바닷가', 'musics/excited/cd-07.png', 'musics/excited/07.mp3', 'SSAK3(싹쓰리)', '3:53',
    "예아! 호우! 예예예~"+"<br>"+
    "싹쓰리 인더 하우스"+"<br>"+
    "커커커커커몬! 싹!쓰리!투 렛"+"<br>"+
    "나 다시 또 설레어"+"<br>"+
    "이렇게 너를 만나서"+"<br>"+
    "함께 하고 있는 지금 이 공기"+"<br>"+
    "다시는 널 볼 순 없을 거라고"+"<br>"+
    "추억일 뿐이라"+"<br>"+
    "서랍 속에 꼭 넣어뒀는데"+"<br>"+
    "흐르는 시간 속에서"+"<br>"+
    "너와 내 기억은"+"<br>"+
    "점점 희미해져만 가"+"<br>"+
    "끝난 줄 알았어"+"<br>"+
    "지난여름 바닷가"+"<br>"+
    "너와 나 단둘이"+"<br>"+
    "파도에 취해서 노래하며"+"<br>"+
    "같은 꿈을 꾸었지"+"<br>"+
    "다시 여기 바닷가"+"<br>"+
    "이제는 말하고 싶어"+"<br>"+
    "네가 있었기에 내가 더욱 빛나"+"<br>"+
    "별이 되었다고"+"<br>"+
    "다들 덥다고 막 짜증내"+"<br>"+
    "괜찮아 우리 둘은 따뜻해"+"<br>"+
    "내게 퐁당 빠져버린 널"+"<br>"+
    "이젠 구하러 가지 않을 거야"+"<br>"+
    "모래 위 펴펴펴편지를 써"+"<br>"+
    "밀물이 밀려와도 못 지워"+"<br>"+
    "추억이 될 뻔한 첫 느낌"+"<br>"+
    "너랑 다시 한번 받아 보고 싶"+"<br>"+
    "흐르는 시간 속에서"+"<br>"+
    "너와 내 기억은"+"<br>"+
    "점점 희미해져만 가"+"<br>"+
    "끝난 줄 알았어"+"<br>"+
    "지난여름 바닷가"+"<br>"+
    "너와 나 단둘이"+"<br>"+
    "파도에 취해서 노래하며"+"<br>"+
    "같은 꿈을 꾸었지"+"<br>"+
    "다시 여기 바닷가"+"<br>"+
    "이제는 말하고 싶어"+"<br>"+
    "네가 있었기에 내가 더욱 빛나"+"<br>"+
    "별이 되었다고"+"<br>"+
    "시간의 강을 건너"+"<br>"+
    "또 맞닿은 너와 나"+"<br>"+
    "소중한 사랑을 영원히"+"<br>"+
    "간직해줘"+"<br>"+
    "지난여름 바닷가"+"<br>"+
    "너와 나 단둘이"+"<br>"+
    "파도에 취해서 노래하며"+"<br>"+
    "같은 꿈을 꾸었지"+"<br>"+
    "다시 여기 바닷가"+"<br>"+
    "이제는 말하고 싶어"+"<br>"+
    "네가 있었기에 내가 더욱 빛나"+"<br>"+
    "별이 되었다고");

    addSong('출첵 (feat.나얼)', 'musics/excited/cd-08.png', 'musics/excited/08.mp3', '다이나믹 듀오', '3:49',
    "Double D와 함께하는 특별한 밤"+"<br>"+
    "everybody 모두 출석 check"+"<br>"+
    "yeah 놀때 잘 못노는 사람도"+"<br>"+
    "게으른 사람 you know?"+"<br>"+
    "오늘은 신나게 놉시다"+"<br>"+
    "say 출 check check it out"+"<br>"+
    "출 check check it out"+"<br>"+
    "출 check check it out"+"<br>"+
    "출석 check"+"<br>"+
    "우리의 일주일은 월화수목금금금"+"<br>"+
    "가득 쌓인 업무 때문에 쉴 틈틈틈"+"<br>"+
    "없어 졌어 입술이 또 텄어"+"<br>"+
    "얼굴 위에 그어진 빗금금금"+"<br>"+
    "전쟁 같은 삶 때문에"+"<br>"+
    "거울에 비친 우린 수척해"+"<br>"+
    "오늘의 해가 떨어졌으니"+"<br>"+
    "전화기를 꺼 모두 여기로 출석 check"+"<br>"+
    "일자리 구하기는 저 하늘에 별별별"+"<br>"+
    "가족들의 기대치는 덜덜덜"+"<br>"+
    "오늘도 미끄러진 백조 백수들에게는"+"<br>"+
    "휴식마저 벌벌벌"+"<br>"+
    "다 잊자 오늘밤만은"+"<br>"+
    "만들자 우리만의 추억이란 작품"+"<br>"+
    "이건 낭비가 아닌 재충전"+"<br>"+
    "사막 같은 삶을 위한 생수병"+"<br>"+
    "오늘은 여기로 출 check"+"<br>"+
    "모여라 여기로 출 check"+"<br>"+
    "왼쪽 사람들 출 check"+"<br>"+
    "오른쪽 사람들 출 check"+"<br>"+
    "어서 baby 어서 여기 모여"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "어서 baby 어서 여기"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "지구를 들어버리겠다며"+"<br>"+
    "당돌하게 거꾸로 물구나무를 섰던 우린데"+"<br>"+
    "세상의 짐을 혼자 짊어진 듯"+"<br>"+
    "허리를 굽히며 중력에 굴복해"+"<br>"+
    "이 사회가 원하는건"+"<br>"+
    "그저 높은 수치의 판매실적"+"<br>"+
    "오늘 만큼은 우린 반역자"+"<br>"+
    "모두 여기로 출석 check"+"<br>"+
    "그만 걱정해 이젠 결정해"+"<br>"+
    "오랜 시간 고민하는것은 멍청해"+"<br>"+
    "때로 우린 스스로에게도 businessman"+"<br>"+
    "그건 내 안의 소리에 대한 disrespect"+"<br>"+
    "just do it 맘이 시키는대로"+"<br>"+
    "내일 일은 내일 고민해 놀아 맘대로"+"<br>"+
    "눈치 보면서 꾸물대지마 yo"+"<br>"+
    "그러다가 오늘밤도 공치니까"+"<br>"+
    "오늘은 여기로 출 check"+"<br>"+
    "모여라 여기로 출 check"+"<br>"+
    "일하는 사람들 출 check"+"<br>"+
    "노는 사람들 출 check"+"<br>"+
    "어서 baby 어서 여기 모여"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "어서 baby 어서 여기"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "free your mind"+"<br>"+
    "어서 baby 어서 모두 모여"+"<br>"+
    "you baby you`re so special tonight"+"<br>"+
    "어서 baby 걱정들은 잊어 tonight"+"<br>"+
    "전쟁터의 군인들도"+"<br>"+
    "오늘은 무기를 버리고 휴전"+"<br>"+
    "사랑이 전쟁인 연인들도"+"<br>"+
    "오늘은 성질을 죽이고 휴전"+"<br>"+
    "회사도 노조들도"+"<br>"+
    "오늘은 분쟁을 멈추고 휴전"+"<br>"+
    "선생님 학교 학생들도"+"<br>"+
    "교과서를 버리고 휴전"+"<br>"+
    "어서 baby 어서 여기 모여"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "어서 baby 어서 여기"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "오늘만큼 free your mind"+"<br>"+
    "출 check"+"<br>"+
    "출 check"+"<br>"+
    "출 check"+"<br>"+
    "출 check"+"<br>"+
    "출석 check");

    addSong('불꽃놀이 (Fireworks)', 'musics/excited/cd-09.png', 'musics/excited/09.mp3', '다이나믹 듀오', '3:52',
    "민폐 좀 끼쳐볼까 진상 좀 부려볼까"+"<br>"+
    "Do some crazy do some crazy"+"<br>"+
    "Do some crazy do some crazy"+"<br>"+
    "분위기 좀 타볼까 롤러코스터처럼"+"<br>"+
    "다 가식 떨지 말고 대신 팔과 다릴 떨어"+"<br>"+
    "오늘은 시기적으로 나를 위한 이기적인 밤"+"<br>"+
    "먹고 사느라 지친 내가 쉬기 좋은 밤"+"<br>"+
    "맘대로 내뱉어봐 오늘밤은"+"<br>"+
    "여지까지 참아 왔던 말들"+"<br>"+
    "그 누가 쳐다보든 말던 간에 신경 꺼 소리질러 오늘 만은"+"<br>"+
    "억눌린 감정은 폭탄 도화선에다가 불을 붙여"+"<br>"+
    "무의식이 노래하는 리듬에 맞춰서 니 본능이 시키는 대로 춤춰"+"<br>"+
    "오늘밤에 민폐 좀 끼쳐볼까"+"<br>"+
    "완전 진상 떨고 개처럼 미쳐볼까"+"<br>"+
    "정신 없이 터지는 하늘에 불꽃처럼"+"<br>"+
    "피어라 피어라 계속 피어라 피어라"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "엔돌핀이 솟구쳐 하 하 하 하"+"<br>"+
    "심장은 계속 요동쳐 하 하 하 하"+"<br>"+
    "자는 친구들 다 깨워 모두 같이 밤새워 불꽃놀이를 해 볼까"+"<br>"+
    "Lets rock rock rock rock~~"+"<br>"+
    "온몸에 수분이 다 빠져 탈진할 때까지"+"<br>"+
    "너 놀아봐 놀아봐 하늘에 보름달이 다 지날 때까지"+"<br>"+
    "너 바보같이 자꾸 미련 두면 병 돼"+"<br>"+
    "부모님 컴처럼 다운되면 안돼"+"<br>"+
    "지금 이순간 필요한 상태 Adrenalin rush"+"<br>"+
    "오늘밤에 민폐 좀 끼쳐볼까"+"<br>"+
    "완전 진상 떨고 개처럼 미쳐볼까"+"<br>"+
    "정신 없이 터지는 하늘에 불꽃처럼"+"<br>"+
    "피어라 피어라 계속 피어라 피어라"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "베이스라인 Boom Boom (Boom Boom)"+"<br>"+
    "심장은 쿵 쿵 (쿵 쿵)"+"<br>"+
    "킥드럼은 Doom Doom (Doom Doom)"+"<br>"+
    "Let's body body 차오르는 숨 숨"+"<br>"+
    "오늘밤에 민폐 좀 끼쳐볼까"+"<br>"+
    "완전 진상 떨고 개처럼 미쳐볼까"+"<br>"+
    "정신 없이 터지는 하늘에 불꽃처럼"+"<br>"+
    "피어라 피어라 계속 피어라 피어라"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "오늘밤에 민폐 좀 끼쳐볼까"+"<br>"+
    "완전 진상 떨고 개처럼 미쳐볼까"+"<br>"+
    "정신 없이 터지는 하늘의 불꽃처럼"+"<br>"+
    "피어라 피어라 계속 피어라 피어라"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!"+"<br>"+
    "fireworks again!");

    addSong('행운을 빌어요', 'musics/excited/cd-10.png', 'musics/excited/10.mp3', '페퍼톤스', '4:20',
    "반짝 눈부신 날"+"<br>"+
    "쨘하고 나타날 것 같아"+"<br>"+
    "방금 짓궂은 그 표정"+"<br>"+
    "문득 머리위로"+"<br>"+
    "차가운 공기가 흐른다"+"<br>"+
    "이젠 인사를 할 시간"+"<br>"+
    "시작하는 여행자여 안녕"+"<br>"+
    "언젠가 우리 다시 만날때"+"<br>"+
    "오 그대로 내가 사랑한"+"<br>"+
    "너의 말투 너의 웃음 그대로"+"<br>"+
    "생각해보면 똑같은 풍경"+"<br>"+
    "이 하늘과 바람, 복잡한 도시"+"<br>"+
    "오 그대여 눈을 감으면"+"<br>"+
    "나는 늘 여기서 널 기다리고 있을 테니까"+"<br>"+
    "행운을 빌어줘요"+"<br>"+
    "웃음을 보여줘요"+"<br>"+
    "눈물은 흘리지 않을게, 굿바이"+"<br>"+
    "뒤돌아 서지마요"+"<br>"+
    "쉼없이 달려가요"+"<br>"+
    "노래가 멈추지 않도록"+"<br>"+
    "수많은 이야기"+"<br>"+
    "끝없는 모험만이"+"<br>"+
    "그대와 함께이길-"+"<br>"+
    "안녕 고마웠어"+"<br>"+
    "짧았던 너와 나의 계절"+"<br>"+
    "끝은 또 하나의 시작"+"<br>"+
    "잔뜩 배낭을 멘"+"<br>"+
    "작은 어깨를 두드린다"+"<br>"+
    "이젠 떠나야 할 시간"+"<br>"+
    "숨가쁜 시간의 강을 건너"+"<br>"+
    "엇갈린 축의 바람이 분다"+"<br>"+
    "오 그대 작은 별이 되기를"+"<br>"+
    "망설였던 나의 서툰 노래 이젠 할 수 있어"+"<br>"+
    "행운을 빌어줘요"+"<br>"+
    "웃음을 보여줘요"+"<br>"+
    "눈물은 흘리지 않을게, 굿바이"+"<br>"+
    "뒤돌아 서지마요"+"<br>"+
    "쉼없이 달려가요"+"<br>"+
    "노래가 멈추지 않도록"+"<br>"+
    "수많은 이야기"+"<br>"+
    "끝없는 모험만이"+"<br>"+
    "그대와 함께이길"+"<br>"+
    "행운을 빌어요"+"<br>"+
    "빛나기 시작한 별"+"<br>"+
    "세차게 부는 바람"+"<br>"+
    "눈물은 흘리지 않을게, 굿바이"+"<br>"+
    "오랜 시간이 흘러"+"<br>"+
    "쓰러질 듯 벅찬 날"+"<br>"+
    "이 서툰 노래가 닿기를"+"<br>"+
    "긴 여행의 날들"+"<br>"+
    "끝없는 행운만이"+"<br>"+
    "그대와 함께이길");

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
    stroke('#3BCD7C');
    strokeWeight(5);
    strokeCap(SQUARE);
    let angle =  getProgress() * 2*PI;
    arc(185, 185, 340, 340, -PI/2, -PI/2 + angle);

    let x = 185 + 170*cos(-PI/2 + angle);
    let y = 185 + 170*sin(-PI/2 + angle);
    noStroke();
    fill('#3BCD7C');
    circle(x, y, 20);
    
}

// =============팁 추가=============

$('.close-btn').click(function(){
    $('#feeling-tips').fadeOut(500);
  });

$('.feeling').click(function(){
  $('#feeling-tips').fadeIn(500);
});