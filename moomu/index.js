

let isDragging = false;
let posX = 0;
let scrollX = 0;
let targetX = 0;
let downX = 0;
let newPosX = 0;
$(function(){
    $('body').mousewheel(function(event, delta){
      let wheel = event.originalEvent.wheelDelta;

      if(wheel > 0){
        // $('.container-lg').scrollLeft( $('.container-lg').scrollLeft() - 800 )
        targetX = $('.container-lg').scrollLeft() - 800;
      }else{
        // $('.container-lg').scrollLeft( $('.container-lg').scrollLeft() + 800 )
        targetX = $('.container-lg').scrollLeft() + 800;
      }

      
        // event.preventDefault(); //스크롤 다운 방지

        // $(wheel).css('transition', 'ease-in-out');
    });

    setInterval(function(){
      scrollX = scrollX + (targetX - scrollX) * 0.1;
      $('.container-lg').scrollLeft( scrollX )
    }, 10);
    

    $('.container-lg').mousedown(function(event){
      isDragging = true;
      posX = event.clientX;
      downX = $('.container-lg').scrollLeft();
    })
    $('.container-lg').mouseup(function(event){
      isDragging = false;
      newPosX = event.clientX;
      // newPosX = 0;
      // posX = 0;
    })
    $('.container-lg').mousemove(function(event){
      if(isDragging){
        newPosX = event.clientX;
        targetX = downX - newPosX + posX;
        // newPosX - posX
        // console.log( scrollX - newPosX + posX )
        // $('.container-lg').scrollLeft( scrollX - newPosX + posX )
      }
    })


    $('.chart-btn').click(function(){
      console.log(newPosX - posX)
      if( Math.abs( newPosX - posX ) < 10 ){
        location.href = "index-chart.html";
      }
      
    })

    $('.comfortable').click(function(){
      console.log(newPosX - posX)
      if( Math.abs( newPosX - posX ) < 10 ){
        location.href = "playlist-comfortable.html";
      }
      
    })
    $('.happy').click(function(){
      console.log(newPosX - posX)
      if( Math.abs( newPosX - posX ) < 10 ){
        location.href = "playlist-happy.html";
      }
      
    })
    $('.insomnia').click(function(){
      console.log(newPosX - posX)
      if( Math.abs( newPosX - posX ) < 10 ){
        location.href = "playlist-insomnia.html";
      }
      
    })
    $('.excited').click(function(){
      console.log(newPosX - posX)
      if( Math.abs( newPosX - posX ) < 10 ){
        location.href = "playlist-excited.html";
      }
      
    })
    $('.angry').click(function(){
      console.log(newPosX - posX)
      if( Math.abs( newPosX - posX ) < 10 ){
        location.href = "playlist-angry.html";
      }
      
    })
    $('.sad').click(function(){
      console.log(newPosX - posX)
      if( Math.abs( newPosX - posX ) < 10 ){
        location.href = "playlist-sad.html";
      }
      
    })
});