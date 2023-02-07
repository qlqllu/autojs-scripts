let count = 0

function doClick () {
  sleep(1000)
  click(330, 651)
  sleep(1000)

  //1
  swipe(250, 1500, 250, 1500 - 200, 500)
  click(250, 1000)
  sleep(500)

  //2
  swipe(250, 1500, 250, 1500 - 620, 500)
  click(250, 1000)
  sleep(500)

  //3
  swipe(250, 1500, 250, 1500 - 750, 500)
  click(250, 1000)
  sleep(500)

  //4
  swipe(250, 1500, 250, 1500 - 780, 500)
  click(250, 1000)
  sleep(500)

  //5
  swipe(250, 1500, 250, 1500 - 700, 500)
  click(250, 1000)
  sleep(500)

  //6
  swipe(250, 1500, 250, 1500 - 714, 500)
  click(250, 1000)
  sleep(500)

  //7
  swipe(250, 1500, 250, 1500 - 680, 500)
  click(250, 1000)
  sleep(500)

  //8
  swipe(250, 1500, 250, 1500 - 612, 500)
  click(250, 1000)
  sleep(500)

  //9
  swipe(250, 1500, 250, 1500 - 673, 500)
  click(250, 1000)
  sleep(500)

  //10
  swipe(250, 1500, 250, 1500 - 845, 500)
  click(250, 1000)
  sleep(500)

  //11
  swipe(250, 1500, 250, 1500 - 1027, 500)
  click(250, 1000)
  sleep(500)

  //12
  swipe(250, 1500, 250, 1500 - 778, 500)
  click(250, 1000)
  sleep(500)

  //13
  swipe(250, 1500, 250, 1500 - 702, 500)
  click(250, 1000)
  sleep(500)

  //14
  swipe(250, 1500, 250, 1500 - 708, 500)
  click(250, 1000)
  sleep(500)

  //15
  swipe(250, 1500, 250, 1500 - 500, 500)
  click(250, 1660)
  sleep(500)

  //summit
  click(500, 2200)
  console.log('abcd')
  if (count < 200) {
    sleep(2000)
    back()
    sleep(500)
    count ++
    doClick()
  }
}

doClick()
