/* eslint-disable no-debugger, no-console, no-unused-vars */

window.onload = function(){
    init();
    move(1); //one pic displayed
}

// TRY SCROLLING LATER
//var scrollHandle = function(e){
//    console.log('SCROLLED ',e);
//
//    var loc = document.documentElement.scrollTop;
//    var lastloc = window.scrollY;
//
//    console.log('dE ',loc);
//    console.log('ll ',lastloc);
//
//    //if(loc <= 0) moveUp();
//    if(loc>=11) moveDown();
//}
//
//window.addEventListener('scroll', function(e){scrollHandle(e)});

var height,width   //of the window
var adjust  //increase to reduce picture height
var imgindex,imglimit

var data = []
var data_len,data_index  

var init = function(){
    imgindex = 0
    imglimit = 88  //NEED TO HARDCODE THIS RN, Can use filesystem to count number of jpgs/pngs in my folder

    height = document.documentElement.clientHeight;
    width  = document.documentElement.clientWidth;
    adjust = Number(50)
    console.log('__Height found - ',height);
    console.log('__Width found - ',width);
    console.log('__Adjust length - ',adjust);

    data_len = 10
    data_index = 0
    compute_data()

    var btn_up = document.getElementById('btn_up');
    var btn_down = document.getElementById('btn_down');


    btn_up.addEventListener('click', function(){move(-1)});
    btn_down.addEventListener('click', function(){move(1)});
}

var move = function(delta){
    console.log('moving down..');

    // 1. Clear container
    var container = document.getElementById('img_cont');
    container.innerHTML = "";

    // 2. Increase/Decrease imgindex and get element
    imgindex += delta
    if(imgindex<=0) imgindex = 1
    if(imgindex>imglimit) imgindex=imglimit
    var newimg = getImage()

    // 3. Add to container
    container.appendChild(newimg);
}

var getImage = function(){
    var data_first = data_len*data_index + 1
    var data_last  = data_len*data_index + data_len

    console.log('gI_DataLen ',data_len);
    console.log('gI_DataIndex ',data_index);
    console.log('gI_Imgindex ',imgindex);
    console.log('gI_DataFirst ',data_first);
    console.log('gI_DataLast ',data_last);

    // we moved up
    if(data_first>imgindex){
	data_index--;
	compute_data();
    }else if(data_last<imgindex){  //we moved down
	data_index++;
	compute_data();
    }
    if(data_index<0) data_index = 0
    if(data_index>=(imglimit/10)) data_index=(imglimit/10)-1

    // we are in current data window
    console.log(data);
    var ref_index = imgindex%data_len - 1
    if(ref_index == -1) ref_index = data_len-1;
    console.log(ref_index);
    return data[ref_index]
}

var compute_data = function(){

    data = []
    var data_first = data_len*data_index + 1
    var data_last  = data_len*data_index + data_len

    console.log('c_DataLen ',data_len);
    console.log('c_DataIndex ',data_index);
    console.log('c_DataFirst ',data_first);
    console.log('c_DataLast ',data_last);

    for(var i=data_first; i<=Math.min(imglimit,data_last); ++i){
	var imgpath = `./media/pic${i}.jpg`
	var newimg = document.createElement('img');
	//var newimg = new Image();
	newimg.src = imgpath
	newimg.height = (height-adjust);
	data.push(newimg);
	//data += newimg
    }
    console.log('Data',data);
}

