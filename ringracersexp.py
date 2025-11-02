# consts
laps = 4
checkpoints = 2
numplayers = 8
opponents = numplayers - 1
expPower = 3/100
expStableRate = 3/10
expMin = 25
expMax = 150

# grading factor is actually a rate that changes dynamically depending on where you placed at which checkpoints
gradingFactor = 1

gradingFactorPower = expPower + ((numplayers - opponents) * (expPower / 4))
gradingFactorDrain = gradingFactorPower * (opponents * (1 - expStableRate))

checkpointsCrossed = 1

# min and max for if only 1 checkpoint was crossed
# otherwise i'd have to do loops for as many checkpoints as there are (not including bonus)
gradingFactorMin = 1 - gradingFactorDrain
gradingFactorMax = 1 + ((gradingFactorPower * (numplayers - 1)) - gradingFactorDrain)

# grading point = checkpoint
# actually the better term but fuck it
numGradingPoints = (laps * (1 + checkpoints))
numGradingPointsBonus = numGradingPoints * 4/3

targetMinExp = (expMin * checkpointsCrossed) / numGradingPointsBonus
targetMaxExp = (expMax * checkpointsCrossed) / numGradingPointsBonus

for i in range(1, 9):
	currGradingFactor = gradingFactor + ((gradingFactorPower * (numplayers - i)) - gradingFactorDrain)

	# clamp grading factor to min and max grading factors
	currGradingFactor = max(gradingFactorMin, min(gradingFactorMax, currGradingFactor))

	# rescale grading factor to the range of [0, 1]
	currGradingFactor = (currGradingFactor - gradingFactorMin) / (gradingFactorMax - gradingFactorMin)

	expYield = ((1 - currGradingFactor) * targetMinExp) + (currGradingFactor * targetMaxExp)
	print(f"{i}. {expYield}")