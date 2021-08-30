class Form{
   constructor(){

}

  display(){
      var title = createElement('h2',"Car Racing Game");
      title.position(130,0);

      var Input = createInput("NAME ");
      Input.position(130,160);

      var button = createButton('start');
      button.position(250,200);


      button.mousePressed(function(){

          Input.hide();
          button.hide();

          playerCount = playerCount +1;
          player.updateCount(playerCount);

          var name = Input.value();
          player.update(name);

          var greeting = createElement("h2","hello "+name);
          greeting.position(130,160);
      });
  }
}