let currentPlaying; // 현재 재생되고 있는 리스트 아이템의 index
let currentAudio; // 현재 재생되는 있는 리스트 아이템의 audio 태그

let angle = 0;

$(function(){
    // ===== List 생성하기 =====
    // addItem('Happy Life', 'musics/playlist.png', 'musics/00.mp3');
    // addItem('Jarico - Island', 'musics/01.png', 'musics/01.mp3');
    // addItem('Jarico - Landscape', 'musics/02.png', 'musics/02.mp3');


    // ===== SongList 생성하기 =====
    // addSong('Walking in the Moonlight(feat. 다원, Lazier)', 'musics/insomnia/cd-01.png', 'musics/insomnia/01.mp3', '서교동의 밤', '3:48');
    // addSong('Piano Dust', 'musics/insomnia/cd-02.png', 'musics/insomnia/02.mp3', 'OOHYO(우효)', '3:51');
    // addSong('Love Me (사랑해줘요)', 'musics/insomnia/cd-03.png', 'musics/insomnia/03.mp3', '마인드유', '3:09');
    // addSong('언젠가 설명이 필요한 밤', 'musics/insomnia/cd-04.png', 'musics/insomnia/04.mp3', '안녕하신가영', '4:36');
    // addSong('깊이 잠들어요', 'musics/insomnia/cd-05.png', 'musics/insomnia/05.mp3', '한올 (HanAll)', '3:19');
    // addSong('Good Night', 'musics/insomnia/cd-06.png', 'musics/insomnia/06.mp3', '10cm', '4:30');
    // addSong('뜨거운 여름밤은 가고 남은 건 볼품없지만', 'musics/insomnia/cd-07.png', 'musics/insomnia/07.mp3', '잔나비', '1:24');
    // addSong('Little Star', 'musics/insomnia/cd-08.png', 'musics/insomnia/08.mp3', '스탠딩 에그', '3:31');

    addSong('Walking in the Moonlight(feat. 다원, Lazier)', 'musics/insomnia/cd-01.png', 'musics/insomnia/01.mp3', '서교동의 밤', '3:48',
    '어두운 밤하늘엔 별도 떴는데'+"<br>"+
    '아직 네 손에 머물던 햇살이'+"<br>"+
    '한참을 바라보던 너의 눈빛이'+"<br>"+
    '이 밤을 설레게 하네'+"<br>"+
    'Walking in the moonlight 상상 속에'+"<br>"+
    'Walking in the moonlight 날 안아줘요'+"<br>"+
    'Baby how fancy you are'+"<br>"+
    '내 볼에 손을 대고 날 바라봐 줘'+"<br>"+
    '그대로 내게 입을 맞춰줘요'+"<br>"+
    '얼마나 더 기다려야 내일이 올까'+"<br>"+
    '아직도 달빛은 가득해'+"<br>"+
    '내일은 니 앞에서 말할 수 있을까'+"<br>"+
    '생각이 달빛보다 깊어'+"<br>"+
    'Walking in the moonlight 상상 속에'+"<br>"+
    'Walking in the moonlight 날 안아줘요'+"<br>"+
    'Baby how fancy you are'+"<br>"+
    '내 볼에 손을 대고 날 바라봐 줘'+"<br>"+
    '그대로 내게 입을 맞춰줘요'+"<br>"+
    'Baby i feel the same way '+"<br>"+
    '달빛이 우릴 감싼듯한 기분이야'+"<br>"+
    '니가 말하기 전 내가 먼저'+"<br>"+
    '네 볼에 손을 대고 널 바라볼게'+"<br>"+
    'How could you make me'+"<br>"+
    'feel so good'+"<br>"+
    'baby I feel so good'+"<br>"+
    'Maybe 내가 생각하기엔'+"<br>"+
    'f너도 나와 같은 기분이 들 거 같은데'+"<br>"+
    '지금 이 달빛이 사라져도 괜찮아'+"<br>"+
    '내일은 널 보러 갈 거니깐'+"<br>"+
    'Love never felt so good baby'+"<br>"+
    '그저 널 그리는 것만으로도'+"<br>"+
    'Walking in the moonlight 상상 속에'+"<br>"+
    'Walking in the moonlight 날 안아줘요'+"<br>"+
    'Baby how fancy you are'+"<br>"+
    '내 볼에 손을 대고 날 바라봐 줘'+"<br>"+
    '그대로 내게 입을 맞춰줘요'+"<br>"+
    'Walking in the moonlight 상상 속에'+"<br>"+
    'Walking in the moonlight 날 안아줘요'+"<br>"+
    'Baby how fancy you are'+"<br>"+
    '내 볼에 손을 대고 날 바라봐 줘'+"<br>"+
    '그대로 내게 입을 맞춰줘요'+"<br>");

    addSong('Piano Dust', 'musics/insomnia/cd-02.png', 'musics/insomnia/02.mp3', 'OOHYO(우효)', '3:51',
    'When she was just a girl,'+"<br>"+
    'you didnt even know her name'+"<br>"+
    'When she was just alone,'+"<br>"+
    'you were never there to say'+"<br>"+
    '(I love you, love you, love you my girl)'+"<br>"+
    'All these years, all this time'+"<br>"+
    'where have you been'+"<br>"+
    'I wont even ask'+"<br>"+
    '(I need you, need you, need you)'+"<br>"+
    'All that is left is, fumes and tears'+"<br>"+
    'my heart as light as dust,'+"<br>"+
    'piano dust'+"<br>"+
    'When do you feel most free,'+"<br>"+
    'When do you feel truly special,'+"<br>"+
    'Is it when they like who you are,'+"<br>"+
    'even when thats not really you, oh'+"<br>"+
    '(I love you, love you, love you my girl)'+"<br>"+
    'All this time, all of your heart,'+"<br>"+
    'who have you tried to please?'+"<br>"+
    '(I need you, need you, need you)'+"<br>"+
    'Take yourself back to where you belong'+"<br>"+
    'Someones still waiting for you,'+"<br>"+
    'for you -'+"<br>"+
    'My soul clings to the dust,'+"<br>"+
    'soul clings to the dust'+"<br>"+
    'My soul clings to the dust,'+"<br>"+
    'soul clings to the dust'+"<br>"+
    'My soul clings to the dust,'+"<br>"+
    'soul clings to the dust'+"<br>"+
    'My soul clings to the dust,'+"<br>"+
    'soul clings to the dust'+"<br>");

    addSong('Love Me (사랑해줘요)', 'musics/insomnia/cd-03.png', 'musics/insomnia/03.mp3', '마인드유', '3:09',
    '어디로 가고 있나요'+"<br>"+
    '어디쯤 그대 있나요'+"<br>"+
    '시간이 가면 갈수록'+"<br>"+
    '더 조급해지는 걸요'+"<br>"+
    '그대 이름을 모래에'+"<br>"+
    '선명히 새겨 놓아도'+"<br>"+
    '파도에 지워져요'+"<br>"+
    '어디 있나요'+"<br>"+
    '그대 마음이'+"<br>"+
    '나에게로 살며시 앉길'+"<br>"+
    '그댈 믿어요'+"<br>"+
    '좋아해요 다'+"<br>"+
    '평화로운 오후 길에'+"<br>"+
    '두리번 돌아다녀도'+"<br>"+
    '그대는 이곳에 없어'+"<br>"+
    '이어폰에는 달달한 노랫말'+"<br>"+
    '친구들의 자랑들도'+"<br>"+
    '밉다가도 부러워져'+"<br>"+
    '그대는 어디 있나요'+"<br>"+
    '궁금해'+"<br>"+
    '어디있나요'+"<br>"+
    '그대 마음이'+"<br>"+
    '나에게로 살며시 앉길'+"<br>"+
    '그댈 믿어요'+"<br>"+
    '좋아해요 다'+"<br>"+
    '사랑해줘요'+"<br>"+
    '나의 마음이'+"<br>"+
    '그대에게 날아가기를'+"<br>"+
    '매일 그대를'+"<br>"+
    '사랑해요 다'+"<br>");

    addSong('언젠가 설명이 필요한 밤', 'musics/insomnia/cd-04.png', 'musics/insomnia/04.mp3', '안녕하신가영', '4:36',
    '너의 웃는 모습은'+"<br>"+
    '내가 아는 모든 것들을'+"<br>"+
    '전부 잊게 만들었지만'+"<br>"+
    '널 꿈꾸던 순간은'+"<br>"+
    '어느샌가 우리가 되어'+"<br>"+
    '조금씩 날 웃게 하나 봐'+"<br>"+
    '수없이 많은 밤을 뜬 눈으로 지새워도'+"<br>"+
    '이유가 없는 밤이었지'+"<br>"+
    '수많은 밤이 지나 이유를 모르던 밤들엔'+"<br>"+
    '널 생각한 내가 있고'+"<br>"+
    '너도 나와 같은 밤이었지'+"<br>"+
    '눈을 뜨면 더 어두운 밤'+"<br>"+
    '눈을 감으면 환하게 빛나는 밤'+"<br>"+
    '쉽게 잠들지 못하는 밤은 항상'+"<br>"+
    '언젠가 설명이 필요한 밤'+"<br>"+
    '눈을 뜨면 선명하지만'+"<br>"+
    '눈을 감아도 우릴 볼 수 있는 밤'+"<br>"+
    '너를 생각하면'+"<br>"+
    '수없이 많은 밤을 뜬 눈으로 지새워도'+"<br>"+
    '이유가 없는 밤이었지'+"<br>"+
    '수많은 밤이 지나 이유를 모르던 밤들엔'+"<br>"+
    '널 생각한 내가 있고'+"<br>"+
    '너도 나와 같은 밤이었지'+"<br>"+
    '눈을 뜨면 더 어두운 밤'+"<br>"+
    '눈을 감으면 환하게 빛나는 밤'+"<br>"+
    '쉽게 잠들지 못하는 밤은 항상'+"<br>"+
    '언젠가 설명이 필요한 밤'+"<br>"+
    '눈을 뜨면 선명하지만'+"<br>"+
    '눈을 감아도 우릴 볼 수 있는 밤'+"<br>"+
    '너를 생각하면'+"<br>"+
    '언젠가 설명이 필요한 밤'+"<br>");
    
    addSong('깊이 잠들어요', 'musics/insomnia/cd-05.png', 'musics/insomnia/05.mp3', '한올 (HanAll)', '3:19',
    '오늘 하루도 고생했어요'+"<br>"+
    '뭐가 그리 힘들었나요'+"<br>"+
    '그대 마음속 어두운 그늘에'+"<br>"+
    '내가 작은 빛을 줄게요'+"<br>"+
    '내가 토닥여줄게요'+"<br>"+
    '쓰다듬어줄게요'+"<br>"+
    '그댄 내 품 안에서'+"<br>"+
    '깊이 잠들어요'+"<br>"+
    '그대 지친 하루에'+"<br>"+
    '내가 힘이 될게요'+"<br>"+
    '내게 기대어 잠들어요'+"<br>"+
    '깊이 잠들어요'+"<br>"+
    '그대 하루는 어땠나요'+"<br>"+
    '누군가 힘들게 했나요'+"<br>"+
    '이미 캄캄한 그대 하늘을'+"<br>"+
    '내가 환히 비춰줄게요'+"<br>"+
    '토닥여줄게요'+"<br>"+
    '쓰다듬어줄게요'+"<br>"+
    '그댄 내 품 안에서'+"<br>"+
    '깊이 잠들어요'+"<br>"+
    '그대 지친 하루에'+"<br>"+
    '내가 힘이 될게요'+"<br>"+
    '내게 기대어 잠들어요'+"<br>"+
    '깊이 잠들어요'+"<br>");

    addSong('Good Night', 'musics/insomnia/cd-06.png', 'musics/insomnia/06.mp3', '10cm', '4:30',
    '오늘 무슨 일이 생길 것만 같은'+"<br>"+
    '고요하고도 거친 밤공기, 바람소리, 달빛에'+"<br>"+
    '너의 평화롭진 않았을 것 같은'+"<br>"+
    '어지럽고 탁한 긴긴 하루, 너의 새벽, 빈 창가'+"<br>"+
    'Mmm good night,'+"<br>"+
    'good night, good night'+"<br>"+
    'Mmm good night,'+"<br>"+
    'good night, good night'+"<br>"+
    '또 나쁜 꿈에 뒤척이지 않았으면,'+"<br>"+
    '빗물소리에 약한 생각 않았으면'+"<br>"+
    '팔베개, 입맞춤, 따뜻한 한 이불,'+"<br>"+
    '나긋한 숨소리, 이젠 함께 아니지만'+"<br>"+
    '눈물과 외로움, 슬픔과 괴로움,'+"<br>"+
    '하얗게 지운 듯 깊은 잠 예쁜 꿈속에'+"<br>"+
    'Mmm good night,'+"<br>"+
    'good night, good night'+"<br>");
    
    addSong('뜨거운 여름밤은 가고 남은 건 볼품없지만', 'musics/insomnia/cd-07.png', 'musics/insomnia/07.mp3', '잔나비', '1:24',
    '그땐 난 어떤'+"<br>"+
    '마음이었길래'+"<br>"+
    '내 모든걸 주고도'+"<br>"+
    '웃을 수 있었나'+"<br>"+
    '그대는 또 어떤'+"<br>"+
    '마음이었길래'+"<br>"+
    '그 모든걸 갖고도'+"<br>"+
    '돌아서 버렸나'+"<br>"+
    '뜨거운 여름밤은 가고'+"<br>"+
    '남은 건 볼 품 없지만'+"<br>"+
    '또다시 찾아오는'+"<br>"+
    '누군갈 위해서 남겨두겠소'+"<br>"+
    '다짐은 세워올린 모래성은'+"<br>"+
    '심술이 또 터지면'+"<br>"+
    '무너지겠지만'+"<br>"+
    '뜨거운 여름밤은 가고'+"<br>"+
    '남은 건 볼 품 없지만'+"<br>"+
    '또다시 찾아오는'+"<br>"+
    '누군갈 위해서 남겨두겠소'+"<br>"+
    '그리운 그 마음 그대로'+"<br>"+
    '영원히 담아둘거야'+"<br>"+
    '언젠가 불어오는 바람에'+"<br>"+
    '남몰래 날려보겠소'+"<br>"+
    '눈이 부시던 그 순간들도'+"<br>"+
    '가슴아픈 그대의 거짓말도'+"<br>"+
    '새하얗게 바래지고'+"<br>"+
    '비틀거리던 내 발걸음도'+"<br>"+
    '그늘아래 드리운 내 눈빛도'+"<br>"+
    '아름답게 피어나길'+"<br>"+
    '눈이 부시던 그 순간들도'+"<br>"+
    '가슴아픈 그대의 거짓말도'+"<br>"+
    '새하얗게 바래지고'+"<br>"+
    '비틀거리던 내 발걸음도'+"<br>"+
    '그늘아래 드리운 내 눈빛도'+"<br>"+
    '아름답게 피어나길'+"<br>"+
    '눈이 부시던 그 순간들도'+"<br>"+
    '가슴아픈 그대의 거짓말도'+"<br>"+
    '새하얗게 바래지고'+"<br>"+
    '그늘아래 드리운 내 눈빛도'+"<br>"+
    '아름답게 피어나길'+"<br>");

    addSong('Little Star', 'musics/insomnia/cd-08.png', 'musics/insomnia/08.mp3', '스탠딩 에그', '3:31',
    '눈을 감고 내가 하는 이야길 잘 들어봐'+"<br>"+
    '나의 얘기가 끝나기 전에 너는 꿈을 꿀 거야'+"<br>"+
    'little star'+"<br>"+
    'tonight'+"<br>"+
    '밤새 내가 지켜줄 거야'+"<br>"+
    '처음 너를 만났을 땐 정말 눈이 부셨어'+"<br>"+
    '너의 미소를 처음 봤을 땐 세상을 다 가졌어'+"<br>"+
    'little star'+"<br>"+
    'tonight'+"<br>"+
    '밤새 내가 지켜줄 거야'+"<br>"+
    '내 품에 안긴 채 곤히 잠든 널 보면'+"<br>"+
    '나는 잠시도 눈을 뗄 수 없어'+"<br>"+
    '이렇게 예쁜데'+"<br>"+
    '숨이 멎을 것 같아'+"<br>"+
    '내가 어떻게 잠들 수 있겠니'+"<br>"+
    '나의 사랑 나의 전부 하늘이 내린 천사'+"<br>"+
    '나의 두 눈을 나의 세상을 모두 훔쳐버렸어'+"<br>"+
    'little star'+"<br>"+
    'tonight'+"<br>"+
    '밤새 내가 지켜줄 거야'+"<br>"+
    '내 품에 안긴 채 곤히 잠든 널 보면'+"<br>"+
    '나는 잠시도 눈을 뗄 수 없어'+"<br>"+
    '이렇게 예쁜데'+"<br>"+
    '숨이 멎을 것 같아'+"<br>"+
    '내가 어떻게 잠들 수 있겠니'+"<br>"+
    '눈을 감고 내가 하는 이야길 잘 들어봐'+"<br>"+
    '나의 얘기가 끝나기 전에 너는 꿈을 꿀 거야'+"<br>"+
    'little star'+"<br>"+
    'tonight'+"<br>"+
    '밤새 내가 지켜줄 거야'+"<br>"+
    '내 사랑 tonight'+"<br>"+
    '밤새 내가 지켜줄 거야'+"<br>"+
    '평생 내가 지켜줄 거야'+"<br>");
    


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
    stroke('#7FAACC');
    strokeWeight(5);
    strokeCap(SQUARE);
    let angle =  getProgress() * 2*PI;
    arc(185, 185, 340, 340, -PI/2, -PI/2 + angle);

    let x = 185 + 170*cos(-PI/2 + angle);
    let y = 185 + 170*sin(-PI/2 + angle);
    noStroke();
    fill('#7FAACC');
    circle(x, y, 20);
    
}


// =============팁 추가=============

$('.close-btn').click(function(){
    $('#feeling-tips').fadeOut(500);
  });

$('.feeling').click(function(){
  $('#feeling-tips').fadeIn(500);
});