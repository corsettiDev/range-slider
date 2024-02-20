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
| \<input type="range"\> 	| rs-hover-disable 	|                     	|          	| disables the hover and click states from the thumb              	|
