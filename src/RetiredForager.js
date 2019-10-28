var RetiredForagerBee = function() {
  Grub.call(this);
  ForagerBee.call(this); // this is how u inhereit multiple properties
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false
  this.color = 'grey';
};


RetiredForagerBee.prototype = Object.create(ForagerBee.prototype); //this is how u inhereit methods
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead'
}

RetiredForagerBee.prototype.gamble = function () {
  this.treasureChest.push('treasure');
};