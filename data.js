var resources = [];

resources["wood"] = {name: "Wood", number: 0, capacity: 20};
resources["clay"] = {name: "Clay", number: 0, capacity: 20};
resources["iron"] = {name: "Iron", number: 0, capacity: 20};
resources["gold"] = {name: "Gold", number: 0, capacity: 20};

var units = [];

units["lumberjack"] = {name: "Lumberjack", prize: 5, number: 0, dps: 0, level: 0, related: "wood"};
units["clayman"] = {name: "Clayman", prize: 7, number: 0, dps: 0, level: 0, related: "clay"};
units["miner"] = {name: "Lumberjack", prize: 11, number: 0, dps: 0, level: 0, related: "iron"};
units["merchant"] = {name: "Merchant", prize: 17, number: 0, dps: 0, level: 0, related: "gold"};


var upgrades = [];

upgrades[0] = {name : "Faster Lumberjack", prize : 500, made : false, related: "lumberjack",
act: function(){units["lumberjack"].dps = 2*units["lumberjack"].dps;} };