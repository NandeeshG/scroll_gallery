/* eslint-disable no-debugger, no-console, no-unused-vars */

window.onload = function(){
    init();
}

var height,width,imgindex,imglimit

var init = function(){
    imgindex = 0
    imglimit = 88  //NEED TO HARDCODE THIS RN, Can use filesystem to count number of jpgs in my folder

    var btn_up = document.getElementById('btn_up');
    var btn_down = document.getElementById('btn_down');

    height = document.documentElement.clientHeight;
    width  = document.documentElement.clientWidth;

    btn_up.addEventListener('click', moveUp);
    btn_down.addEventListener('click', moveDown);
}

var moveUp = function(){
    console.log('moving up..');

    // 1. Clear container
    var container = document.getElementById('img_cont');
    container.innerHTML = "";

    // 2. Decrease imgindex and create element
    imgindex--

    var imgpath = getImgPath()

    var newimg = document.createElement('img');
    newimg.src = imgpath
    newimg.height = (height)-50;

    // 3. Add to container
    container.appendChild(newimg);
}

var moveDown = function(){
    console.log('moving down..');

    // 1. Clear container
    var container = document.getElementById('img_cont');
    container.innerHTML = "";

    // 2. Increase imgindex and create element
    imgindex++

    var imgpath = getImgPath()

    var newimg = document.createElement('img');
    newimg.src = imgpath
    newimg.height = (height)-50;

    // 3. Add to container
    container.appendChild(newimg);
}

var getImgPath = function(){
    if(imgindex<=0) imgindex=1
    if(imgindex>imglimit) imgindex=imglimit

    var imgpath = `./media/pic${imgindex}.jpg`
    return imgpath
}


