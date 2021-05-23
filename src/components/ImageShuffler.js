import React, { useState } from "react";

const defaultImages = [
    "images/dog1.jpg",
    "images/dog2.jpg",
    "images/dog3.jpg",
    "images/dog4.jpg",
    "images/dog5.jpg",
    "images/dog6.jpg",
    "images/dog7.jpg",
    "images/dog8.jpg",
    "images/dog9.jpg",
    "images/dog10.jpg",
    "images/dog11.jpg",
    "images/dog12.jpg",
]

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
};

function ImageShuffler (props) {
    const [images, setImages] = useState(defaultImages);
    const [chosenDog, setChosenDog] = useState()
    const [chosenDogs, setChosenDogs] = useState(['text'])

    const handleClick = (e) => {
        let updatedDogs = chosenDogs
        if (props.gameActive === true) {
            setChosenDog(e.target.id)
            updatedDogs.push(chosenDog)
            setChosenDogs(updatedDogs)

            let newImages = shuffleArray(images);
            setImages((images) => [...newImages]);

            props.addScore();
        }
    }

    const imageRender = images.map((value, index) => {
        return <img src={value} key={"image" + index} alt="random goofy dog" onClick={handleClick}/>
    });


    return (
        <section className={"header"}>
            {imageRender}
        </section>
    );
}

export default ImageShuffler;