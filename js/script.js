// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: Mar 21, 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of a prism or cylinder.
 */
function calculateVolumeOfObject() {
  // input
  const baseAreaOfObject = parseFloat(
    document.getElementById("base-area-of-object").value
  )
  const heightOfObject = parseFloat(
    document.getElementById("height-of-object").value
  )

  // process
  const volumeOfObject = baseAreaOfObject * heightOfObject

  // output
  document.getElementById("volume").innerHTML =
    "The volume is: " + volumeOfObject + " cm³"
}
