/* Created by: Kenny Le
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * This function calculates the area and perimeter of the rectangle.
 */
function calculate () {
  // input
  const baseA = parseFloat(document.getElementById('base-a-of-trapezoid').value)
  const baseB = parseFloat(document.getElementById('base-b-of-trapezoid').value)
  const height = parseFloat(document.getElementById('height-of-trapezoid').value)

  // process
  const area = [(baseA + baseB) / 2] * height

  // output
  document.getElementById('area').innerHTML = 'The Area of the trapezoid is: ' + area.toFixed(2) + ' cm²'
}
