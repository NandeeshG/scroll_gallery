# Scroll Gallery
Scroll through large number of pictures in a folder.
Improved speed of picture loading against the older way of adding all images in HTML at once.

RUN ONLINE AT - 
https://nandeeshg.github.io/scroll_gallery/

TODOS - 

1. Implement Basic one by one picture viewing.
    - (Done!) (Loading times are very slow)
2. Add scroll instead of buttons 
    - (Having problem) (Do later)
3. Decrease image loading times
    - (Reduced with the help of data window of len 10)
    - (window length changeable)
4. Add multiple pictures in single window
5. Use filesystem to get imglimit instead of hardcoding it 
6. Show speed affects in comparison with loading 500 pictures at once

Limitations - 
1. All pics should have a welldefined naming scheme with indexes, example pic12.jpg
2. All pics should have same extension
3. Slow state when loading 10 images in data_window - possible solution is to first return with required picture and then load data in the background. Need to learn how to do this.

