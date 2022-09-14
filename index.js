


let skills = [
    {
        img: "https://user-images.githubusercontent.com/105576538/190076997-8ff3a4d0-f3d2-42af-9382-0523ae3a160f.png",
        name: "Java",
    },
    {
        img: "https://user-images.githubusercontent.com/105576538/190077232-5d7ca012-1afc-4798-9e49-3260a58bd034.png",
        name: "HTML5",
    },
    {
        img: "https://user-images.githubusercontent.com/105576538/190077158-da44a7ff-5ad1-4a7d-b7fb-2c1a770728e4.png",
        name: "CSS",
    },
    {
        img: "https://user-images.githubusercontent.com/105576538/190077395-c04c6634-9b76-4180-b09f-90997e29e93c.svg",
        name: "DSA",
    },
    {
        img: "https://user-images.githubusercontent.com/105576538/190077275-0d1b601b-3832-4e72-a962-5949a6b8f6ad.svg",
        name: "Hibernate",
    },
    {
        img: "https://user-images.githubusercontent.com/105576538/190077060-970eeec2-1dbd-4202-bb5d-cc400f147048.svg",
        name: "MySQL",
    }
]

let slide = document.querySelector("#skill_container")
// let img = document.createElement("img");
// let names = document.createElement("p");
// img.src = skills[0].img;
// names.innerText = skills[0].name;
// slide.append(img, names);


//slide shows 

function slideshow(skills,i) {
    
  
        slide.innerHTML = "";


        img = document.createElement("img");
        names = document.createElement("p");
        img.src = skills[i++].img;
        names.innerText = skills[i++].name;
        slide.append(img, names);

        img = document.createElement("img");
        names = document.createElement("p");
        img.src = skills[i++].img;
        names.innerText = skills[i++].name;
        slide.append(img, names);
        
        img = document.createElement("img");
        names = document.createElement("p");
        img.src = skills[i++].img;
        names.innerText = skills[i++].name;
        slide.append(img, names);


}

let i = 0;
setInterval(function () {

    slideshow(skills,i);
    i++;
if (i == skills.length - 1) {
    i == 0;
}
}, 1500);