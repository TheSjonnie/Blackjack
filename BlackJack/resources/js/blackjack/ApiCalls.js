async function getCredits() {
    try {
        const response = await fetch('/getProfile', {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        const data = await response.json();
        console.log("data ==> ", data.Credits);
        return data.Credits;
    } catch (err) {
        console.error(err);
    }
}
async function updateCredits(Credits) {
    try {
        const response = await fetch('/updateCredits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(Credits)
        });
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
async function updateProfile(Credits) {
    try {
        const response = await fetch('/updateProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(Credits)
        });
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
export {getCredits,updateCredits,updateProfile};