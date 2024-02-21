# range-slider
Custom range slider styling project

## Main Element Structure

| \<element\>            	| attr name 	| attr value 	| required 	| notes                                        	|
|------------------------	|-----------	|------------	|:--------:	|----------------------------------------------	|
| \<input type="range"\>   	| rs-range  	|            	|     ✅    	| main element                                 	|
| \<div\> (parent wrapper) 	| rs-parent 	|            	|          	| parent wrapper if using display element      	|
| \<input type="number"\>  	| rs-input  	|            	|          	| display element / doubles as secondary input 	|

## Styling Overrides

You can override the default styling on an individual element basis by using the following attributes:

| \<element\>            	| attr name              	| attr value                                                          	| default value 	| notes                                                           	|
|------------------------	|------------------------	|---------------------------------------------------------------------	|:-------------:	|-----------------------------------------------------------------	|
| \<input type="range"\> 	| rs-track-color         	| "color"                                                             	|     black     	| changes the color of the selected amount in the range           	|
| \<input type="range"\> 	| rs-track-bg            	| "color"                                                             	|   lightGray     	| changes the color of the bar background color (unselected part) 	|
| \<input type="range"\> 	| rs-track-border-radius 	| "size"                                                              	|      15px     	| change the border radius of the slider track                    	|
| \<input type="range"\> 	| rs-thumb-color         	| "color"                                                             	|     black     	| changes the color of the thumb                                  	|
| \<input type="range"\> 	| rs-thumb-size          	| "size"                                                              	|      15px     	| changes the size of the thumb                                   	|
| \<input type="range"\> 	| rs-thumb-border-color  	| "color"                                                             	|     black     	| changes the color of the thumb border                           	|
| \<input type="range"\> 	| rs-thumb-border-size   	| "size"                                                              	|      1px      	| change the thickness of the thumb border                        	|
| \<input type="range"\> 	| rs-thumb-border-style  	| ["css border styles"](https://www.w3schools.com/css/css_border.asp) 	|     solid     	| change the style of the thumb border                            	|
| \<input type="range"\> 	| rs-thumb-border-radius 	| "size"                                                              	|      50%      	| change the radius of the thumb (useful to change the shape)     	|
| \<input type="range"\> 	| rs-thumb-hover-size    	| "size"                                                              	|      10px     	| change the size of the hover overlay                            	|
| \<input type="range"\> 	| rs-thumb-hover-bg      	| "color"                                                             	|     black     	| change the color of the thumb hover overlay                     	|
| \<input type="range"\> 	| rs-thumb-active-size   	| "size"                                                              	|      13px     	| change the size of the active overlay                           	|
| \<input type="range"\> 	| rs-thumb-active-bg     	| "color"                                                             	|     black     	| change the color of the acitve overlay                          	|
| \<input type="range"\> 	| rs-hover-disable       	|                                                                     	|               	| disables the hover and click states from the thumb              	|

## Optional Variable Declarations

You could also define the following css variables to override the default styling globally instead of per element:

```css
:root {
      /* thumb */
      --thumb-color: "black";
      --thumb-size: 15px;
      --thumb-border: "black";
      --thumb-border-size: 1px;
      --thumb-border-style: "solid";
      --thumb-border-radius: 50%;

      /* track */
      --track: "black";
      --track-bg: "lightGray";
      --track-border-radius: 15px;


      /* hover and active states */
      --thumb-hover-size: 10px;
      --thumb-hover-bg: color-mix(in srgb, var(--track, black), #0000 90%);
      --thumb-active-size: 13px;
      --thumb-active-bg: color-mix(in srgb, var(--track, black), #0000 80%);
}
```
