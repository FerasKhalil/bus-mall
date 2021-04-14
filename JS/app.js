'use strict';

let leftImage = document.getElementById('left-img');
let middleImage = document.getElementById('middle-img');
let rightImage = document.getElementById('right-img');
let imgContainer=document.getElementById('container');

let max = 25;

let attemptCounter = 0;

let leftIndex;
let middleIndex;
let rightIndex;

function Vote(name, source)
{
    this.name = name;
    this.source = source;
    this.voteNumber = 0;
    Vote.allImages.push(this);
    
}
Vote.allImages = [];


new Vote('bag', 'images/bag.jpg'); //1
new Vote('banana', 'images/banana.jpg');//2
new Vote('bathroom', 'images/bathroom.jpg');//3
new Vote('boots','images/boots.jpg');//4
new Vote('breakfast','images/breakfast.jpg');//5
new Vote('bubblegum','images/bubblegum.jpg');//6
new Vote('chair', 'images/chair.jpg');//7
new Vote('cthulhu', 'images/cthulhu.jpg');//8
new Vote('dog-duck', 'images/dog-duck.jpg');//9
new Vote('dragon', 'images/dragon.jpg');//10
new Vote('pen', 'images/pen.jpg');//11
new Vote('pet-sweep', 'images/pet-sweep.jpg');//12
new Vote('scissors', 'images/scissors.jpg');//13
new Vote('shark', 'images/shark.jpg');//14
new Vote('sweep', 'images/sweep.png');//15
new Vote('tauntaun', 'images/tauntaun.jpg');//16
new Vote('unicorn', 'images/unicorn.jpg');//17
new Vote('usb', 'images/usb.gif');//18
new Vote('water-can', 'images/water-can.jpg');//19
new Vote('wine-glass', 'images/wine-glass.jpg');//20
console.log(Vote.allImages);

function randomImage() 
{
    return Math.floor(Math.random() * Vote.allImages.length);
}

function render()
{

    leftIndex = randomImage();
    middleIndex = randomImage();
    rightIndex = randomImage();

    while (leftIndex === middleIndex || leftIndex === rightIndex || middleIndex === rightIndex) 
    {
        leftIndex = randomImage();
        
        middleIndex = randomImage();
        rightIndex = randomImage();
        
        
        

    }
    console.log(rightIndex);
    //first image
    console.log(Vote.allImages[leftIndex].name);
    console.log(Vote.allImages[leftIndex].source);
    //second image
    console.log(Vote.allImages[middleIndex].name);
    console.log(Vote.allImages[middleIndex].source);
    // third image
    console.log(Vote.allImages[rightIndex].name);
    console.log(Vote.allImages[rightIndex].source);

       leftImage.src=Vote.allImages[leftIndex].source;
       
       middleImage.src=Vote.allImages[middleIndex].source;
       rightImage.src=Vote.allImages[rightIndex].source;

    // console.log(leftImage+middleImage+rightImage);
}
render();

imgContainer.addEventListener('click',whenUserClicks);

function whenUserClicks(event)
{
    event.preventDefault();
    attemptCounter++;
    console.log(event.target.id);
    if(attemptCounter<=max)
    {
        if(event.target.id==='leftImage')
        {
            Vote.allImages[leftIndex].voteNumber++;
        }
        else if(event.target.id==='middleImage')
        {
            Vote.allImages[middleIndex].voteNumber++;
        }
        else
        {
            Vote.allImages[rightIndex].voteNumber++;
        }
        render();
    }
    else
    {
        let lists=document.getElementById("result");
        let results;
        for(let i=0; i<Vote.allImages.length; i++)
        {
            results=document.createElement("li");
            lists.appendChild(results);
            results.textContent=`${Vote.allImages[i].name} have ${Vote.allImages[i].voteNumber} votes, and has been seen `;
        }


        leftImage.removeEventListener('click',whenUserClicks);
        middleImage.removeEventListener('click',whenUserClicks)
        rightImage.removeEventListener('click',whenUserClicks);
    }

}

