async function deletejournal(id) {
 await fetch('/journal/' + id, {method: 'DELETE'});
 window.location.href = "/"
}
async function editjournal(e, id) {
 e.preventDefault();

 const formData = new FormData(e.target);
 const formObject = Object.fromEntries(formData.entries());

 await fetch('/journal/' + id, {
   method: 'PATCH',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(formObject)
 });

 window.location.href = '/'
}

