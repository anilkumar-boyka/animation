  anime({
  targets: '.svg .path',
   translateX: 1.3,
    keyframes: [
      {scale:0,duration:100},
      {scale:1},
     
    ],
    rotate: {
      value: 360,
      duration: 1200,
      easing: 'easeInOutSine',
      value:360
    },
  strokeDashoffset: [anime.setDashoffset,0,duration=5000],
  easing: 'easeInOutQuad',
  duration: 7000,
  opacity:1,
  // delay: function(el, i) { return i * 200 },
  // direction: 'alternate',
  loop: false,
});

var delaySequenceR = anime({
  targets: '.list',
  keyframes : [{translateY: -100,duration:0},
  {translateY :1},{rotate:360}],
  
  delay: function(target, index, targetCount) {
    return (targetCount - index) * 200;
  },
  duration:200,
});

var content= anime({
  targets: '.main_content ',
  keyframes : [{translateY: -400,duration:0},
  {translateY:function(target,index,targetCount){return(((index+1))*50)}},{ easing: 'easeInOutQuad'},
  {translateX:100}],
  
  delay: function(target, index, targetCount) {
    // console.log(index);
    return (targetCount + index) * 200;
  }
});



