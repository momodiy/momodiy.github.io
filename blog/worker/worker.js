/*
* Created by Steven Lee
* Date: 2020/11/7
* Time: 21:49
* Project: DIY
* */
onmessage = e => {

  console.log(e.data, 'from Worker')

  postMessage(Number(e.data[0] || 0) + Number(e.data[1] || 0))

  close()
}
