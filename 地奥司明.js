let count = 0

function doClick () {
  sleep(1000)
  click(330, 651)
  sleep(1000)

  //1
  swipe(250, 1500, 250, 1500 - 200, 300)
  click(250, 1000)
  sleep(300)

  //2
  swipe(250, 1500, 250, 1500 - 620, 300)
  click(250, 1000)
  sleep(300)

  //3
  swipe(250, 1500, 250, 1500 - 750, 300)
  click(250, 1000)
  sleep(300)

  //4
  swipe(250, 1500, 250, 1500 - 780, 300)
  click(250, 1000)
  sleep(300)

  //5
  swipe(250, 1500, 250, 1500 - 700, 300)
  click(250, 1000)
  sleep(300)

  //6
  swipe(250, 1500, 250, 1500 - 714, 300)
  click(250, 1000)
  sleep(300)

  //7
  swipe(250, 1500, 250, 1500 - 680, 300)
  click(250, 1000)
  sleep(300)

  //8
  swipe(250, 1500, 250, 1500 - 612, 300)
  click(250, 1000)
  sleep(300)

  //9
  swipe(250, 1500, 250, 1500 - 673, 300)
  click(250, 1000)
  sleep(300)

  //10
  swipe(250, 1500, 250, 1500 - 845, 300)
  click(250, 1000)
  sleep(300)

  //11
  swipe(250, 1500, 250, 1500 - 1027, 300)
  click(250, 1000)
  sleep(300)

  //12
  swipe(250, 1500, 250, 1500 - 778, 300)
  click(250, 1000)
  sleep(300)

  //13
  swipe(250, 1500, 250, 1500 - 702, 300)
  click(250, 1000)
  sleep(300)

  //14
  swipe(250, 1500, 250, 1500 - 708, 300)
  click(250, 1000)
  sleep(300)

  //15
  swipe(250, 1500, 250, 1500 - 500, 300)
  click(250, 1660)
  sleep(300)

  //summit
  click(500, 2200)
  console.log('abcd')
  if (count < 200) {
    sleep(2000)
    back()
    sleep(300)
    count ++
    doClick()
  }
}

doClick()
