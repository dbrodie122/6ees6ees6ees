class ForagerBee extends HoneyMakerBee{
  // TODO..
  constructor() {
  	super();
  	this.job = 'find pollen';
  	this.canFly = true;
  	this.treasureChest = [];
  }
  forage(treasure) {
  	this.treasureChest.push(treasure);
  }
};
