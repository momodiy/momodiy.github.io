/*
* updated by Steven at 11/7/2017
* */

const $ = id => document.getElementById(id);

let me = true,
  over = false,
  wins = [], //赢法数组(三维数组)
  myWin = [], //赢法统计数组（一维数组）
  count = 0,
  winner = null,
  chessBoard = [],
  computerWin = [],
  logo = new Image(),
  gameCount = $('gameCount').innerText = localStorage.count || 0,
  winNumber = $('winNumber').innerText = localStorage.winNumber || 0;

const context = $('chess').getContext('2d');

$('odds').innerText = gameCount ? ~~(winNumber / gameCount * 100) : 100;

const scoreStatisticArray = {
  defind: [200, 450, 2000, 10000],
  attack: [300, 600, 3500, 100000]
};

for (let i = 0; i < 15; i++) {
  chessBoard[i] = [];
  for (let j = 0; j < 15; j++) {
    chessBoard[i][j] = 0;
  }
}

for (let i = 0; i < 15; i++) {
  wins[i] = [];
  for (let j = 0; j < 15; j++) {
    wins[i][j] = [];
  }
}

//横线赢法
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 11; j++) {
    for (let k = 0; k < 5; k++) {
      wins[i][j + k][count] = true;
    }
    count++;
  }
}

//竖线赢法
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 11; j++) {
    for (let k = 0; k < 5; k++) {
      wins[j + k][i][count] = true;
    }
    count++;
  }
}
//'\'方向赢法
for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
    for (let k = 0; k < 5; k++) {
      wins[i + k][j + k][count] = true;
    }
    count++;
  }
}

//'/'方向赢法
for (let i = 0; i < 11; i++) {
  for (let j = 14; j > 3; j--) {
    for (let k = 0; k < 5; k++) {
      wins[i + k][j - k][count] = true;
    }
    count++;
  }
}

//五子棋共有的赢法——572种

for (let i = 0; i < count; i++) {
  myWin[i] = 0;
  computerWin[i] = 0;
}

context.strokeStyle = "#BFBFBF";
//加水印
logo.src = 'img/background.jpg';
logo.onload = () => {
  context.drawImage(logo, 0, 0, 450, 450);
  drawchessBoard();
}
//画棋盘
const drawchessBoard = () => {
  for (let i = 0; i < 15; i++) {
    context.moveTo(15 + i * 30, 15);
    context.lineTo(15 + i * 30, 435);
    context.stroke();
    context.moveTo(15, 15 + i * 30);
    context.lineTo(435, 15 + i * 30);
    context.stroke();
  }
}

const oneStep = (i, j, me) => {
  context.beginPath();
  context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);
  context.closePath();
  let gradient = context.createRadialGradient(15 + i * 30, 15 + j * 30, 15, 15 + i * 30, 15 + j * 30, 0);
  gradient.addColorStop(0, me ? '#0A0A0A' : '#D1D1D1');
  gradient.addColorStop(1, me ? '#636766' : '#F9F9F9');
  context.fillStyle = gradient;
  context.fill(); //填充图形
}

$('chess').onclick = e => {
  if (over || !me) return
  //通过鼠标点击坐标确定落子坐标
  let x = e.offsetX,
    y = e.offsetY;
  i = Math.floor(x / 30);
  j = Math.floor(y / 30);
  //判断落子的位置是否已经落子
  if (chessBoard[i][j] === 0) {
    oneStep(i, j, me);
    chessBoard[i][j] = 1;
    //轮流下棋 落下一种颜色棋子后换一种颜色
    //遍历所有赢法
    for (let k = 0; k < count; k++) {
      if (wins[i][j][k]) {
        myWin[k]++;
        computerWin[k] = 6;
        if (myWin[k] === 5) {
          setTimeout(() => {
          }, 500);
          alert('你赢了');
          over = true; //游戏结束开关
          winner = true;
          gameOver();
        }
      }
    }
    if (!over) {
      me = !me;
      computerAI();
    }
  }
}

const computerAI = () => {
  let u = 0,
    v = 0,
    myScore = [],
    computerScore = [],
    max = 0;

  for (let i = 0; i < 15; i++) {
    myScore[i] = [];
    computerScore[i] = [];
    for (let j = 0; j < 15; j++) {
      myScore[i][j] = 0;
      computerScore[i][j] = 0;

    }
  }
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (chessBoard[i][j] === 0) {
        for (let k = 0; k < count; k++) {
          if (wins[i][j][k]) {
            if (myWin[k] === 1) {
              myScore[i][j] += scoreStatisticArray['defind'][0];
            } else if (myWin[k] === 2) {
              myScore[i][j] += scoreStatisticArray['defind'][1];
            } else if (myWin[k] === 3) {
              myScore[i][j] += scoreStatisticArray['defind'][2];
            } else if (myWin[k] === 4) {
              myScore[i][j] += scoreStatisticArray['defind'][3];
            }
            if (computerWin[k] === 1) {
              computerScore[i][j] += scoreStatisticArray['attack'][0];
            } else if (computerWin[k] === 2) {
              computerScore[i][j] += scoreStatisticArray['attack'][1];
            } else if (computerWin[k] === 3) {
              computerScore[i][j] += scoreStatisticArray['attack'][2];
            } else if (computerWin[k] === 4) {
              computerScore[i][j] += scoreStatisticArray['attack'][3];
            }
          }
        }
        //选取更优点位走棋 u、v为落子点坐标
        if (myScore[i][j] > max) {
          max = myScore[i][j];
          u = i;
          v = j;
        } else if (myScore[i][j] === max) {
          if (computerScore[i][j] > computerScore[u][v]) {
            u = i;
            v = j;
          }
        }

        if (computerScore[i][j] > max) {
          max = computerScore[i][j];
          u = i;
          v = j;
        } else if (computerScore[i][j] === max) {
          if (myScore[i][j] > myScore[u][v]) {
            u = i;
            v = j;
          }
        }

      }
    }
  }
  oneStep(u, v, false);
  chessBoard[u][v] = 2;
  for (let k = 0; k < count; k++) {
    if (wins[u][v][k]) {
      computerWin[k]++;
      myWin[k] = 6;
      if (computerWin[k] === 5) {
        setTimeout(() => {
          alert('你输了');
          over = true; //游戏结束开关
          winner = false;
          gameOver();
        }, 100)
      }
    }
  }
  me = over ? me : !me; //走棋轮换
}

const gameOver = () => $('restartBtn').style.display = 'block';

$('restartBtn').onmousedown = () => {
  localStorage.count = ++gameCount;
  localStorage.winNumber = winner ? ++winNumber : winNumber;
  history.go(0);
}