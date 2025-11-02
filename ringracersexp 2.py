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
gradingFactors = [[1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1]]

# 🥹
expYields = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]

gradingFactorPower = expPower + ((numplayers - opponents) * (expPower / 4))
gradingFactorDrain = gradingFactorPower * (opponents * (1 - expStableRate))

# grading point = checkpoint
# actually the better term but fuck it
numGradingPoints = (laps * (1 + checkpoints))
numGradingPointsBonus = numGradingPoints * 4/3

gradingFactorMin = 1
gradingFactorMax = 1

for i in range(0, 2):
	checkpointsCrossed = i + 1

	targetMinExp = (expMin * checkpointsCrossed) / numGradingPointsBonus
	targetMaxExp = (expMax * checkpointsCrossed) / numGradingPointsBonus
	print(f"targetMaxExp: {targetMaxExp}")
	print(f"targetMinExp: {targetMinExp}")

	gradingFactorMin = gradingFactorMin - gradingFactorDrain
	gradingFactorMax = gradingFactorMax + ((gradingFactorPower * (numplayers - 1)) - gradingFactorDrain)
	print(f"gradingFactorMax: {gradingFactorMax}")
	print(f"gradingFactorMin: {gradingFactorMin}")

	for j in range(0, 8):
		for k in range(0, 8):
			l = [j, k]
			currGradingFactor = gradingFactors[j][k] + ((gradingFactorPower * (numplayers - (l[i]+1))) - gradingFactorDrain)
			gradingFactors[j][k] = currGradingFactor

			# clamp grading factor to min and max grading factors
			currGradingFactor = max(gradingFactorMin, min(gradingFactorMax, currGradingFactor))

			# rescale grading factor to the range of [0, 1]
			currGradingFactor = (currGradingFactor - gradingFactorMin) / (gradingFactorMax - gradingFactorMin)

			currExpYield = ((1 - currGradingFactor) * targetMinExp) + (currGradingFactor * targetMaxExp)
			expYields[j][k] = currExpYield - expYields[j][k]

print(f"{gradingFactors[0][0]},{gradingFactors[1][0]},{gradingFactors[2][0]},{gradingFactors[3][0]},{gradingFactors[4][0]},{gradingFactors[5][0]},{gradingFactors[6][0]},{gradingFactors[7][0]}")
print(f"{gradingFactors[0][1]},{gradingFactors[1][1]},{gradingFactors[2][1]},{gradingFactors[3][1]},{gradingFactors[4][1]},{gradingFactors[5][1]},{gradingFactors[6][1]},{gradingFactors[7][1]}")
print(f"{gradingFactors[0][2]},{gradingFactors[1][2]},{gradingFactors[2][2]},{gradingFactors[3][2]},{gradingFactors[4][2]},{gradingFactors[5][2]},{gradingFactors[6][2]},{gradingFactors[7][2]}")
print(f"{gradingFactors[0][3]},{gradingFactors[1][3]},{gradingFactors[2][3]},{gradingFactors[3][3]},{gradingFactors[4][3]},{gradingFactors[5][3]},{gradingFactors[6][3]},{gradingFactors[7][3]}")
print(f"{gradingFactors[0][4]},{gradingFactors[1][4]},{gradingFactors[2][4]},{gradingFactors[3][4]},{gradingFactors[4][4]},{gradingFactors[5][4]},{gradingFactors[6][4]},{gradingFactors[7][4]}")
print(f"{gradingFactors[0][5]},{gradingFactors[1][5]},{gradingFactors[2][5]},{gradingFactors[3][5]},{gradingFactors[4][5]},{gradingFactors[5][5]},{gradingFactors[6][5]},{gradingFactors[7][5]}")
print(f"{gradingFactors[0][6]},{gradingFactors[1][6]},{gradingFactors[2][6]},{gradingFactors[3][6]},{gradingFactors[4][6]},{gradingFactors[5][6]},{gradingFactors[6][6]},{gradingFactors[7][6]}")
print(f"{gradingFactors[0][7]},{gradingFactors[1][7]},{gradingFactors[2][7]},{gradingFactors[3][7]},{gradingFactors[4][7]},{gradingFactors[5][7]},{gradingFactors[6][7]},{gradingFactors[7][7]}")

print(" ")

print(f"{expYields[0][0]},{expYields[1][0]},{expYields[2][0]},{expYields[3][0]},{expYields[4][0]},{expYields[5][0]},{expYields[6][0]},{expYields[7][0]}")
print(f"{expYields[0][1]},{expYields[1][1]},{expYields[2][1]},{expYields[3][1]},{expYields[4][1]},{expYields[5][1]},{expYields[6][1]},{expYields[7][1]}")
print(f"{expYields[0][2]},{expYields[1][2]},{expYields[2][2]},{expYields[3][2]},{expYields[4][2]},{expYields[5][2]},{expYields[6][2]},{expYields[7][2]}")
print(f"{expYields[0][3]},{expYields[1][3]},{expYields[2][3]},{expYields[3][3]},{expYields[4][3]},{expYields[5][3]},{expYields[6][3]},{expYields[7][3]}")
print(f"{expYields[0][4]},{expYields[1][4]},{expYields[2][4]},{expYields[3][4]},{expYields[4][4]},{expYields[5][4]},{expYields[6][4]},{expYields[7][4]}")
print(f"{expYields[0][5]},{expYields[1][5]},{expYields[2][5]},{expYields[3][5]},{expYields[4][5]},{expYields[5][5]},{expYields[6][5]},{expYields[7][5]}")
print(f"{expYields[0][6]},{expYields[1][6]},{expYields[2][6]},{expYields[3][6]},{expYields[4][6]},{expYields[5][6]},{expYields[6][6]},{expYields[7][6]}")
print(f"{expYields[0][7]},{expYields[1][7]},{expYields[2][7]},{expYields[3][7]},{expYields[4][7]},{expYields[5][7]},{expYields[6][7]},{expYields[7][7]}")