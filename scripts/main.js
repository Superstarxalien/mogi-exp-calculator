const button = document.querySelector(`input[type="button"]`);
const position = document.getElementById("position");

function calcExp(pos, isFinalLap) {
	const numlaps = parseInt(document.getElementById("numlaps").value);
	const numcheckpoints = parseInt(document.getElementById("numcheckpoint").value);

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

	const numGradingPoints = (numlaps * (1 + numcheckpoints));
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
		return Math.floor((((1 - currGradingFactor) * targetMinExp) + (currGradingFactor * targetMaxExp)) * mult);
	else
		return Math.floor(((1 - currGradingFactor) * targetMinExp) + (currGradingFactor * targetMaxExp));
}

button.addEventListener("click", updateButton);

function updateButton() {
	exp.innerHTML = `Per-checkpoint:<br>1. ${calcExp(1)}<br>2. ${calcExp(2)}<br>3. ${calcExp(3)}<br>4. ${calcExp(4)}<br>5. ${calcExp(5)}<br>6. ${calcExp(6)}<br>7. ${calcExp(7)}<br>8. ${calcExp(8)}`;
	expfinallap.innerHTML = `Final lap:<br>1. ${calcExp(1, 1)}<br>2. ${calcExp(2, 1)}<br>3. ${calcExp(3, 1)}<br>4. ${calcExp(4, 1)}<br>5. ${calcExp(5, 1)}<br>6. ${calcExp(6, 1)}<br>7. ${calcExp(7, 1)}<br>8. ${calcExp(8, 1)}`;
}