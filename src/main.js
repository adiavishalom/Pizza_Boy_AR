document.addEventListener("DOMContentLoaded", () => {
    const boy = document.getElementById('boy');
    const boyImg = document.getElementById('boy_img')
    const body = document.querySelector("body");
 

    body.addEventListener("keydown", (e) => {
        if (e.code === "ArrowLeft") {
            boy.setAttribute('src', "#boy_img_left")
            let currPos = boy.getAttribute('position')
            if (currPos.x-1 >= -3) boy.setAttribute('position', `${currPos.x-1} ${currPos.y} ${currPos.z}`)
        }
        if (e.code === "ArrowRight") {
            boy.setAttribute('src', "#boy_img_right")
            let currPos = boy.getAttribute('position')
            if (currPos.x+1 <= 3) boy.setAttribute('position', `${currPos.x+1} ${currPos.y} ${currPos.z}`)
        }
        if (e.code === "ArrowUp") {
            let currPos = boy.getAttribute('position')
            if (currPos.y+1 <= 2.7) boy.setAttribute('position', `${currPos.x} ${currPos.y+1} ${currPos.z}`)
        }
        if (e.code === "ArrowDown") {
            let currPos = boy.getAttribute('position')
            if (currPos.y-1 >= -1.3) boy.setAttribute('position', `${currPos.x} ${currPos.y-1} ${currPos.z}`)
        }
      });


});