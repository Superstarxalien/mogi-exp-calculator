const button = document.querySelector(`input[type="button"]`);

const gradingPoints =
{
	0:
	{
		laps: "",
		checkpoints: ""
	},
	1: // robotnik coaster
	{
		laps: 5,
		checkpoints: 1
	},
	2: // northern district
	{
		laps: 4,
		checkpoints: 1
	},
	3: // panic city
	{
		laps: 4,
		checkpoints: 2
	},
	4: // sonic speedway
	{
		laps: 3,
		checkpoints: 1
	},
	5: // green hills
	{
		laps: 3,
		checkpoints: 2
	},
	6: // emerald coast
	{
		laps: 3,
		checkpoints: 2
	},
	7: // storm rig
	{
		laps: 3,
		checkpoints: 1
	},
	8: // lucid pass
	{
		laps: 4,
		checkpoints: 1
	},
	9: // autumn ring
	{
		laps: 3,
		checkpoints: 2
	},
	10: // withering chateau
	{
		laps: 3,
		checkpoints: 2
	},
	11: // popcorn factory
	{
		laps: 5,
		checkpoints: 1
	},
	12: // sundae drive
	{
		laps: 5,
		checkpoints: 0
	},
	13: // cadillac cascade
	{
		laps: 3,
		checkpoints: 2
	},
	14: // rumble ridge
	{
		laps: 3,
		checkpoints: 2
	},
	15: // opulence
	{
		laps: 3,
		checkpoints: 2
	},
	16: // angel island
	{
		laps: 3,
		checkpoints: 2
	},
	17: // roasted ruins
	{
		laps: 4,
		checkpoints: 2
	},
	18: // obsidian oasis
	{
		laps: 3,
		checkpoints: 2
	},
	19: // mirage saloon
	{
		laps: 3,
		checkpoints: 2
	},
	20: // regal ruin
	{
		laps: 3,
		checkpoints: 1
	},
	21: // isolated island
	{
		laps: 3,
		checkpoints: 2
	},
	22: // gigapolis
	{
		laps: 4,
		checkpoints: 1
	},
	23: // darkvile castle 1
	{
		laps: 3,
		checkpoints: 2
	},
	24: // bronze lake
	{
		laps: 3,
		checkpoints: 2
	},
	25: // collision chaos
	{
		laps: 2,
		checkpoints: 4
	},
	26: // emerald hill
	{
		laps: 3,
		checkpoints: 2
	},
	27: // azure city
	{
		laps: 4,
		checkpoints: 1
	},
	28: // gust planet
	{
		laps: 3,
		checkpoints: 2
	},
	29: // mystic cave
	{
		laps: 4,
		checkpoints: 2
	},
	30: // joypolis
	{
		laps: 5,
		checkpoints: 1
	},
	31: // hill top
	{
		laps: 3,
		checkpoints: 2
	},
	32: // marble garden
	{
		laps: 3,
		checkpoints: 2
	},
	33: // silvercloud island
	{
		laps: 3,
		checkpoints: 2
	},
	34: // sub-zero peak
	{
		laps: 3,
		checkpoints: 2
	},
	35: // launch base
	{
		laps: 3,
		checkpoints: 2
	},
	36: // azure lake
	{
		laps: 5,
		checkpoints: 0
	},
	37: // balloon park
	{
		laps: 5,
		checkpoints: 0
	},
	38: // chrome gadget
	{
		laps: 5,
		checkpoints: 0
	},
	39: // desert palace
	{
		laps: 5,
		checkpoints: 1
	},
	40: // endless mine 1
	{
		laps: 5,
		checkpoints: 1
	},
	41: // hard-boiled stadium
	{
		laps: 3,
		checkpoints: 2
	},
	42: // hardhat havoc
	{
		laps: 5,
		checkpoints: 1
	},
	43: // press garden
	{
		laps: 3,
		checkpoints: 2
	},
	44: // pico park
	{
		laps: 12,
		checkpoints: 0
	},
	45: // city escape
	{
		laps: 1,
		checkpoints: 7
	},
	46: // palmtree panic
	{
		laps: 3,
		checkpoints: 2
	},
	47: // darkvile castle
	{
		laps: 4,
		checkpoints: 2
	},
	48: // scarlet gardens
	{
		laps: 6,
		checkpoints: 0
	},
	49: // motobug motorway
	{
		laps: 3,
		checkpoints: 2
	},
	50: // star light
	{
		laps: 3,
		checkpoints: 2
	},
	51: // metropolis
	{
		laps: 3,
		checkpoints: 2
	},
	52: // frozen production
	{
		laps: 2,
		checkpoints: 3
	},
	53: // aqueduct crystal
	{
		laps: 3,
		checkpoints: 1
	},
	54: // nova shore
	{
		laps: 3,
		checkpoints: 2
	},
	55: // hydro city
	{
		laps: 3,
		checkpoints: 2
	},
	56: // trap tower
	{
		laps: 5,
		checkpoints: 2
	},
	57: // diamond dust
	{
		laps: 3,
		checkpoints: 2
	},
	58: // blue mountain 1
	{
		laps: 3,
		checkpoints: 1
	},
	59: // blue mountain 2
	{
		laps: 1,
		checkpoints: 6
	},
	60: // speed highway
	{
		laps: 1,
		checkpoints: 5
	},
	61: // carnival night
	{
		laps: 3,
		checkpoints: 2
	},
	62: // virtual highway
	{
		laps: 3,
		checkpoints: 1
	},
	63: // dark fortress
	{
		laps: 2,
		checkpoints: 2
	},
	64: // spring yard
	{
		laps: 3,
		checkpoints: 2
	},
	65: // labyrinth
	{
		laps: 2,
		checkpoints: 3
	},
	66: // hot shelter
	{
		laps: 3,
		checkpoints: 2
	},
	67: // sky sanctuary
	{
		laps: 2,
		checkpoints: 3
	},
	68: // lost colony
	{
		laps: 2,
		checkpoints: 4
	},
	69: // death egg
	{
		laps: 3,
		checkpoints: 4
	},
	70: // 765 stadium
	{
		laps: 5,
		checkpoints: 1
	},
	71: // skyscraper leaps
	{
		laps: 4,
		checkpoints: 1
	},
	72: // green triangle
	{
		laps: 7,
		checkpoints: 0
	},
	73: // zoned city
	{
		laps: 4,
		checkpoints: 2
	},
	74: // sunset hill
	{
		laps: 3,
		checkpoints: 2
	},
	75: // savannah citadel
	{
		laps: 3,
		checkpoints: 2
	},
	76: // umbrella rushwinds
	{
		laps: 3,
		checkpoints: 2
	},
	77: // avant garden
	{
		laps: 3,
		checkpoints: 3
	},
	78: // bigtime breakdown
	{
		laps: 4,
		checkpoints: 2
	},
	79: // vantablack violet
	{
		laps: 3,
		checkpoints: 2
	},
	80: // chaos chute
	{
		laps: 3,
		checkpoints: 2
	},
	81: // dimension disaster
	{
		laps: 5,
		checkpoints: 1
	},
	82: // aurora atoll
	{
		laps: 3,
		checkpoints: 2
	},
	83: // daytona speedway
	{
		laps: 4,
		checkpoints: 1
	},
	84: // turquoise hill
	{
		laps: 3,
		checkpoints: 2
	},
	85: // weiss waterway
	{
		laps: 5,
		checkpoints: 0
	},
	86: // ice paradise
	{
		laps: 3,
		checkpoints: 2
	},
	87: // sunsplashed getaway
	{
		laps: 6,
		checkpoints: 0
	},
	88: // fae falls
	{
		laps: 2,
		checkpoints: 2
	},
	89: // azure axiom
	{
		laps: 1,
		checkpoints: 7
	},
	90: // hanagumi hall
	{
		laps: 5,
		checkpoints: 1
	},
	91: // aerial highlands
	{
		laps: 3,
		checkpoints: 2
	},
	92: // crispy canyon
	{
		laps: 4,
		checkpoints: 1
	},
	93: // technology tundra
	{
		laps: 2,
		checkpoints: 3
	},
	94: // operator's overspace
	{
		laps: 3,
		checkpoints: 3
	},
	95: // mega green hill
	{
		laps: 7,
		checkpoints: 1
	},
	96: // mega bridge
	{
		laps: 6,
		checkpoints: 1
	},
	97: // mega lava reef
	{
		laps: 5,
		checkpoints: 0
	},
	98: // mega ice cap
	{
		laps: 5,
		checkpoints: 1
	},
	99: // mega scrap brain
	{
		laps: 5,
		checkpoints: 1
	},
	100: // wavecrash dimension
	{
		laps: 5,
		checkpoints: 1
	},
	101: // nightfall dimension
	{
		laps: 3,
		checkpoints: 2
	},
	102: // voiddance dimension
	{
		laps: 3,
		checkpoints: 2
	},
	103: // cloudtop dimension
	{
		laps: 2,
		checkpoints: 3
	},
	104: // gravtech dimension
	{
		laps: 3,
		checkpoints: 2
	},
}

