  // Now we add the most important point of the plugin, the commands
  // This library is very flexible and now we will see why :
  // Every command is a literal object


  function start(){
    if (annyang) {
    // Let's define a command.
    var commands = {
      'hello': function() { alert('Hello world!'); }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
  }
}
