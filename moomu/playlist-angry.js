 let currentPlaying; // 현재 재생되고 있는 리스트 아이템의 index
let currentAudio; // 현재 재생되는 있는 리스트 아이템의 audio 태그

let angle = 0;

$(function(){
    // ===== List 생성하기 =====
    // addItem('Happy Life', 'musics/playlist.png', 'musics/00.mp3');
    // addItem('Jarico - Island', 'musics/01.png', 'musics/01.mp3');
    // addItem('Jarico - Landscape', 'musics/02.png', 'musics/02.mp3');


    // ===== SongList 생성하기 =====
    // addSong('Break', 'musics/angry/cd-01.png', 'musics/angry/01.mp3', 'Beenzino(빈지노)', '3:04');
    // addSong('소년점프', 'musics/angry/cd-02.png', 'musics/angry/02.mp3', '마미손', '2:35');
    // addSong('작두 (feat. 넉살, Huckleberry P)', 'musics/angry/cd-03.png', 'musics/angry/03.mp3', '딥플로우', '4:47');
    // addSong('Born Hater (feat. 빈지노, 버벌진트, B.I, Mino, Bobby)', 'musics/angry/cd-04.png', 'musics/angry/04.mp3', '에픽하이', '3:07');
    // addSong('I`M FINE (feat. 염따)', 'musics/angry/cd-05.png', 'musics/angry/05.mp3', '재하', '2:38');
    // addSong('Gladiator', 'musics/angry/cd-06.png', 'musics/angry/06.mp3', 'Zayde Wolf', '3:08');
    // addSong('moneyflow(다 비켜봐)', 'musics/angry/cd-07.png', 'musics/angry/07.mp3', 'Mino, Zico, Paloalto', '3:18');
    // addSong('강아지', 'musics/angry/cd-08.png', 'musics/angry/08.mp3', '검정치마', '3:28');
    // addSong('범퍼카 (feat. NO_EL, Young B)', 'musics/angry/cd-09.png', 'musics/angry/09.mp3', '한요한', '3:20');

    addSong('Break', 'musics/angry/cd-01.png', 'musics/angry/01.mp3', 'Beenzino(빈지노)', '3:04',
    '난 자유롭고 싶어'+"<br>"+
    '지금 전투력 수치 111퍼'+"<br>"+
    '입고 싶은 옷 입고 싶어'+'<br>'+
    '길거리로 가서 시선을 끌고 싶어'+'<br>'+
    '내가 보기 싫은 새끼들의 지펄'+'<br>'+
    '닫아버리고 내 걸 열어주고 싶어'+'<br>'+
    '그래'+'<br>'+
    '할말은 하고 살고 싶어'+'<br>'+
    '그래'+'<br>'+
    '그래서 내게 욕을 하나 싶어'+'<br>'+
    '신경 꺼,'+'<br>'+
    '난 사랑하고 싶어'+'<br>'+
    '너도 나라도 아니고 날 말야'+'<br>'+
    '다른 나라라도 날아가고 싶어'+'<br>'+
    '일이라도 때려 쳐버리고 말야'+'<br>'+
    '난'+'<br>'+
    '난'+'<br>'+
    '일을 하기 싫어'+'<br>'+
    '기계처럼 일만 하며 고장 나기 싫어'+'<br>'+
    'Yeah'+'<br>'+
    '난 그러고 싶어'+'<br>'+
    '그게 나쁘던 좋던 말야'+'<br>'+
    
    '그게 나쁘던 좋던 만약'+'<br>'+
    '내가 재벌이고 싶으면 말야'+'<br>'+
    '그게 돼버리고 싶단 말야'+'<br>'+
    '난 그냥 돼버리고 싶어'+'<br>'+
    
    '주제파악이고 뭐고 shut up'+'<br>'+
    'And let me be who I am 그게 다야'+'<br>'+
    '내 주제라는 게 있다면 화약처럼'+'<br>'+
    '난 그냥 깨 부시고 싶어'+'<br>'+
    
    '깨 부시고 싶어'+'<br>'+
    '깨 부시고 싶어'+'<br>'+
    '깨 부시고 싶어'+'<br>'+
    '꾸꾸꾸꾸꿈 깨'+'<br>'+
    
    '깨버리기 싫어'+'<br>'+
    '깨버리기 싫어'+'<br>'+
    '깨버리기 싫어'+'<br>'+
    '꾸 꿈 깨기 싫다고'+'<br>'+
    '(꿈꿈꿈꿈꿈꿈꿈)'+'<br>'+
    
    '내가 하는 말 무슨 말인지 아는 사람?'+'<br>'+
    '그런 사람 여기 없어'+'<br>'+
    '없으면 됐어'+'<br>'+
    
    '없어도 난 됐어'+'<br>'+
    '난 혼자 관 뚜껑을 닫겠어'+'<br>'+
    '내가 살리고 싶은 건 내 개성'+'<br>'+
    '똑같은 새끼들은 지구에 세고 셌어'+'<br>'+
    '내 여자친군 내가 최고랬어'+'<br>'+
    '내 친구들은 PC방으로 퇴근했어'+'<br>'+
    '사람들은 성실하기만 바래서'+'<br>'+
    '피곤하지 날 걍 게으르게 냅둬'+'<br>'+
    '너넨'+'<br>'+
    '모두 줄자가 됐어'+'<br>'+
    '맨날 재고 재서 난 삐뚤하고 싶어'+'<br>'+
    '난'+'<br>'+
    '미꾸라지처럼 미끄럽고 싶어'+'<br>'+
    '싸우긴 싫어도 입 닥치긴 싫어'+'<br>'+
    '그래'+'<br>'+
    '난 시끄럽게 쥐뿔 없고 싶어'+'<br>'+
    '있으려고 그저 가만있기 싫어'+'<br>'+
    '있으려고 가만있기 보단'+'<br>'+
    '시끄럽게 쥐뿔 없고 싶어'+'<br>'+
    '근데 또 재벌이 되고 싶다고'+'<br>'+
    
    '그게 나쁘던 좋던 만약'+'<br>'+
    '내가 재벌이고 싶으면 말야'+'<br>'+
    '그게 돼버리고 싶단 말야'+'<br>'+
    '난 그냥 돼버리고 싶어'+'<br>'+
    
    '주제파악이고 뭐고 shut up'+'<br>'+
    'And let me be who I am 그게 다야'+'<br>'+
    '내 주제라는 게 있다면 화약처럼'+'<br>'+
    '난 그냥 깨 부시고 싶어'+'<br>'+
    
    '깨 부시고 싶어'+'<br>'+
    '깨 부시고 싶어'+'<br>'+
    '깨 부시고 싶어'+'<br>'+
    '꾸꾸꾸꾸꿈 깨'+'<br>'+
    
    '깨버리기 싫어'+'<br>'+
    '깨버리기 싫어'+'<br>'+
    '깨버리기 싫어'+'<br>'+
    '꾸 꿈 깨기 싫다고'+'<br>'+
    '(꿈꿈꿈꿈꿈꿈꿈)'+'<br>'+
    
    'I wanna be myself, I wanna be different'+'<br>'+
    'So let me be imperfect but you just can’t Resist it'+'<br>'+
    'But u can’t'+'<br>'+
    'Boi boi u hate'+'<br>'+
    'Why why'+'<br>'+
    'Are u so so so mad'+'<br>'+
    
    '깨깨깨깨깨깨깨'+'<br>'+
    '깨깨깨깨깨깨깨'+'<br>'+
    '깨깨깨깨깨깨깨'+'<br>'+
    '깨깨깨깨깨깨깨'+'<br>'+
    '깨깨깨깨깨깨깨'+'<br>'+
    '깨버리고 싶어'+'<br>'+
    
    '깨 부시고 싶어'+'<br>'+
    '깨 부시고 싶어'+'<br>'+
    '깨 부시고 싶어'+'<br>'+
    '꾸꾸꾸꾸꿈 깨'+'<br>'+
    
    '깨버리기 싫어'+'<br>'+
    '깨버리기 싫어'+'<br>'+
    '깨버리기 싫어'+'<br>'+
    '꾸 꿈 깨기 싫다고'+'<br>'+
    '(꿈꿈꿈꿈꿈꿈꿈)'
    
    );


    addSong('소년점프', 'musics/angry/cd-02.png', 'musics/angry/02.mp3', '마미손', '2:35',
    '폭염에 복면 쓰고'+'<br>'+
    '불구덩이에 처박힌 내 기분을'+'<br>'+
    '니들이 알아?'+'<br>'+
    '스윙스 기리 팔로 코쿤'+'<br>'+
    '악당들아 기다려라'+'<br>'+
    '이 만화에서 주인공은'+'<br>'+
    '절대 죽지 않아'+'<br>'+
    '계획대로 되고 있어'+'<br>'+
    'Ok 계획대로 되고 있어'+'<br>'+
    '소년점프 소년점프'+'<br>'+
    '와다다다다다다'+'<br>'+
    '와 나 시발 이거 완전히 좆됐네'+'<br>'+
    '제대로 빡세게 대가리 깸'+'<br>'+
    'But 아 필 라잌 소년 점프'+'<br>'+
    '실 그림 이거 완전 클래식 클리셰'+'<br>'+
    '주인공 초반에 고통 받고'+'<br>'+
    '각 잘 재고 무릎 팍 바닥 쳐 박고'+'<br>'+
    '야 병신새꺄 사실 다'+'<br>'+
    '추진력을 얻기 위함이라고'+'<br>'+
    '계획대로 돼가고 있어'+'<br>'+
    '청춘 만화 빡세게 찍듯'+'<br>'+
    '마미손 풋내기 슛부터 시작'+'<br>'+
    '산왕전 머리 위 슬램덩크'+'<br>'+
    'Click clack 부릅 부릅 부릅 Yeah 음 Ya'+'<br>'+
    '이게 요즘 유행이라며 한국힙합 망해라'+'<br>'+
    '내가 여기서 쓰러 질 거 같냐 새끼들아'+'<br>'+
    '넘어져도 쓰리고'+'<br>'+
    '인생은 길고 내 음악도 길어'+'<br>'+
    '모험은 시작됐어'+'<br>'+
    '마미손 가자 렛츠고'+'<br>'+
    '도넛맨 미안해'+'<br>'+
    '마이크 못 줘서 미안해'+'<br>'+
    '딥 넉살 더콰 창모'+'<br>'+
    '악당들아 기다려라'+'<br>'+
    '이 만화에서 주인공은'+'<br>'+
    '절대 죽지 않아'+'<br>'+
    '계획대로 되고 있어'+'<br>'+
    'Ok 계획대로 되고 있어'+'<br>'+
    '소년점프 소년점프 와다다다다다다'+'<br>'+
    '마미손 내 인생 존나 뻥 Yeah'+'<br>'+
    '손 쉬운 성공 꼴렸어 Yeah'+'<br>'+
    '몰랐어 실패는 졸라 써'+'<br>'+
    '쉬운 성공은 화장빨 졸라 뽀얘'+'<br>'+
    '그니까 폴라폰 포도 폴라포'+'<br>'+
    '냉장고 꺼내서 급하게 삼킴'+'<br>'+
    '뒷골 아퍼 Yeah'+'<br>'+
    '어 마미손 내 인생 존나 뻥 Yeah yeah'+'<br>'+
    '우주는 겁나게 크고'+'<br>'+
    '난 우주의 조빱 (조빱)'+'<br>'+
    '날 떨어뜨린 심사위원님들 나빠 (나빠)'+'<br>'+
    '돌 맞은 개구리처럼 난 지금 아파'+'<br>'+
    '하나님 빌어요'+'<br>'+
    '내 맘의 사랑과 평화 평화 평화'+'<br>'+
    '내가 여기서 쓰러 질 거 같냐 새끼들아'+'<br>'+
    '넘어져도 쓰리고'+'<br>'+
    '인생은 길고 내 음악도 길어'+'<br>'+
    '모험은 시작됐어 마미손 가자 렛츠고'+'<br>'+
    '도넛맨 미안해 마이크 못 줘서 미안해'+'<br>'+
    '스윙스 기리 팔로 코쿤'+'<br>'+
    '악당들아 기다려라'+'<br>'+
    '이 만화에서 주인공은'+'<br>'+
    '절대 죽지 않아'+'<br>'+
    '계획대로 되고 있어'+'<br>'+
    'Ok 계획대로 되고 있어'+'<br>'+
    '하 하 하 하 하 하'+'<br>'+
    '딥 넉살 더콰 창모'+'<br>'+
    '악당들아 기다려라'+'<br>'+
    '이 만화에서 주인공은'+'<br>'+
    '절대 죽지 않아'+'<br>'+
    '계획대로 되고 있어'+'<br>'+
    'Ok 계획대로 되고 있어'+'<br>'+
    '소년 점프 소년 점프 가자'+'<br>'+
    '폭염에 복면 쓰고'+'<br>'+
    '처박힌 불구덩이 기분을'+'<br>'+
    '니들이 알아?');
    

    addSong('작두 (feat. 넉살, Huckleberry P)', 'musics/angry/cd-03.png', 'musics/angry/03.mp3', '딥플로우', '4:47',
    '난 작두 타지 네 박자 위에서'+'<br>'+
    '내 무대는 굿판이고 또 그분이 오셔'+'<br>'+
    '정중히 모셔'+'<br>'+
    '판을 벌이자고 홍대'+'<br>'+
    '바닥에 박수들아 모여'+'<br>'+
    'Loyal rumble의 종을 울려 땡땡'+'<br>'+
    '이곳의 Back packers & Ladies'+'<br>'+
    '옷 헐렁한 걸뱅이들이'+'<br>'+
    '뒤섞여 랩 Gang bang'+'<br>'+
    '냄새 풀풀 나 킁킁 That`s true true'+'<br>'+
    '여기는 공개 진품명품 쇼'+'<br>'+
    'I prove prove'+'<br>'+
    '난 꿀꿀대며 신명 나게 춤을 출 뿐'+'<br>'+
    '다 나가떨어지는 낙엽'+'<br>'+
    '내 Flow 추풍'+'<br>'+
    'Blow 후후 오늘 내게 내린 걸신'+'<br>'+
    '다 쩝쩝쩝 먹어 치워'+'<br>'+
    '이 비트는 내 입가심'+'<br>'+
    '나를 보러 빨리 와'+'<br>'+
    '접신한 계집들은 교성 지르며 난리나'+'<br>'+
    '이번 굿판도 작두 위는 내 것'+'<br>'+
    '이 동네 잔칫상의 메뉴판'+'<br>'+
    '다 불가항력으로 메꿔'+'<br>'+
    '땀 냄새나 다 푹 젖어서'+'<br>'+
    '푹푹 찌네 어디 창문 좀 열어줘'+'<br>'+
    '지루한 래퍼들은 다 물러서'+'<br>'+
    '이제 그분이 오셔 그분이 오셔'+'<br>'+
    '작두 타타타 그분이 오셔 자꾸'+'<br>'+
    '하하하 하품 나는 짝퉁'+'<br>'+
    '가가가 가짜들은 싹둑'+'<br>'+
    'Cut cut cut 싹둑'+'<br>'+
    '작두 타타타 그분이 오셔 자꾸'+'<br>'+
    '하하하 하품 나는 짝퉁'+'<br>'+
    '가가가 가짜들은 싹둑'+'<br>'+
    'Cut cut cut 싹둑'+'<br>'+
    '저 애들을 봐 온 동네'+'<br>'+
    '구경이라도 난 듯'+'<br>'+
    '내 춤을 구경하네'+'<br>'+
    '날이 선 무대 위에 내 정신은 아득'+'<br>'+
    '다들 무엇을 원하는지'+'<br>'+
    '손을 뻗은 채로 홀린 눈빛'+'<br>'+
    '날 보는 너와 내가 본 너는'+'<br>'+
    '이미 둘이 아닌 하나일지도'+'<br>'+
    '우린 다들 돈에 씐 채로 살아'+'<br>'+
    '필요한 건 그걸'+'<br>'+
    '걷어내는 살풀이 일지도'+'<br>'+
    '넉살아 넌 무엇에 눈이 돌아 갔냐'+'<br>'+
    '난 그저 흥이 좀 과한 놈이 아닐까'+'<br>'+
    '몇 년 전에는 또'+'<br>'+
    '뻔하게 펜을 굴렸었는데'+'<br>'+
    '그건 날 내린'+'<br>'+
    '그분의 뜻이 아닌 것 같아'+'<br>'+
    '개새끼들 잡아먹는 야차로 태어났어'+'<br>'+
    '난 모습 그대로 몽둥이를 들고'+'<br>'+
    '소매를 바짝 올려'+'<br>'+
    '붙여 그래 계속 북 쳐'+'<br>'+
    '찾지 마라 부처'+'<br>'+
    '싹 다 밀어내 불도저'+'<br>'+
    '상구 형 등짝엔 도깨비들이 춤춰'+'<br>'+
    '귀신이 씐 얼굴 작두 위에'+'<br>'+
    '악마들이 춤춰'+'<br>'+
    '땀 냄새나 다 푹 젖어서'+'<br>'+
    '푹푹 찌네 어디 창문 좀 열어줘'+'<br>'+
    '지루한 래퍼들은 다 물러서'+'<br>'+
    '이제 그분이 오셔 그분이 오셔'+'<br>'+
    '작두 타타타 그분이 오셔 자꾸'+'<br>'+
    '하하하 하품 나는 짝퉁'+'<br>'+
    '가가가 가짜들은 싹둑'+'<br>'+
    'Cut cut cut 싹둑'+'<br>'+
    '작두 타타타 그분이 오셔 자꾸'+'<br>'+
    '하하하 하품 나는 짝퉁'+'<br>'+
    '가가가 가짜들은 싹둑'+'<br>'+
    'Cut cut cut 싹둑'+'<br>'+
    '래퍼들 굿판'+'<br>'+
    '싹 다 망치는 게 내 악취미'+'<br>'+
    '여기엔 날 그대로 빼다 박은'+'<br>'+
    '700 bounce with me'+'<br>'+
    '네 눈엔 이게 아직도'+'<br>'+
    '공연으로 보이냐?'+'<br>'+
    '이 신 내림을 막기엔'+'<br>'+
    '이제 V hall도 좁다'+'<br>'+
    '내가 뿌리는 물을'+'<br>'+
    '성수처럼 받아먹는 걔네들 때문에'+'<br>'+
    '난 거의 완전 신이라도 된 기분'+'<br>'+
    '나랑 비슷한 무당들이'+'<br>'+
    '다섯이나 대기 중'+'<br>'+
    'HILITE `좆나 쩌는 무대`의 기준'+'<br>'+
    '난 자의 반 또는'+'<br>'+
    '타의 반으로 Hilite의 Highlight'+'<br>'+
    '공연 다음 날 Twit timeline'+'<br>'+
    '좀 봤냐? 죄다 Hilite'+'<br>'+
    '우린 다음 Time을 망가뜨려'+'<br>'+
    '안타까운 상황'+'<br>'+
    '네가 암만 잘해봤자'+'<br>'+
    '넌 그냥 박사 우린 아인슈타인'+'<br>'+
    'Now take it to the next level'+'<br>'+
    '이건 전혀 다른 차원의 해적질'+'<br>'+
    '난 Jack sparrow'+'<br>'+
    '전 세계를 상대로'+'<br>'+
    '우리가 벌이는 춤사위'+'<br>'+
    '관심 없어 연예인 병 걸린 놈들의'+'<br>'+
    'Dance battle'+'<br>'+
    '땀 냄새나 다 푹 젖어서'+'<br>'+
    '푹푹 찌네 어디 창문 좀 열어줘'+'<br>'+
    '지루한 래퍼들은 다 물러서'+'<br>'+
    '이제 그분이 오셔 그분이 오셔'+'<br>'+
    '작두 타타타 그분이 오셔 자꾸'+'<br>'+
    '하하하 하품 나는 짝퉁'+'<br>'+
    '가가가 가짜들은 싹둑'+'<br>'+
    'Cut cut cut 싹둑'+'<br>'+
    '작두 타타타 그분이 오셔 자꾸'+'<br>'+
    '하하하 하품 나는 짝퉁'+'<br>'+
    '가가가 가짜들은 싹둑'+'<br>'+
    'Cut cut cut 싹둑');


    addSong('Born Hater (feat. 빈지노, 버벌진트, B.I, Mino, Bobby)', 'musics/angry/cd-04.png', 'musics/angry/04.mp3', '에픽하이', '3:07',
    'I`m a born hater'+'<br>'+
    'Dali Van Picasso 난 벨라스케스 밀레'+'<br>'+
    '엘 fuckin` 그레코 내 에코'+'<br>'+
    'VJ의 감성 shit 다 보급형 Blo 내'+'<br>'+
    '아류 문하생 shieeet'+'<br>'+
    '내 원래 성격은'+'<br>'+
    '이렇게 나와 문제 하나 없어도 fuck `em'+'<br>'+
    'So I understand 왜 날 어택 하는지'+'<br>'+
    '그 남자다운 척 and why you act like a bitch'+'<br>'+
    '바지 벗고 시원하게 깔라면 까'+'<br>'+
    '타진요도 기어와 I`m tryin` to love ya'+'<br>'+
    '어울리잖아 뭔가 내 역설적인 삶과'+'<br>'+
    '무한대를 그려주려 쓰러진 팔자'+'<br>'+
    '너의 그 무익한 열등감 나랑 무수히'+'<br>'+
    '붙어봤자 니 손해'+'<br>'+
    '덜 떨어진 그 사고는 니 부주의'+'<br>'+
    '내가 누누이 말했지 난 두 수 위'+'<br>'+
    '난 뭘 해도 일부일처주의'+'<br>'+
    'mother fuckin` 유일무이'+'<br>'+
    'I hate my haters obviously'+'<br>'+
    '이럴 땐 센스형이 부러워'+'<br>'+
    '적이 없으니'+'<br>'+
    '어이없지 내 성공이 외모 덕이었다니'+'<br>'+
    '니네가 빠는 블로형이 내 옆방에 있어'+'<br>'+
    '지금 그러니까 좀 닥치시지'+'<br>'+
    '근데 얘넨 쉬지 않고 가십질'+'<br>'+
    'Man i`m everywhere like oxygen'+'<br>'+
    '애석하게도 니 ex도 내 빠순이지'+'<br>'+
    'Stop talkin shit'+'<br>'+
    'like you know the shit'+'<br>'+
    '난 니네 피드백이 필요없어 솔직히'+'<br>'+
    '너랑 내가 왜 해야해 음악 얘길'+'<br>'+
    '니가 나한테 보탠거라곤 마우스로 삿대질'+'<br>'+
    'Man fuck you'+'<br>'+
    '아니 fuck your ID'+'<br>'+
    '아니 fuck your IP'+'<br>'+
    'man I`m sick of ya’ll geeks'+'<br>'+
    '넌 절대 못 와 여긴'+'<br>'+
    '여긴 this is your dream'+'<br>'+
    'My vehicle`s foreign'+'<br>'+
    'and my bitches modelin'+'<br>'+
    'Some of y`all are born haters'+'<br>'+
    '남녀노소 각계각층에 분포돼있어'+'<br>'+
    '내가 뭘 하든지 타고난 천박함으로 반응해'+'<br>'+
    '잔인한 말일지 모르지만'+'<br>'+
    'it is in your nature'+'<br>'+
    'Type one'+'<br>'+
    '내가 커리어 끝내버린 애들과 가까이 있던'+'<br>'+
    '이 바닥의 지인들'+'<br>'+
    '눈에 띄는 특징은'+'<br>'+
    '꼬리 밟힐만큼 업계 내 fact에 강함을 드러내며'+'<br>'+
    '전문가인 척 하는 지루하게 긴 글'+'<br>'+
    'Type two'+'<br>'+
    '잘 안 풀리는 자신의 삶 전부 다 잊고'+'<br>'+
    '한순간 분노를 날릴 대상'+'<br>'+
    '그게 마침 내가 된 case 귀엽고 딱해'+'<br>'+
    '하지만 법적 조치 앞에 대책이 요망돼'+'<br>'+
    '나머지 types 모기 같은 존재'+'<br>'+
    '공기 맑은 동네일수록 강하고 독해'+'<br>'+
    '살려두고 싶지만 어쩔 수 없는 입장'+'<br>'+
    '걸리적거리니깐'+'<br>'+
    'Wow'+'<br>'+
    '여길 좀 봐'+'<br>'+
    '겁쟁이들은 알아서들 도망가'+'<br>'+
    'No doubt'+'<br>'+
    '보고있나'+'<br>'+
    '내가 꼬우면 너네들도 하던가'+'<br>'+
    '꼭꼭 숨어라'+'<br>'+
    '니 머 머 머리카락 보일라'+'<br>'+
    '어딜 넘봐'+'<br>'+
    '스케일이 달라 여긴 muthafuckin` do or die'+'<br>'+
    '매번 비트 위에 똥칠하는 나의 랩 치매'+'<br>'+
    '증상은 몇 년 전부터 꽤 심해'+'<br>'+
    '가사와 상관없는 rhyme 떡칠에'+'<br>'+
    '꼴에 정숙해 요 죠 로 게이랩질 해'+'<br>'+
    '친구들은 이미 랩 거물인데'+'<br>'+
    '그 사이에 난 떠 있는 기름'+'<br>'+
    '최고 아닌 최악부터 순서를 매길 때'+'<br>'+
    '열 손가락 안에 꼽히는 이름'+'<br>'+
    '다 들려 너의 비아냥'+'<br>'+
    '내성만 늘어 높아지기만 한 치사량'+'<br>'+
    '생사를 넘나들며'+'<br>'+
    '굳건해진 멘탈은 성지'+'<br>'+
    '모독으로 도약하는 해탈의 경지'+'<br>'+
    '때가 되면 피 보는 이 바닥의 생리'+'<br>'+
    '이미 내 목을 노리지만'+'<br>'+
    '눈 깜빡 안 해'+'<br>'+
    '나 못났어도 bitch들 사이에선'+'<br>'+
    '난놈이니까'+'<br>'+
    '님이 18년도 쯤에 날 보면'+'<br>'+
    '지금 이런 말 못할 걸 보장된 성공'+'<br>'+
    '회사빨이라는 찐따들의 역공'+'<br>'+
    '날 씹어대도 바로 까먹어'+'<br>'+
    '붕어처럼 뻐끔'+'<br>'+
    '블락비에서 나와 발라드 데뷔하고 fucked up'+'<br>'+
    '실력으로 여기 와 나 바닥에서 turn up'+'<br>'+
    '근데도 몰라 나의 컨셉'+'<br>'+
    '뒤에 가린 몬스터'+'<br>'+
    '텁텁했는데 잘 됐네'+'<br>'+
    'MINO Huge boy 그래 내가 걔 So'+'<br>'+
    '손해 봐 빰을 후려치는 태도'+'<br>'+
    '비트를 먹는 짐승 이건'+'<br>'+
    '수간 날 깎아 내려봤자'+'<br>'+
    '가벼워지는 내 두 발'+'<br>'+
    '일도 많은 내게 자꾸 열을 바라면'+'<br>'+
    '완벽하게 해내지 잘 열 받아요'+'<br>'+
    '왈가왈부하시기 전에'+'<br>'+
    '거울부터 보시고'+'<br>'+
    '티비에 내가 나오면'+'<br>'+
    '끄시던 가 하세요'+'<br>'+
    '내가 변했다고 해 내 뒤에서'+'<br>'+
    '내가 바라던 바니깐'+'<br>'+
    '바닥에서 챔피언까지 귀 따가운 피드백에'+'<br>'+
    '이해하는 척 하는 내 고개 끄덕임은'+'<br>'+
    '비트에만 어울려'+'<br>'+
    '옛날 상식엔 경력이 벼슬이고'+'<br>'+
    '선배가 전부 boy'+'<br>'+
    '시간이 펀드냐'+'<br>'+
    '파산해라 얼른 boy'+'<br>'+
    '형들도 불러 사장님도 괜찮아'+'<br>'+
    '내 대가리가 커질 수록'+'<br>'+
    '니 심장은 쫄려'+'<br>'+
    '힙합 죽이긴 쉽다 맞지'+'<br>'+
    '18세 감성으로 20세들아'+'<br>'+
    'E`ybody sound the same'+'<br>'+
    'Commercialize the game and'+'<br>'+
    'she`s dead'+'<br>'+
    'It`s show time'+'<br>'+
    '맞는 말만 하니깐 아래 위 없다 싶어'+'<br>'+
    '내 말이 자극적이라면 넌 바로 Bobby를 씹어'+'<br>'+
    '난 마이클 잡으면 관중에게 thriller'+'<br>'+
    '넌 마이크를 잡으면 비둘기도 자릴 떠'+'<br>'+
    'Wow'+'<br>'+
    '여길 좀 봐'+'<br>'+
    '겁쟁이들은 알아서들 도망가'+'<br>'+
    'No doubt'+'<br>'+
    '보고있나 내가 꼬우면 너네들도 하던가'+'<br>'+
    '꼭꼭 숨어라'+'<br>'+
    '니 머 머 머리카락 보일라'+'<br>'+
    '어딜 넘봐'+'<br>'+
    '스케일이 달라'+'<br>'+
    '여긴 muthafuckin` do or die'+'<br>'+
    'Yo 내가 어디까지 가는지'+'<br>'+
    '집에서 티비로 지켜봐 stupid'+'<br>'+
    'Yo 내가 어디서 뭘 하던지'+'<br>'+
    '가만히 있는 니들 보단 뛰어나'+'<br>'+
    'stupid 무대위엔 똑같이 생긴'+'<br>'+
    '기계들이 설치네 한 마디만 할게'+'<br>'+
    'That`s no no'+'<br>'+
    '기부를 해도 손가락질 하는'+'<br>'+
    'hater 들에게 한 마디만 할게'+'<br>'+
    'That`s no no');


    addSong('I`M FINE (feat. 염따)', 'musics/angry/cd-05.png', 'musics/angry/05.mp3', '재하', '2:38',
    'I`m fine'+'<br>'+
    'How r u'+'<br>'+
    '1년 전만 해도 I was no one'+'<br>'+
    '돼야겠어 난 아빠의 Proud son'+'<br>'+
    'Baby look at me right now'+'<br>'+
    '1년 전 그 꼬마 옆에 콰 형 Right now'+'<br>'+
    '빠끄 타워로 향해 I`m in a rush right now'+'<br>'+
    '2019 학원 Boy in a cam right now'+'<br>'+
    '수학 빵점 영어 빵점 태도 빵점 That`s me'+'<br>'+
    '실내화 안 신었던 놈 받은 나이키'+'<br>'+
    'Never gave up 멈춘 나의 키 But'+'<br>'+
    '돌려받을 거야 겪은 만큼 시련'+'<br>'+
    '쉴 틈 없이 해 Make it more'+'<br>'+
    '내 가족 내 친구들 다 뒤에서 쉬어'+'<br>'+
    '이뤘지만 가야 돼 난 Right now'+'<br>'+
    '이제야 내 미래가 조금 보여'+'<br>'+
    'I`m fine'+'<br>'+
    'How r u'+'<br>'+
    '1년 전만 해도 I was no one'+'<br>'+
    '돼야겠어 난 아빠의 Proud son'+'<br>'+
    'I`m fine'+'<br>'+
    'How r u'+'<br>'+
    'I`m fine'+'<br>'+
    'How r u'+'<br>'+
    '난 되고 있어 No one to someone'+'<br>'+
    '엄마도 못 믿던 놈이 악에 받쳐서'+'<br>'+
    '난 되고 싶어 Og and a living legend'+'<br>'+
    '난 울지 못해 넘어져도'+'<br>'+
    'I`m fine'+'<br>'+
    '잘 지내냐구'+'<br>'+
    '이제 힘든 건 지났어'+'<br>'+
    '세현이랑 추랑 지호도 다'+'<br>'+
    '급식들과 형'+'<br>'+
    '까불지 말고 알려준 대로만 해'+'<br>'+
    '괜찮아 Alright'+'<br>'+
    'Started From The Bottom'+'<br>'+
    '믿지 마 내 Vision 뿜어 빛'+'<br>'+
    'Mama look at me'+'<br>'+
    'My father I made it'+'<br>'+
    '말 안 듣는 애 TV에 나오지'+'<br>'+
    '친구야 Look at me 결국 누가 남았지'+'<br>'+
    '아무것도 안 보여도 Never gave up'+'<br>'+
    'I`m fine'+'<br>'+
    'How r u'+'<br>'+
    '1년 전만 해도 I was no one'+'<br>'+
    '돼야겠어 난 아빠의 Proud son'+'<br>'+
    'I`m fine'+'<br>'+
    'How r u'+'<br>'+
    'I`m fine'+'<br>'+
    'How r u'+'<br>'+
    'I`m fine'+'<br>'+
    'How r u'+'<br>'+
    'I`m fine'+'<br>'+
    'How r u'+'<br>'+
    'I`m fine'+'<br>'+
    'How r u'+'<br>'+
    'I`m fine'+'<br>'+
    'How r u'+'<br>'+
    'I`m fine');


    addSong('Gladiator', 'musics/angry/cd-06.png', 'musics/angry/06.mp3', 'Zayde Wolf', '3:08',
    'Let me back it up to the start of the climb'+'<br>'+
    'Faced with an army of vipers and lions'+'<br>'+
    'I had to keep on reaching up `cause it was my time'+'<br>'+
    'To tear down the kingdom and call out the liars'+'<br>'+
    'Got a jail on my heart from the pessimists'+'<br>'+
    'Got those nails in my mouth for impressionists'+'<br>'+
    'Spent too much money on a therapist'+'<br>'+
    'Couldn`t fix me, I accepted it'+'<br>'+
    
    '[Chorus]'+'<br>'+
    'Gladiator, gladiator, gladiator'+'<br>'+
    'Picked a fight with the gods I`m the giant slayer'+'<br>'+
    'Boneshaker, dominator'+'<br>'+
    'Freight train, wrecking ball, I`m the gladiator'+'<br>'+
    
    '[Verse 2]'+'<br>'+
    'Tell me what it is that you think you believe'+'<br>'+
    'Caught in a crossfire, trouble at sea'+'<br>'+
    'Every single day I feel that gold underneath'+'<br>'+
    'I see the locked doors but I got the key'+'<br>'+
    'I`ma give you a second just to catch your breath'+'<br>'+
    '`Cause I can see that your heart is jumpin` out your chest'+'<br>'+
    'I know you gave it all, `cause I`ve already seen your best'+'<br>'+
    'It is time you accepted this'+'<br>'+
    
    
    
    '[Chorus]'+'<br>'+
    'Gladiator, gladiator, gladiator'+'<br>'+
    'Picked a fight with the gods I`m the giant slayer'+'<br>'+
    'Boneshaker, dominator'+'<br>'+
    'Freight train, wrecking ball, I`m the gladiator'+'<br>'+
    
    '[Bridge]'+'<br>'+
    'I`ve got every reason to fight'+'<br>'+
    'I`ve got every reason to fight'+'<br>'+
    'Have you ever shaken hands with the devil in the night?'+'<br>'+
    'Let me tell ya'+'<br>'+
    'I`ve got every reason to fight'+'<br>'+
    
    '[Chorus]'+'<br>'+
    'Gladiator, gladiator, gladiator'+'<br>'+
    'Picked a fight with the gods I`m the giant slayer'+'<br>'+
    'Bone shaker, dominator'+'<br>'+
    'Freight train, wrecking ball, I`m the gladiator'+'<br>'+
    'Gladiator, gladiator'+'<br>'+
    'Picked a fight with the gods I`m the giant slayer'+'<br>'+
    'Bone shaker, dominator'+'<br>'+
    'Freight train, wrecking ball, I`m the gladiator'
    );



    addSong('moneyflow(다 비켜봐)', 'musics/angry/cd-07.png', 'musics/angry/07.mp3', 'Mino, Zico, Paloalto', '3:18',
    'When I was young'+'<br>'+
    '지금보다 더 11years old'+'<br>'+
    '그때쯤 50 음악을 접하고 귀가 트여'+'<br>'+
    '나의 첫 작업 물을 Recorded'+'<br>'+
    '겁 없이 전진했고'+'<br>'+
    '처음과 달라진 방향에'+'<br>'+
    '방황하기도 했어'+'<br>'+
    '타협없던 어린 맘에 금이 가'+'<br>'+
    '돈이 다 가 아닌데'+'<br>'+
    '난 여유따위 없어서 뭐든지 다 했어'+'<br>'+
    'Now 난 여기 왔지'+'<br>'+
    '놓쳐버린 나를 찾기 위해'+'<br>'+
    '너랑 얘기 할 시간이 없어'+'<br>'+
    '난 필요해 Paper'+'<br>'+
    '욕할 시간에 가족이나 챙겨'+'<br>'+
    
    'Uh Get ur hands up high like'+'<br>'+
    'Uh 떨어져도 우린 sky dive'+'<br>'+
    'Uh 예술가는 못해 나이값'+'<br>'+
    '철드는 건 좀 무겁다 인마'+'<br>'+
    '다 돈 벌러 나왔잖아'+'<br>'+
    '유명해지려 나왔잖아'+'<br>'+
    '모든 Rappers wanna be like'+'<br>'+
    'Jigga Nas Biggie Pac'+'<br>'+
    '미치광이들 크게 Screamin now'+'<br>'+
    
    '다 비켜봐 에오'+'<br>'+
    '손가락질은 마 에오'+'<br>'+
    '너도 똑같아아아 에오'+'<br>'+
    '혼자 다른 척 마'+'<br>'+
    '(척할 거면 먼저 DO DO DO)'+'<br>'+
    'Your own shit'+'<br>'+
    'Move to Move'+'<br>'+
    
    '여전히 Rhyme & Flow'+'<br>'+
    '나는 Rock`n roll'+'<br>'+
    '이렇게 사는 게 나야 때론 빡세도'+'<br>'+
    '더 돈을 벌어야해 나는 이제 다 큰 놈'+'<br>'+
    '내 시간 뺏는 새끼들은 죄 다 나쁜 놈'+'<br>'+
    '꼴사나워 힙합이 뭐라고'+'<br>'+
    '뭘 그리 집착해 넌 그냥 너라고'+'<br>'+
    '난 계속 내 삶을 살기를 바라고'+'<br>'+
    '너넨 다 떠나줘 짜놓은 각본 갖고'+'<br>'+
    
    'Uh Get ur hands up high like'+'<br>'+
    'Uh 떨어져도 우린 Sky dive'+'<br>'+
    'Uh 예술가는 못해 나이 값'+'<br>'+
    '철드는 건 좀 무겁다 인마'+'<br>'+
    '(다) 돈 벌러 나왔잖아 (Whoo)'+'<br>'+
    '유명해지려 나왔잖아'+'<br>'+
    '모든 Rappers wanna be like'+'<br>'+
    'Jigga Nas Biggie Pac'+'<br>'+
    '미치광이들 크게 Screamin now'+'<br>'+
    
    '다 비켜봐 에오'+'<br>'+
    '손가락질은 마 에오'+'<br>'+
    '너도 똑같아 아 아 에오'+'<br>'+
    '혼자 다른 척 마'+'<br>'+
    '(척할 거면 먼저 DO DO DO)'+'<br>'+
    'Your own shit'+'<br>'+
    'Move to Move'+'<br>'+
    
    '원하는 게 많아서 머린 핑핑'+'<br>'+
    '매일 갇혀있어 Cuz I`m in TV'+'<br>'+
    'So 별수없이 서로가 Team kill'+'<br>'+
    '피 튀기는 곳이야 알잖아 그치?'+'<br>'+
    
    '여유는 무대에서나 부려'+'<br>'+
    '탓하며 한숨 쉬는 건 구려'+'<br>'+
    '일어나서 뭐라도 잡아'+'<br>'+
    '아깝잖아 Do your best'+'<br>'+
    'Do all you can'+'<br>'+
    '높은 위치를 원한다면 뛰지'+'<br>'+
    '왜 쳐앉아있어'+'<br>'+
    
    '다 비켜봐 에오'+'<br>'+
    '손가락질은 마 에오'+'<br>'+
    '너도 똑같아아아 에오'+'<br>'+
    '혼자 다른 척 마'+'<br>'+
    '(척할 거면 먼저 DO DO DO)'+'<br>'+
    'Your own shit'+'<br>'+
    'Move to Move'
    );


    addSong('강아지', 'musics/angry/cd-08.png', 'musics/angry/08.mp3', '검정치마', '3:28',
    '"시간은 29에서 정지 할 거야" 라고 친구들이 그랬어'+'<br>'+
    '오 나도 알고 있지만 내가19살 때도 난 20살이 되고 싶진 않았어'+'<br>'+
    '모두 다 무언가에 떠밀려 어른인 척 하기에 바쁜데'+'<br>'+
    '나는 개 나이로 3살 반이야 모르고 싶은 것이 더 많아'+'<br>'+
    
    'if your lights are blinking and you are running low'+'<br>'+
    'come on get filled up so you can drive away with my love'+'<br>'+
    
    '우리가 알던 여자애는 돈만 쥐어주면 태워주는 차가 됐고'+'<br>'+
    '나는 언제부터인가 개가 되려나 봐 손을 델 수 없게 자꾸 뜨거워'+'<br>'+
    '반갑다고 흔들어 대는 것이 내 꼬리가 아닌 거 같아'+'<br>'+
    '사랑은 아래부터 시작해 척추를 타고 올라온 거야'+'<br>'+
    
    'if your lights are blinking and you are running low'+'<br>'+
    'come on get filled up so you can drive away with my love'+'<br>'+
    
    '짖어대는 소리에 놀라서 도망가지마'+'<br>'+
    '무서워서 그런 거야 나는 아직 아무것도 모르니까'
    );


    addSong('범퍼카 (feat. NO_EL, Young B)', 'musics/angry/cd-09.png', 'musics/angry/09.mp3', '한요한', '3:20',
    '걍 때려박어 범퍼카 범퍼카'+'<br>'+
    '면허도 필요 없지 엉덩짝 걷어차'+'<br>'+
    '이 노래 의미 찾는 새낀 다 어쩌다'+'<br>'+
    '그 지경까지 갔니 생각 없이'+'<br>'+
    '다 꼬라박아 범퍼카'+'<br>'+
    'Is kamikaze bumpercar'+'<br>'+
    '다 꼬라박아 범퍼카'+'<br>'+
    'Is kamikaze bumpercar'+'<br>'+
    'Is kamikaze'+'<br>'+
    'Is kamikaze bumpercar'+'<br>'+
    '야 이 시발 이거 내 2017 빛나 어쩔까'+'<br>'+
    '돈 안 되는 꼰대 아재 래퍼들은'+'<br>'+
    '다 한 줄로 집합'+'<br>'+
    '작년 각설이 또 왔다 인마 해쉬태그 너검마빠'+'<br>'+
    '초록창에 무식이들 키보드쓰레기'+'<br>'+
    '무지개 반사 범퍼카'+'<br>'+
    '카카드륵 파캌캌 유행 따라가자'+'<br>'+
    '붙들어 매두라구 혁띠'+'<br>'+
    '사랑한다 미안해 자기야'+'<br>'+
    '유행 따라가서 (straight up) 떡칠'+'<br>'+
    '말마따나 아들내미 복권이지 엄마'+'<br>'+
    '나 한다면 해 다 fuck it'+'<br>'+
    '기타 무사시 훅 다시 들어와 들이받아'+'<br>'+
    '아마추어 턱걸이'+'<br>'+
    '걍 때려박어 범퍼카 범퍼카'+'<br>'+
    '면허도 필요 없지 엉덩짝 걷어차'+'<br>'+
    '이 노래 의미 찾는 새낀 다 어쩌다'+'<br>'+
    '그 지경까지 갔니 생각 없이'+'<br>'+
    '다 꼬라박아 범퍼카'+'<br>'+
    'Is kamikaze bumpercar'+'<br>'+
    '다 꼬라박아 범퍼카'+'<br>'+
    'Is kamikaze bumpercar'+'<br>'+
    'Is kamikaze'+'<br>'+
    'Is kamikaze bumpercar'+'<br>'+
    '꼬라박지 내 flow처럼'+'<br>'+
    '다음 나 벌어가 집에 내 돈'+'<br>'+
    '뭘 알아 했던 놈 멀어지네'+'<br>'+
    '걔넨 떠받아 이제 내 몸'+'<br>'+
    '이겨봐라 랩으로 다 해 먹었지'+'<br>'+
    '근데 더 가 난 미래에 도착하고'+'<br>'+
    '취할거야 민증 이마에 붙이고'+'<br>'+
    '너네 떨 하나 필 때 난 졸려'+'<br>'+
    '아직도 많이 난 필요하지'+'<br>'+
    '나 빼고 못 믿으니 난 기도 안 해'+'<br>'+
    '악플러였던 년 내 이불 안에'+'<br>'+
    '걔가 내 애인? nah 그냥 비는 방에'+'<br>'+
    '걱정은 좆 까고 있기를 바래'+'<br>'+
    '어딨냐 우정이 넌 쉬는 날에'+'<br>'+
    '다 거짓말하네 난 빈말 안 해'+'<br>'+
    '니 여친 dna 내 비누 안에'+'<br>'+
    '시작한 적도 없지 뜨고 싶다면 맞춰라 보폭'+'<br>'+
    '니 새끼들 실력은 턱걸이고'+'<br>'+
    '내 랩은 논란까지 덮어'+'<br>'+
    '니넨 피하지 벌써 왜?'+'<br>'+
    '거짓말 쳤으니 계속 버텨'+'<br>'+
    '착해 보인데 성격 그래서 재밌냐'+'<br>'+
    '병신아 멋없어'+'<br>'+
    '말 뿐이지 너넨 똑같아'+'<br>'+
    '다 구리지 걔네들 top 5'+'<br>'+
    'D gang 이제 우리지 배려는 잠깐'+'<br>'+
    '못하지 그건 무리지 해봐라 착각'+'<br>'+
    '좆같이 페북에 랩으로 장난'+'<br>'+
    '보면 돼 내가 걔네 랩으로 잡나'+'<br>'+
    '그래 왜 불러 양아치 배부르게'+'<br>'+
    '패주지 제대로 밟아'+'<br>'+
    '걍 때려박어 범퍼카 범퍼카'+'<br>'+
    '면허도 필요 없지 엉덩짝 걷어차'+'<br>'+
    '이 노래 의미 찾는 새낀 다 어쩌다'+'<br>'+
    '그 지경까지 갔니 생각 없이'+'<br>'+
    '다 꼬라박아 범퍼카'+'<br>'+
    'Is kamikaze bumpercar'+'<br>'+
    '다 꼬라박아 범퍼카'+'<br>'+
    'Is kamikaze bumpercar'+'<br>'+
    'Is kamikaze'+'<br>'+
    'Is kamikaze bumpercar'
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
    stroke('#FA5164');
    strokeWeight(5);
    strokeCap(SQUARE);
    let angle =  getProgress() * 2*PI;
    arc(185, 185, 340, 340, -PI/2, -PI/2 + angle);

    let x = 185 + 170*cos(-PI/2 + angle);
    let y = 185 + 170*sin(-PI/2 + angle);
    noStroke();
    fill('#FA5164');
    circle(x, y, 20);
    
}

// =============팁 추가=============

$('.close-btn').click(function(){
    $('#feeling-tips').fadeOut(500);
  });

$('.feeling').click(function(){
  $('#feeling-tips').fadeIn(500);
});