let count = 0

function doClick () {
  sleep(1000)
  click(500, 660)
  sleep(1000)

  //1
  swipe(250, 1500, 250, 1500 - 210, 500)
  click(250, 1000)
  sleep(500)

  //2
  swipe(250, 1500, 250, 1500 - 600, 500)
  click(250, 1000)
  sleep(500)

  //3
  swipe(250, 1500, 250, 1500 - 760, 500)
  click(250, 1000)
  sleep(500)

  //4
  swipe(250, 1500, 250, 1500 - 739, 500)
  click(250, 1000)
  sleep(500)

  //5
  swipe(250, 1500, 250, 1500 - 710, 500)
  click(250, 1000)
  sleep(500)

  //6
  swipe(250, 1500, 250, 1500 - 770, 500)
  click(250, 1000)
  sleep(500)

  //7
  swipe(250, 1500, 250, 1500 - 610, 500)
  click(250, 1000)
  sleep(500)

  //8
  swipe(250, 1500, 250, 1500 - 620, 500)
  click(250, 1000)
  sleep(500)

  //9
  swipe(250, 1500, 250, 1500 - 663, 500)
  click(250, 1000)
  sleep(500)

  //10
  swipe(250, 1500, 250, 1500 - 813, 500)
  click(250, 1000)
  sleep(500)

  //11
  swipe(250, 1500, 250, 1500 - 1099, 500)
  click(250, 1000)
  sleep(500)

  //12
  swipe(250, 1500, 250, 1500 - 782, 500)
  click(250, 1000)
  sleep(500)

  //13
  swipe(250, 1500, 250, 1500 - 687, 500)
  click(250, 1000)
  sleep(500)

  //14
  swipe(250, 1500, 250, 1500 - 718, 500)
  click(250, 1000)
  sleep(500)

  //15
  swipe(250, 1500, 250, 1500 - 500, 500)
  click(250, 1744)
  sleep(500)

  //summit
  click(500, 2200)
  console.log('done')
  if (count < 180) {
    sleep(2000)
    back()
    sleep(500)
    count ++
    doClick()
  }
}

doClick()