function calcExp(pos, isFinalLap) {
	const laps = parseInt(document.getElementById("numlaps").value);
	const checkpoints = parseInt(document.getElementById("numcheckpoint").value);

	const numplayers = 8;
	const opponents = numplayers - 1;
	const expPower = 3/100;
	const expStableRate = 3/10;
	const expMin = 25;
	const expMax = 150;

	const gradingFactorPower = expPower + (expPower / 4);
	const gradingFactorDrain = gradingFactorPower * (opponents * (1 - expStableRate));

	const gradingFactorMin = 1 - gradingFactorDrain;
	const gradingFactorMax = 1 + ((gradingFactorPower * (numplayers - 1)) - gradingFactorDrain);

	const numGradingPoints = (laps * (1 + checkpoints));
	const numGradingPointsBonus = numGradingPoints * 4/3;

	const targetMinExp = expMin / numGradingPointsBonus;
	const targetMaxExp = expMax / numGradingPointsBonus;

	// (numplayers - pos) is basically number of players that player is passing
	let currGradingFactor = 1 + ((gradingFactorPower * (numplayers - pos)) - gradingFactorDrain);

	// clamp grading factor to min and max grading factors
	currGradingFactor = Math.max(gradingFactorMin, Math.min(gradingFactorMax, currGradingFactor));

	// rescale grading factor to the range of [0, 1]
	currGradingFactor = (currGradingFactor - gradingFactorMin) / (gradingFactorMax - gradingFactorMin);

	const mult = numGradingPointsBonus - (numGradingPoints - 1);

	if (isFinalLap)
		return Math.round(((((1 - currGradingFactor) * targetMinExp) + (currGradingFactor * targetMaxExp)) * mult) * 100000000) / 100000000;
	else
		return Math.round((((1 - currGradingFactor) * targetMinExp) + (currGradingFactor * targetMaxExp)) * 100000000) / 100000000;
}

trackpresets.onclick = () => {
	const value = parseInt(document.getElementById("trackpresets").value);
	const laps = gradingPoints[value].laps;
	const checkpoints = gradingPoints[value].checkpoints;
	numlaps.value = laps;
	numcheckpoint.value = checkpoints;
}

button.addEventListener("click", updateButton);

function updateButton() {
	exp.innerHTML = `Per-checkpoint:<br>1. ${calcExp(1)}<br>2. ${calcExp(2)}<br>3. ${calcExp(3)}<br>4. ${calcExp(4)}<br>5. ${calcExp(5)}<br>6. ${calcExp(6)}<br>7. ${calcExp(7)}<br>8. ${calcExp(8)}`;
	expfinallap.innerHTML = `Final lap:<br>1. ${calcExp(1, 1)}<br>2. ${calcExp(2, 1)}<br>3. ${calcExp(3, 1)}<br>4. ${calcExp(4, 1)}<br>5. ${calcExp(5, 1)}<br>6. ${calcExp(6, 1)}<br>7. ${calcExp(7, 1)}<br>8. ${calcExp(8, 1)}`;
}