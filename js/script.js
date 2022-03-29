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
  const baseA = parseInt(document.getElementById('base-of-triangle').value)
  const baseB = parseInt(document.getElementById('base-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const area = (base * height) / 2

  // output
  document.getElementById('area').innerHTML = 'The Area of the triangle is: ' + area + ' cm²'
}
