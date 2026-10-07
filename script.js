```javascript
function revealBirthday() {

    document.getElementById("birthday").scrollIntoView({
        behavior: "smooth"
    });

}


function handsomeReveal() {

    const response = document.getElementById("response");

    response.innerHTML =
        "I KNEW IT. 😌 You have excellent taste.";

}
```
