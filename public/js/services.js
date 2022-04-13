

document.querySelectorAll('input[type="checkbox"]').forEach(element => {
    element.checked = JSON.parse(element.value);

    element.addEventListener('change', async e => {
        try {
            let res = await fetch(`/services/${element.id}`, {
                method: 'PUT',
                body: JSON.stringify({completed: e.target.checked}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            res = await res.json();
        } catch(err) {
            console.log('errrr==>>', err);
        }
    });
});