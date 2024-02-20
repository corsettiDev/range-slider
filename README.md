# range-slider
Custom range slider styling project

## Main Element Structure

| \<element\>            	| attr name 	| attr value 	| required 	| notes                                        	|
|------------------------	|-----------	|------------	|:--------:	|----------------------------------------------	|
| \<input type="range"\>   	| rs-range  	|            	|     ✅    	| main element                                 	|
| \<div\> (parent wrapper) 	| rs-parent 	|            	|          	| parent wrapper if using display element      	|
| \<input type="number"\>  	| rs-input  	|            	|          	| display element / doubles as secondary input 	|

## Styling Overrides

| \<element\>            	| attr name        	| attr value          	| required 	| notes                                                           	|
|------------------------	|------------------	|---------------------	|:--------:	|-----------------------------------------------------------------	|
| \<input type="range"\> 	| rs-track-color   	| "some-color or hex" 	|          	| changes the color of the selected amount in the range           	|
| \<input type="range"\> 	| rs-track-bg      	| "some-color or hex" 	|          	| changes the color of the bar background color (unselected part) 	|
| \<input type="range"\> 	| rs-thumb-color   	| "some-color or hex" 	|          	| changes the color of the thumb                                  	|
| \<input type="range"\> 	| rs-thumb-border- color   	| "some-color or hex" 	|          	| changes the color of the thumb border                                 	|
| \<input type="range"\> 	| rs-hover-disable 	|                     	|          	| disables the hover and click states from the thumb              	|


## Optional Variable Declarations

You could also define the following css variables to override the default styling globally instead of per element:

```css
:root {
      /* Colors */
      --thumb-color: #e9fc75;
      --track: #232322;
      --thumb-border: var(--track);
      --track-bg: #ccc;

      /* Hover and Active States */
      --thumb-hover-bg: color-mix(in srgb, var(--track, black), #0000 90%);
      --thumb-active-bg: color-mix(in srgb, var(--track, black), #0000 80%);

      /* Dimensions */
      --thumb-size: 15px;
}
```
