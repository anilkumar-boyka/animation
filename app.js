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
  keyframes : [{translateY: -400,duration:0},
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

 var x=$(".second_section");
 x.waypoint(function(direction) {
  console.log(direction);
  anime({
    targets : '.second_headline_div',
    keyframes : [
      {color : '#000000'},
      { scale : 0,duration : 0},
       {opacity: 0},
       {opacity : 1},
      {scale : 1,duration : 8000},
      
    ],
   
  });

},{
  offset:'98%'
});

//images_section
var x=$(".images_section");
x.waypoint(function(direction) {
 console.log(direction);
 anime({
   targets : '.single_service',
   keyframes : [
     {color : '#000000'},
    //  { scale : 0,duration : 0},
    //   {opacity: 0},
    //   {opacity : 1},
    //  {scale : 1,duration : 8000},

    {opacity : 0,duration : -2},
    {translateX : -9000,duration:2},
    {opacity : 1,duration : 0},
    {translateX : 10,duration:2000},
    
     
   ],
  endDelay : 4000,
  easing: 'easeInOutSine'
 });

},{
 offset:'98%'
});