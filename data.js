var unit_capacity = 20;
var wps = 0;
var cps = 0;
var ips = 0;
var gps = 0;

var dps = 0;

var resources = [];
var total_size = 0;

resources["wood"] = {name: "Wood", number: 0, capacity: 20};
resources["clay"] = {name: "Clay", number: 0, capacity: 20};
resources["iron"] = {name: "Iron", number: 0, capacity: 20};
resources["gold"] = {name: "Gold", number: 0, capacity: 20};

var units = [];

units["lumberjack"] = {name: "Lumberjack", cost: [0,5,5,0], number: 0, size: 1, related: "wood",
act: function(){wps += 1;}};
units["clayman"] = {name: "Clayman", cost: [5,0,5,0], number: 0, size: 1, related: "clay",
act: function(){cps += 1;}};
units["miner"] = {name: "Lumberjack", cost: [5,5,0,0], number: 0, size: 1, related: "iron",
act: function(){ips += 1;}};
units["merchant"] = {name: "Merchant", cost: [0,0,0,21], number: 0, size: 1, related: "gold",
act: function(){gps += 1;}};
units["slave"] = {name: "Slave", cost: [10,10,10,10], number: 0, size: 1, related: "",
act: function(){dps += 1;}};

units["house"] = {name: "House", cost: [10,5,5,5], number: 0, size: 0, related: "", 
act: function(){unit_capacity += 10;}};
units["wood_storage"] = {name: "Wood Storage", cost: [10,5,5,5], number: 0, size: 0, related: "wood", 
act: function(){resources["wood"].capacity += 10;}};
units["clay_storage"] = {name: "Clay Storage", cost: [5,10,5,5], number: 0, size: 0, related: "clay", 
act: function(){resources["clay"].capacity += 10;}};
units["iron_storage"] = {name: "Iron Storage", cost: [5,5,10,5], number: 0, size: 0, related: "iron", 
act: function(){resources["iron"].capacity += 10;}};
units["gold_storage"] = {name: "Gold Storage", cost: [5,5,5,20], number: 0, size: 0, related: "gold", 
act: function(){resources["gold"].capacity += 10;}};



var upgrades = [];

upgrades[0] = {name : "Faster Lumberjack", cost : 500, made : false, related: "lumberjack",
act: function(){units["lumberjack"].dps = 2*units["lumberjack"].dps;} };


var resources_names = ["wood", "clay", "iron", "gold"];