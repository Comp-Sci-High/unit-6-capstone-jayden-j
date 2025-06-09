const createForm = document.querySelector("form")

createForm.addEventListener("submit", async (e)=>{
	e.preventDefault()
	const journalData = new FormData(createForm)
	const reqBody = Object.fromEntries(journalData)
	console.log(reqBody)
	const response = await fetch("/journal/save", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(reqBody)
	})
})

