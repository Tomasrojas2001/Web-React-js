import {React,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Lore() {
  
  useEffect(() => {
  const slides = document.getElementById("slides");
  const allSlide = document.querySelectorAll(".slide");
  
  const slidesLength = allSlide.length; 
  const slideWidth = allSlide[0].offsetWidth;
  
  let index = 0;
  let posX1;
  let posX2;
  let initialPosition;
  let finalPosition;
  let sliderMoving = false;
  let canISlide = true;


  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  
  const firstSlide = allSlide[0];
  const lastSlide = allSlide[allSlide.length - 1];

  const cloneFirstSlide = firstSlide.cloneNode(true);
  const cloneLastSlide = lastSlide.cloneNode(true);

  slides.appendChild(cloneFirstSlide);
  slides.insertBefore(cloneLastSlide,firstSlide);

  next.addEventListener("click",() =>{ 
    
    sliderMoving = true;
    return switchSlide("next");
  });
  prev.addEventListener("click",() => {
   
    sliderMoving = true;
    return switchSlide("prev");
  });

  slides.addEventListener("transitionend", checkIndex);

    
  slides.addEventListener("mousedown", dragStart);

  slides.addEventListener("touchstart", dragStart);
  slides.addEventListener("touchMove", dragMove);
  slides.addEventListener("touchEnd", dragEnd);

  

  function dragStart (e) {
    e.preventDefault();
    initialPosition = slides.offsetLeft;
  
    if(!slides.classList.contains("transition")){
      if(e.type === "touchstart"){
        posX1 = e.touches[0].clientX;
      }
      else{
        posX1 = e.clientX;
        document.onmouseup = dragEnd ;
        document.onmousemove = dragMove;
      }
    }
    
  }
  function dragMove (e) {
    slides.classList.replace("grab","grabbing");
    if(e.type === "touchmove"){
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    }
    else{
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    sliderMoving = true;
    slides.style.left = `${slides.offsetLeft - posX2}px`;
    
  }

  function dragEnd () {
    slides.classList.replace("grabbing","grab");
    finalPosition = slides.offsetLeft;
    if(finalPosition - initialPosition < -(slideWidth / 2)){
      switchSlide("next","dragging");
    }
    else if(finalPosition - initialPosition > (slideWidth / 2)){

      switchSlide("prev","dragging");
    }
    else{
      canISlide = false;
      switchSlide();
      slides.style.left = `${initialPosition}px`;
     
    }

    document.onmouseup = null ;
    document.onmousemove = null;
  }


  function switchSlide(arg, arg2) {
    console.log("slidermov:"+sliderMoving);
    if(sliderMoving === true){
      slides.classList.add("transition");
      sliderMoving = false;
    }
    console.log("canslide:"+ canISlide);
    if(canISlide){
      if(!arg2){
        initialPosition = slides.offsetLeft;
      }
      if(arg === "next"){
         slides.style.left = `${initialPosition - slideWidth}px`;
         index++;
      }
      else{
        
        slides.style.left = `${initialPosition + slideWidth}px`;
        index--;
       
      }
    }

    canISlide = false;
    
  }

  function checkIndex (){
    slides.classList.remove("transition");
    
    if(index === -1){
      slides.style.left = `-${slidesLength * slideWidth}px`;
      index = slidesLength - 1;
    }
    if(index=== slidesLength){
      slides.style.left = `-${1 * slideWidth}px`;
      index = 0;
    }

    canISlide = true;
  }
  
  }, [])
  
 
  return (
    <>
      <section className="lore-section" id="lore">
        <div className="lore-container">
          <div className="txt-dynamic-container">
            <div className="static-txt">What</div>
            <ul className="dynamic-txts">
              <li>
                <span>hides the world of Elite Group?</span>
              </li>
              <li>
                <span>is the history of the elite group?</span>
              </li> 
            </ul>
          </div>
          <div className="slider">
            <div className="slides grab" id="slides">
              <span className="slide">
                <div className="columns">
                  <div className="column left">
                    <h1 className="left-title">
                      Elite infinity: The beginning
                    </h1>
                    <p className="left-paragraph">
                      Kingar is a huge world inhabited by all kinds of strange
                      creatures. In its early days, the two dominant species on
                      the planet were the Thunderbirds and the Narkles. Both
                      races lived in harmony with each other until one day, the
                      greed of the Narkles made everything change. After 100
                      long and delicate years of war, it seemed that the kingdom
                      of the Narkles would obtain what it always sought. Faced
                      with the imminent fall of their kingdom, the 1000 most
                      powerful Thunderbirds of each race decided to enter the
                      mud forest, home to all kinds of creatures and unknown
                      evils, hoping to find the sword of the great Salomon
                      Ludwig who at the beginning of The times made the Narkles
                      and Thunderbirds the dominant species on the planet thanks
                      to their cunning and strength.
                    </p>
                  </div>
                  <div className="column right">
                    <h1 className="right-title">The War of the two kingdoms</h1>
                    <p className="right-paragraph">
                      Whoever managed to get hold of his power would be able to
                      win any battle. For 6 months the thunderbirs soldiers
                      fought with their lives against all kinds of creatures,
                      until they reached the lair of Giblon the guardian of the
                      sword. There were only 6 left alive, who after an
                      incredible battle, managed to defeat Giblon and proclaimed
                      themselves along with his army of 9994 Thunderbirds that
                      awaited them in the kingdom, the Elite Infinity. These
                      were a group of 9,994 soldiers, who, under the command of
                      the legendary 6 and Ludwig's sword, managed to defeat the
                      Narkles.
                    </p>
                  </div>
                </div>
              </span>
              <span className="slide">
                <div className="columns">
                  <div className="column left">
                    <h1 className="left-title">
                      Elite infinity: The beginning2
                    </h1>
                    <p className="left-paragraph">
                      Kingar is a huge world inhabited by all kinds of strange
                      creatures. In its early days, the two dominant species on
                      the planet were the Thunderbirds and the Narkles. Both
                      races lived in harmony with each other until one day, the
                      greed of the Narkles made everything change. After 100
                      long and delicate years of war, it seemed that the kingdom
                      of the Narkles would obtain what it always sought. Faced
                      with the imminent fall of their kingdom, the 1000 most
                      powerful Thunderbirds of each race decided to enter the
                      mud forest, home to all kinds of creatures and unknown
                      evils, hoping to find the sword of the great Salomon
                      Ludwig who at the beginning of The times made the Narkles
                      and Thunderbirds the dominant species on the planet thanks
                      to their cunning and strength.
                    </p>
                  </div>
                  <div className="column right">
                    <h1 className="right-title">The War of the two kingdoms2</h1>
                    <p className="right-paragraph">
                      Whoever managed to get hold of his power would be able to
                      win any battle. For 6 months the thunderbirs soldiers
                      fought with their lives against all kinds of creatures,
                      until they reached the lair of Giblon the guardian of the
                      sword. There were only 6 left alive, who after an
                      incredible battle, managed to defeat Giblon and proclaimed
                      themselves along with his army of 9994 Thunderbirds that
                      awaited them in the kingdom, the Elite Infinity. These
                      were a group of 9,994 soldiers, who, under the command of
                      the legendary 6 and Ludwig's sword, managed to defeat the
                      Narkles.
                    </p>
                  </div>
                </div>
              </span>
              <span className="slide">
                <div className="columns">
                  <div className="column left">
                    <h1 className="left-title">
                      Elite infinity: The beginning3
                    </h1>
                    <p className="left-paragraph">
                      Kingar is a huge world inhabited by all kinds of strange
                      creatures. In its early days, the two dominant species on
                      the planet were the Thunderbirds and the Narkles. Both
                      races lived in harmony with each other until one day, the
                      greed of the Narkles made everything change. After 100
                      long and delicate years of war, it seemed that the kingdom
                      of the Narkles would obtain what it always sought. Faced
                      with the imminent fall of their kingdom, the 1000 most
                      powerful Thunderbirds of each race decided to enter the
                      mud forest, home to all kinds of creatures and unknown
                      evils, hoping to find the sword of the great Salomon
                      Ludwig who at the beginning of The times made the Narkles
                      and Thunderbirds the dominant species on the planet thanks
                      to their cunning and strength.
                    </p>
                  </div>
                  <div className="column right">
                    <h1 className="right-title">The War of the two kingdoms3</h1>
                    <p className="right-paragraph">
                      Whoever managed to get hold of his power would be able to
                      win any battle. For 6 months the thunderbirs soldiers
                      fought with their lives against all kinds of creatures,
                      until they reached the lair of Giblon the guardian of the
                      sword. There were only 6 left alive, who after an
                      incredible battle, managed to defeat Giblon and proclaimed
                      themselves along with his army of 9994 Thunderbirds that
                      awaited them in the kingdom, the Elite Infinity. These
                      were a group of 9,994 soldiers, who, under the command of
                      the legendary 6 and Ludwig's sword, managed to defeat the
                      Narkles.
                    </p>
                  </div>
                </div>
              </span>
              <span className="slide">
                <div className="columns">
                  <div className="column left">
                    <h1 className="left-title">
                      Elite infinity: The beginning4
                    </h1>
                    <p className="left-paragraph">
                      Kingar is a huge world inhabited by all kinds of strange
                      creatures. In its early days, the two dominant species on
                      the planet were the Thunderbirds and the Narkles. Both
                      races lived in harmony with each other until one day, the
                      greed of the Narkles made everything change. After 100
                      long and delicate years of war, it seemed that the kingdom
                      of the Narkles would obtain what it always sought. Faced
                      with the imminent fall of their kingdom, the 1000 most
                      powerful Thunderbirds of each race decided to enter the
                      mud forest, home to all kinds of creatures and unknown
                      evils, hoping to find the sword of the great Salomon
                      Ludwig who at the beginning of The times made the Narkles
                      and Thunderbirds the dominant species on the planet thanks
                      to their cunning and strength.
                    </p>
                  </div>
                  <div className="column right">
                    <h1 className="right-title">The War of the two kingdoms4</h1>
                    <p className="right-paragraph">
                      Whoever managed to get hold of his power would be able to
                      win any battle. For 6 months the thunderbirs soldiers
                      fought with their lives against all kinds of creatures,
                      until they reached the lair of Giblon the guardian of the
                      sword. There were only 6 left alive, who after an
                      incredible battle, managed to defeat Giblon and proclaimed
                      themselves along with his army of 9994 Thunderbirds that
                      awaited them in the kingdom, the Elite Infinity. These
                      were a group of 9,994 soldiers, who, under the command of
                      the legendary 6 and Ludwig's sword, managed to defeat the
                      Narkles.
                    </p>
                  </div>
                </div>
              </span>
            </div>
            <button className="prev" id="prev">
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button className="next" id="next">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
