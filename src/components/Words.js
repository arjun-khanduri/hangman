var words=[
    "SAD",
    "BANANA",
    "DIAMOND",
    "JAVA",
    "PEARL",
    "APPLE",
    "TREASURE",
    "AIRPORT",
    "FLIGHT",
    "TRAIN",
    "FRANCE",
    "INDIA",
    "GOOD"
]

function randomWord(){
    return words[Math.floor(Math.random()*words.length)];
}

export {randomWord}