


vnjs.on('main-menu', function(){
  console.warn('screen::main-menu')
document
  .getElementById('start-game')
  .addEventListener('click', function(e){
    e.preventDefault();
    vnjs.parse({screen: 'game-action'})
  });

document
  .getElementById('about-action')
  .addEventListener('click', e=>vnjs.parse({screen:'about'}))

document
  .getElementById('settings-action')
  .addEventListener('click', e=>vnjs.parse({screen:'settings'}))
  
})



