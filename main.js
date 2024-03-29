const singleton = (function() {
    let instance;
    
    function User(name, age) {
      this.name = name;
      this.age = age;
    }
    return {
      getInstance: function(name, age) {
        if(!instance) {
          instance = new User(name, age);
        }
        return instance;
      }
    }
  })();
  const user1 = singleton.getInstance('Иван', 24);
  const user2 = singleton.getInstance('Дементий', 26);
  // prints true
  console.log(user1 === user2);