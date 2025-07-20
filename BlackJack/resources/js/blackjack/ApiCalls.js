async function getCredits() {
    try {
        const response = await fetch('/getProfile', {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        const data = await response.json();
        if (!data) {
            throw new Error("data not definend");
        }
        return data.credits;
    } catch (err) {
        console.error(err);
    }
}
async function updateCredits(credits) {
    if (credits){
        try {
            const response = await fetch('/updateCredits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify(credits)
            });
            const data = await response.json();
        } catch (err) {
            console.error(err);
        }
    } else{
        console.error('credits not defind fetch updateCredits')
    }
}
async function startGameFetch(betObject,totalBetValue) {    
    console.log("🚀 ~ startGameFetch ~ betObject:", betObject)
    if (betObject && totalBetValue){
        try {
            const response = await fetch('/startGameData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({betObject: betObject, totalBetValue: totalBetValue})
            });
            const results = await response.json();
            if (results.succes){
                window.location.href = '/startGame';
            } else{
                console.error(results)
            }
        } catch (err) {
            console.error(err);
        }
    } else{
        console.error('betObject or totalBetValue not defind fetch startGame')
    }
}
async function updateProfile(data) {
    try {
        const response = await fetch('/updateProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.text();
        if (responseData == 'succes') {
            window.location.href = 'http://127.0.0.1:8000/Blackjackpage';
        } else{
            console.error(responseData);
        }
    } catch (err) {
        console.error(err);
    }
}
export {getCredits,updateCredits,updateProfile, startGameFetch};