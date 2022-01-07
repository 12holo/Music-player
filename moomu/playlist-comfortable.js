let currentPlaying; // 현재 재생되고 있는 리스트 아이템의 index
let currentAudio; // 현재 재생되는 있는 리스트 아이템의 audio 태그

let angle = 0;

$(function(){
    // ===== List 생성하기 =====
    // addItem('Happy Life', 'musics/playlist.png', 'musics/00.mp3');
    // addItem('Jarico - Island', 'musics/01.png', 'musics/01.mp3');
    // addItem('Jarico - Landscape', 'musics/02.png', 'musics/02.mp3');


    // ===== SongList 생성하기 =====
    // addSong('Love Again', 'musics/comfortable/cd-01.png', 'musics/comfortable/01.mp3', '백현(BAEKHYUN)', '3:24');
    // addSong('Empty Room', 'musics/comfortable/cd-02.png', 'musics/comfortable/02.mp3', '이바다(Leebada)', '3:24');
    // addSong('와르르♥', 'musics/comfortable/cd-03.png', 'musics/comfortable/03.mp3', 'Colde(콜드)', '4:32');
    // addSong('Favorite (feat. punchneollo, SOLE)', 'musics/comfortable/cd-04.png', 'musics/comfortable/04.mp3', '그리즐리(Grizzly)', '3:03');
    // addSong('soft', 'musics/comfortable/cd-05.png', 'musics/comfortable/05.mp3', 'jeebanoff(지바노프)', '2:58');
    // addSong('Each Other (feat, SOLE)', 'musics/comfortable/cd-06.png', 'musics/comfortable/06.mp3', 'jeebanoff(지바노프)', '3:50');
    // addSong('let`s go picnic', 'musics/comfortable/cd-07.png', 'musics/comfortable/07.mp3', '죠지(George)', '3:51');
    // addSong('잘 지내(Letter)', 'musics/comfortable/cd-08.png', 'musics/comfortable/08.mp3', '적재', '3:30');
    // addSong('멍(Brain Fade)', 'musics/comfortable/cd-09.png', 'musics/comfortable/09.mp3', '신스틸러(Sinstealer)', '2:38');
    // addSong('가을냄새(Fall Scent)', 'musics/comfortable/cd-10.png', 'musics/comfortable/10.mp3', '신스틸러(Sinstealer)', '3:39');
    
    addSong('Love Again', 'musics/comfortable/cd-01.png', 'musics/comfortable/01.mp3', '백현(BAEKHYUN)', '3:24',
    '다시 한번 내게 말해줘' + '<br>' +
    '다시 그날처럼 사랑한다고 해줘' + '<br>' +
    '믿을 수 없었지 너의 모든 것에' + '<br>' +
    'Like looking in the mirror' + '<br>' +
    '닮아 있던 우리' + '<br>' +
    '사랑을 말해주던 그 예쁜 입술이' + '<br>' +
    '꾹 잠궈진 듯 아무 말 없네' + '<br>' +
    '난 이해가 안돼 마음으로는 왜' + '<br>' +
    '날 사랑한다 해놓고 더 도망치려 해' + '<br>' +
    '우리 사랑의 Race 끝날 수 없게 Babe' + '<br>' +
    '지금 돌아서면 다신 돌아갈 수 없다고' + '<br>' +
    '다시 한번 내게 말해줘' + '<br>' +
    '나를 사랑한다고 해줘' + '<br>' +
    'Don`t leave me alone baby' + '<br>' +
    'Just stay for the night baby' + '<br>' +
    '날 떠나지 않겠다고 말해줘' + '<br>' +
    'Tell me your love again' + '<br>' +
    'Come back to me again' + '<br>' +
    'Tell me your love again' + '<br>' +
    'Come back to me again' + '<br>' +
    '돌려놓을래 전부' + '<br>' +
    '난 제자리고 I still love you' + '<br>' +
    '너가 채워주던 내 모든 것들이' + '<br>' +
    '떠 있어 마치 Balloon' + '<br>' +
    '그 기억들로 가득해 전부' + '<br>' +
    '여전히 나는 그대로인데' + '<br>' +
    '난 이해가 안돼 마음으로는 왜' + '<br>' +
    '날 사랑한다 해놓고 더 도망치려 해' + '<br>' +
    '우리 사랑의 Race 끝날 수 없게 Babe' + '<br>' +
    '지금 돌아서면 다신 돌아갈 수 없다고' + '<br>' +
    '다시 한번 내게 말해줘' + '<br>' +
    '나를 사랑한다고 해줘' + '<br>' +
    'Don`t leave me alone baby' + '<br>' +
    'Just stay for the night baby' + '<br>' +
    '날 떠나지 않겠다고 말해줘' + '<br>' +
    'Tell me your love again' + '<br>' +
    'Come back to me again' + '<br>' +
    'Tell me your love again' + '<br>' +
    'Come back to me again'
    );
    

    addSong('Empty Room', 'musics/comfortable/cd-02.png', 'musics/comfortable/02.mp3', '이바다(Leebada)', '3:24',
    '나의 밤이 길듯이' + '<br>' +
    '너의 밤도 길겠지' + '<br>' +
    '하얗게 어둠을 밀어내' + '<br>' +
    '무섭게 내 맘을 무너뜨려' + '<br>' +
    '뭐가 답인지 모를 때' + '<br>' +
    '나의 손을 잡아줘' + '<br>' +
    '나의 눈동자 그 안은' + '<br>' +
    '이미 텅 비워져 아무것도 할 수 없어' + '<br>' +
    'Empty room' + '<br>' +
    'Empty room' + '<br>' +
    'Empty room uh' + '<br>' +
    '다시 또 채워져 My room' + '<br>' +
    'Empty room uh' + '<br>' +
    'I know you don`t need me anymore' + '<br>' +
    '너의 눈 속에 이야기들이' + '<br>' +
    '나의 밤을 걷어내' + '<br>' +
    '귓속엔 음악을 채우고' + '<br>' +
    '걷는 이 밤에 넌 조용히' + '<br>' +
    '내 맘을 무너뜨려' + '<br>' +
    'Black out my empty room' + '<br>' +
    'Black out my empty room' + '<br>' +
    'Empty room' + '<br>' +
    'Empty room' + '<br>' +
    'Empty room uh' + '<br>' +
    '다시 또 채워져 My room' + '<br>' +
    'Empty room uh' + '<br>' +
    '나의 밤이 길듯이' + '<br>' +
    '우린 잠 못 들어 눈을 떠' + '<br>' +
    '너는 왜 바보같이 또' + '<br>' +
    '어린 소녀가 돼 웅크려' + '<br>' +
    '속으로 삼키는 일들이 내 목을 조여와' + '<br>' +
    '너로 가득 채워' + '<br>' +
    'Empty room' + '<br>' +
    'Empty room' + '<br>' +
    'Empty room uh' + '<br>' +
    '다시 또 채워져 My room' + '<br>' +
    'Empty room uh'
    );


    addSong('와르르♥', 'musics/comfortable/cd-03.png', 'musics/comfortable/03.mp3', 'Colde(콜드)', '4:32',
    '가만 보면 너는 진짜 너무해' + '<br>' +
    '때론 날 무심하게 내팽개친 채' + '<br>' +
    '불안함이란 벌을 내려줘' + '<br>' +
    '그럴 때면 난 길을 잃은 강아지가 돼' + '<br>' +
    '고개를 푹 숙인 채 걷네' + '<br>' +
    '그냥 난 네 품에 안겨있고 싶은데' + '<br>' +
    '날이 선 너의 말들에 찔려서' + '<br>' +
    '피가 났어 난' + '<br>' +
    '근데 걱정은커녕' + '<br>' +
    '혼자 낫는 법을 너는 알려줘' + '<br>' +
    '그러다가도 헷갈리게' + '<br>' +
    '가끔은 예쁨을 내게 줘' + '<br>' +
    '그럴 때면 나는 어떻게 해야 될지 몰라' + '<br>' +
    '난 와르르' + '<br>' +
    '무너지고 말아' + '<br>' +
    '나의 맘은' + '<br>' +
    '와르르' + '<br>' +
    '내게 이러지 마 Baby' + '<br>' +
    '너 없는 하루는' + '<br>' +
    '상상하기조차 싫은 걸' + '<br>' +
    '아무것도 할 수 없을 걸' + '<br>' +
    '난 바보가 돼버릴 거야' + '<br>' +
    'Baby' + '<br>' +
    '와르르' + '<br>' +
    '무너지고 말아' + '<br>' +
    '나의 맘은' + '<br>' +
    '와르르' + '<br>' +
    '내게 이러지 마 Baby' + '<br>' +
    '너 없는 하루는' + '<br>' +
    '상상하기조차 싫은 걸' + '<br>' +
    '아무것도 할 수 없을 걸' + '<br>' +
    '난 바보가 돼버릴 거야' + '<br>' +
    '분명히 나는 얘기했어' + '<br>' +
    '그날 너에게 사랑을 말할 때' + '<br>' +
    '어떤 순간들이 우리를 찾아와도' + '<br>' +
    '흔들리지 않기로 해' + '<br>' +
    '근데 넌 파도를 타듯 Ay' + '<br>' +
    '내 맘을 마구 휘젓네 Ay' + '<br>' +
    '나 가라앉지 않게 구명조끼라도 줘' + '<br>' +
    '사랑은 나를 시험해' + '<br>' +
    '난 밀린 숙제 검사를 맡네' + '<br>' +
    '도저히 못 풀겠을 땐' + '<br>' +
    '그냥 너가 좀 알려줘 Yeah' + '<br>' +
    '정답을 알게 됐을 땐' + '<br>' +
    '환한 미소를 내게 줘' + '<br>' +
    '나를 정신 못 차리게' + '<br>' +
    '만들어줘' + '<br>' +
    '난 와르르' + '<br>' +
    '무너지고 말아' + '<br>' +
    '나의 맘은' + '<br>' +
    '와르르' + '<br>' +
    '내게 이러지 마 Baby' + '<br>' +
    '너 없는 하루는' + '<br>' +
    '상상하기조차 싫은 걸' + '<br>' +
    '아무것도 할 수 없을 걸' + '<br>' +
    '난 바보가 돼버릴 거야' + '<br>' +
    'Baby' + '<br>' +
    '와르르' + '<br>' +
    '무너지고 말아' + '<br>' +
    '나의 맘은' + '<br>' +
    '와르르' + '<br>' +
    '내게 이러지 마 Baby' + '<br>' +
    '너 없는 하루는' + '<br>' +
    '상상하기조차 싫은 걸' + '<br>' +
    '아무것도 할 수 없을 걸' + '<br>' +
    '난 바보가 돼버릴 거야'
    );


    addSong('Favorite (feat. punchneollo, SOLE)', 'musics/comfortable/cd-04.png', 'musics/comfortable/04.mp3', '그리즐리(Grizzly)', '3:03',
    'I like the way you are' + '<br>' +
    'I like the way you are' + '<br>' +
    'Teach me patience' + '<br>' +
    'Quiet ambience' + '<br>' +
    'Let me know' + '<br>' +
    'I like the way you are' + '<br>' +
    '알고 싶어 너의 Favorite' + '<br>' +
    '어떻게 하면 너의 Favorite이' + '<br>' +
    '내가 될까' + '<br>' +
    'Changes' + '<br>' +
    '기회를 줘' + '<br>' +
    '쉽진 않겠지만' + '<br>' +
    'I`m going through' + '<br>' +
    '네 방식대로' + '<br>' +
    '날 리드해 줘' + '<br>' +
    '오히려 Baby' + '<br>' +
    'I follow you' + '<br>' +
    'I like the way you are' + '<br>' +
    'I like the way you are' + '<br>' +
    'Wait till I tell you to do something' + '<br>' +
    '말로만 그런 거 말고 Baby' + '<br>' +
    '걱정은 마 천천히 If you wanna feel me' + '<br>' +
    'I don`t wanna stop it' + '<br>' +
    '조금 더 가까이 날 안아줘' + '<br>' +
    '니 눈에 비친 내 모습에 Uh' + '<br>' +
    '너와 나 스며들어가 더 깊이' + '<br>' +
    'So umm 어렵지 않게 좀 천천히' + '<br>' +
    'Don`t worry about it' + '<br>' +
    '난 알고 싶어 너를 천천히' + '<br>' +
    '점점 좁혀지는 것 같아 너와 나의 거리' + '<br>' +
    'How do you want it my baby?' + '<br>' +
    'How do you how do you want it my baby?' + '<br>' +
    '내게로 와 손을 잡는 게 좋은지' + '<br>' +
    '안고 있는 게 좋은지 내게 말해줘' + '<br>' +
    '내가 너를 리드하는 게 좋은지' + '<br>' +
    '네가 원하는 걸 말해줘 날' + '<br>' +
    '어지럽게 하는 너의 모습' + '<br>' +
    '네가 정말 원하는 걸 말해줘 Baby' + '<br>' +
    'How do you want it my baby?' + '<br>' +
    'How do you how do you want it my baby?' + '<br>' +
    'I like the way you are' + '<br>' +
    'I like the way you are' + '<br>' +
    'I like the way you are' + '<br>' +
    'I like the way you are'
    );


    addSong('soft', 'musics/comfortable/cd-05.png', 'musics/comfortable/05.mp3', 'jeebanoff(지바노프)', '2:58',
    '늦은 아침부터 새벽밤까지' + '<br>' +
    '보통 네 생각을 해' + '<br>' +
    '네가 일할 시간도 빼고선' + '<br>' +
    '또 마냥 보고싶다고 해' + '<br>' +
    
    '니가 뭘 듣고 있는지' + '<br>' +
    '뭘 보고 있는지 묻고 싶어도' + '<br>' +
    '자주 참곤해 uh ooh' + '<br>' +
    
    '쉬고 싶어도 쉬어지지가 않아' + '<br>' +
    '잠들려고 해도' + '<br>' +
    'eh 뭐가 있는듯 해' + '<br>' +
    
    'Feel so soft 움직여줘' + '<br>' +
    '작은 우주 안에서' + '<br>' +
    '날 끌어당겨줘' + '<br>' +
    
    'Feel so soft 다가와줘' + '<br>' +
    '절대 머물지 말고' + '<br>' +
    '나와 함께 가줘' + '<br>' +
    
    '여기 네가 다녀간' + '<br>' +
    '침대방 안에서 또 니 생각을해' + '<br>' +
    '종이컵에 눌린 네 이빨자국과' + '<br>' +
    '네 입술이 선명해' + '<br>' +
    
    '니가 뭘 듣고 있는지' + '<br>' +
    '뭘 보고 있는지 묻고 싶어도' + '<br>' +
    '자주 참곤해 uh ooh' + '<br>' +
    
    '쉬고 싶어도 쉬어 지지가 않아' + '<br>' +
    '잠들려고 해도' + '<br>' +
    'eh 뭐가 있는듯 해' + '<br>' +
    
    'Feel so soft 움직여줘' + '<br>' +
    '작은 우주 안에서' + '<br>' +
    '날 끌어당겨줘' + '<br>' +
    
    'Feel so soft 다가와줘' + '<br>' +
    '절대 머물지말고' + '<br>' +
    '나와 함께가줘' + '<br>' +
    
    'Feel so soft, ooh' + '<br>' +
    '우주 안에서' + '<br>' +
    '저 멀리서 머물지 말고'
    );


    addSong('Each Other (feat, SOLE)', 'musics/comfortable/cd-06.png', 'musics/comfortable/06.mp3', 'jeebanoff(지바노프)', '3:50',
    '우린 하나부터 열까지 맞는 구석도 없이' + '<br>' +
    '긴 시간을 낭비해왔었던 거지' + '<br>' +
    '흐린 날에 날씨보다 우리 둘의 기류가' + '<br>' +
    '더 좋지 못했다 해도 과장은 아니지' + '<br>' +
    '서로 다른 걸 알면서도 그만두지는 못해' + '<br>' +
    '이게 정인지 사랑인지' + '<br>' +
    '구분 못한지 오래지 왜 우린' + '<br>' +
    '여기까지 오게 된 건지' + '<br>' +
    '그댄 사랑을 원래 이렇게' + '<br>' +
    '힘들게만 해왔었던 거였나요' + '<br>' +
    '제겐 그동안 우리 둘 만남에' + '<br>' +
    '좋은 기억은 남아있질 않네요' + '<br>' +
    '항상 좋은 추억만 주겠다 약속했는데' + '<br>' +
    '이젠 다른 끝을 보고 있죠' + '<br>' +
    '아마 다음에 다시 만남 다를 수도 있겠죠' + '<br>' +
    '헌데 그걸 원치 않는 걸 알아요' + '<br>' +
    '뭐가 대체 너와 내 사이를' + '<br>' +
    '갈라놓고 있는 거였을까' + '<br>' +
    '사실 우린 서로가 서로를' + '<br>' +
    '밀쳐내는 중이었던 걸까' + '<br>' +
    '왜 항상 이렇게 끝을 봐야만 해' + '<br>' +
    '내 맘엔 더 이상 잃을 것도 없는데' + '<br>' +
    '아무 말도 하지 않는 너와 난' + '<br>' +
    '이렇게 맘 아파하기도' + '<br>' +
    '더 이상 난 두려워' + '<br>' +
    '서로의 말은 바늘처럼' + '<br>' +
    '우릴 깊이 파고들어 와' + '<br>' +
    '괴롭게 해' + '<br>' +
    '힘들어 이젠 When I think about you' + '<br>' +
    '너도 알잖아 우리가 왜 자꾸' + '<br>' +
    '엇갈리고만 있는지' + '<br>' +
    '왜 같은 끝에서 맴도는지' + '<br>' +
    '항상 좋은 기억만 주겠단' + '<br>' +
    '너의 말은 대체 어디에' + '<br>' +
    '뭐가 대체 너와 내 사이를' + '<br>' +
    '갈라놓고 있는 거였을까' + '<br>' +
    '사실 우린 서로가 서로를' + '<br>' +
    '밀쳐내는 중이었던 걸까' + '<br>' +
    '왜 항상 이렇게 끝을 봐야만 해' + '<br>' +
    '내 맘엔 더 이상 잃을 것도 없는데' + '<br>' +
    '뭐가 대체 너와 내 사이를' + '<br>' +
    '갈라놓고 있는 거였을까' + '<br>' +
    '사실 우린 서로가 서로를' + '<br>' +
    '밀쳐내는 중이었던 걸까' + '<br>' +
    '왜 항상 이렇게 끝을 봐야만 해' + '<br>' +
    '내 맘엔 더 이상 잃을 것도 없는데'
    );


    addSong('let`s go picnic', 'musics/comfortable/cd-07.png', 'musics/comfortable/07.mp3', '죠지(George)', '3:51',
    '난 너의 뒤에 설 때' + '<br>' +
    '밀려오는 듯한 너의 냄새가 좋아' + '<br>' +
    '활짝 피어있는 꽃들을' + '<br>' +
    '지날 때 마다 너를 느껴' + '<br>' +
    '늘 똑같은 공기를 너와 마시면' + '<br>' +
    '마냥 좋을 것만 같아' + '<br>' +
    '눈 꼭 감은 채로' + '<br>' +
    '이대로 여기서 몸을 누이고 싶어' + '<br>' +
    '오늘같은 이런 날이 올 때면' + '<br>' +
    '렛츠고 피크닉 Oh oh with a girl friend' + '<br>' +
    '내리쬐는 햇살 가득한 공원' + '<br>' +
    'Let`s go picnic oh oh with a girl friend' + '<br>' +
    '몸을 뒤로 젖혀' + '<br>' +
    '(점점 더) 멀어져 가는 해를 바라보면서' + '<br>' +
    '두 팔 가득 벌려 널 안고있으면' + '<br>' +
    '시간이 멈춘 듯해' + '<br>' +
    '늘 똑같은 공기를 너와 마시면' + '<br>' +
    '마냥 좋을 것만 같아' + '<br>' +
    '눈 꼭 감은 채로 이대로' + '<br>' +
    '여기서 몸을 누이고 싶어' + '<br>' +
    '오늘같은 이런 날이 올 때면' + '<br>' +
    '렛츠고 피크닉 Oh oh with a girl friend' + '<br>' +
    '내리쬐는 햇살 가득한 공원' + '<br>' +
    'Let`s go picnic oh oh with a girl friend' + '<br>' +
    '오늘같은 날에 Baby 너와 함께' + '<br>' +
    '있는다는 게 나는 꿈만 같아서' + '<br>' +
    '저기 떨어지는 별을 보면서' + '<br>' +
    '우리 변치 말자고 굳게 약속 했었지' + '<br>' +
    '오늘같은 이런 날이 올 때면' + '<br>' +
    '렛츠고 피크닉 Oh oh with a girl friend' + '<br>' +
    '내리쬐는 햇살 가득한 공원' + '<br>' +
    'Let`s go picnic oh oh with a girl friend'
    );


    addSong('잘 지내(Letter)', 'musics/comfortable/cd-08.png', 'musics/comfortable/08.mp3', '적재', '3:30',
    '나는 잘 지내' + '<br>' +
    '요즘 잠이 좀 없어졌어' + '<br>' +
    '그것 말고는' + '<br>' +
    '거의 똑같은 하루를 보내' + '<br>' +
    '여전히 아침은 거르고' + '<br>' +
    '커피숍에 들러서' + '<br>' +
    '하루를 시작해' + '<br>' +
    '요즘 이상해' + '<br>' +
    '머릿속이 복잡해졌어' + '<br>' +
    '누구 말로는' + '<br>' +
    '너 요즘 너무 예민하대' + '<br>' +
    '여전히 사랑은 어렵고' + '<br>' +
    '전화기 속 옛날 사진들 보면서' + '<br>' +
    '하루를 보내' + '<br>' +
    '내가 나를 아니까' + '<br>' +
    '더 이해가 안 돼' + '<br>' +
    '하루에도 꼭 몇 번씩' + '<br>' +
    '그때로 돌아가는 걸 보니까' + '<br>' +
    '이런 나를 보니까' + '<br>' +
    '이젠 알 것 같아' + '<br>' +
    '여전히 난 그곳에 있어' + '<br>' +
    '그대로 머물러 있어' + '<br>' +
    '나는 잘 지내' + '<br>' +
    '요즘 말이 좀 없어졌어' + '<br>' +
    '사람 만나도' + '<br>' +
    '재밌지가 않아' + '<br>' +
    '여전히 하루는 버겁고' + '<br>' +
    '내일이 오면 또 달라질까' + '<br>' +
    '하는 생각에 난' + '<br>' +
    '또 하루를 견뎌' + '<br>' +
    '내가 나를 아니까' + '<br>' +
    '더 이해가 안 돼' + '<br>' +
    '하루에도 꼭 몇 번씩' + '<br>' +
    '그때로 돌아가는 걸 보니까' + '<br>' +
    '이런 나를 보니까' + '<br>' +
    '이젠 알 것 같아' + '<br>' +
    '여전히 난 그곳에 있어' + '<br>' +
    '그대로 머물러 있어' + '<br>' +
    '내 하루를 보니까' + '<br>' +
    '네 기분은 어때' + '<br>' +
    '아무렇지 않은데' + '<br>' +
    '괜한 말을 꺼낸 건 아닐까' + '<br>' +
    '시간은 계속 가니까' + '<br>' +
    '그나마 위로가 돼' + '<br>' +
    '언젠간 분명히 잊어' + '<br>' +
    '그때가 올 거라 믿어');


    // addSong('멍(Brain Fade)', 'musics/comfortable/cd-09.png', 'musics/comfortable/09.mp3', '신스틸러(Sinstealer)', '2:38',
    // '눈동자의 초점은 잃은 채' + '<br>' +
    // '순서 없는듯한 일정한 빗소리에' + '<br>' +
    // '나는 멍때리네' + '<br>' +
    // '요즘 사람들은 다 그렇대' + '<br>' +
    // '한 시도 머리가 쉬지를 않네' + '<br>' +
    // '휴식이 필요하대' + '<br>' +
    // 'Brain fade is what you need' + '<br>' +
    // '멍 때릴 때 뇌가 똑똑해진대' + '<br>' +
    // 'Brain fade is what you need' + '<br>' +
    // '멍 때릴 때 뇌가 똑똑해진대' + '<br>' +
    // 'Brain fade is what you need' + '<br>' +
    // '멍 때릴 때 뇌가 똑똑해진대' + '<br>' +
    // 'Brain fade is what you need' + '<br>' +
    // '멍 때릴 때 뇌가 똑똑해진대'
    // );


    addSong('가을냄새(Fall Scent)', 'musics/comfortable/cd-10.png', 'musics/comfortable/10.mp3', '신스틸러(Sinstealer)', '3:39',
    'I feel the fall' + '<br>' +
    'I wish you feel the fall' + '<br>' +
    'I feel the fall with you' + '<br>' +
    '자전거 페달을 밟기가 쉽지 않아' + '<br>' +
    '계절이 바뀐 탓인지 몰라도' + '<br>' +
    '기온은 그 때의 기억을 가져다 줘' + '<br>' +
    '기분이 이상하게도 말이야' + '<br>' +
    '가을냄새가 나' + '<br>' +
    '머리보다 몸이 먼저 널 꺼내고' + '<br>' +
    '그런 널 한 번 생각해' + '<br>' +
    '더 이상은 그래' + '<br>' +
    '가을이 딱 그래' + '<br>' +
    '그리고 웃고 말어 웃고 말어' + '<br>' +
    'I feel the fall' + '<br>' +
    'I wish you feel the fall' + '<br>' +
    'I feel the fall with you' + '<br>' +
    '빨 주 노랗게 물든' + '<br>' +
    '하늘 보면 기분이 좋아' + '<br>' +
    '머리는 너로 물들어' + '<br>' +
    '그래서 너와의 추억이' + '<br>' +
    '좋은가 봐 그런가 봐' + '<br>' +
    '가을냄새가 나' + '<br>' +
    '머리보다 몸이 먼저 널 꺼내고' + '<br>' +
    '그런 널 한 번 생각해' + '<br>' +
    '더 이상은 그래' + '<br>' +
    '가을이 딱 그래' + '<br>' +
    '그리고 웃고 말어 웃고 말어' + '<br>' +
    'I feel the fall' + '<br>' +
    'I wish you feel the fall' + '<br>' +
    'I feel the fall with you'
    );
    


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
    stroke('#FEABA3');
    strokeWeight(5);
    strokeCap(SQUARE);
    let angle =  getProgress() * 2*PI;
    arc(185, 185, 340, 340, -PI/2, -PI/2 + angle);

    let x = 185 + 170*cos(-PI/2 + angle);
    let y = 185 + 170*sin(-PI/2 + angle);
    noStroke();
    fill('#FEABA3');
    circle(x, y, 20);
    
}

// =============팁 추가=============
$('.close-btn').click(function(){
    $('#feeling-tips').fadeOut(500);
  });

$('.feeling').click(function(){
  $('#feeling-tips').fadeIn(500);
});