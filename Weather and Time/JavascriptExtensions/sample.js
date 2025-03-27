function formatTime(timeInSeconds)
{
	const secondsRemaining = timeInSeconds % 60
	const minutes = Math.floor(timeInSeconds / 60)
	const hours = Math.floor(minutes / 60).toString()
	return `${hours.padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secondsRemaining.toFixed(0).toString().padStart(2, "0")}` 
}