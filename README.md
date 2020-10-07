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
6. Remove buttons in favor of scroll. Add multiple pics and zoom in so that only 1.5 pictures fill the screen at one time to get a good scroll experience.
7. Address limitation 3 if possible
8. Display pictures in grid of 4x4. Use lazy reloading as it is with array size 4x4x3.
9. Test with 1000 pictures


Limitations - 
1. All pics should have a welldefined naming scheme with indexes, example pic12.jpg
2. All pics should have same extension
3. Slow state when loading 10 images in data_window - possible solution is to first return with required picture and then load data in the background. Need to learn how to do this.

TIPS -
1. Disable console logs in final product

