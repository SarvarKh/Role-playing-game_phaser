    export const postFetch = () => {
        console.log("Helllo from fetch!");
        let formData = {
            'user': localStorage.getItem('player'),
            'score': localStorage.getItem('score')
        }

        fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cPmZS72pS3JcSbhdLSEq/scores/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',    
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    } 
    