function isNum(length) {
    if (toString.call(length) != '[object Number]') {
        return true
    }
    return false
}

function sizeCircle(radius) {
    if (arguments.length != 1) {
        return console.log('인자의 갯수가 맞지 않습니다.');
    } else if (isNum(radius)) {
        return console.log('숫자만 계산 가능합니다.');
    }
    const circleArea = radius * radius * Math.PI
    console.log('반지름이 ' + radius + '인 원의넓이는' + circleArea + '입니다.');
}
//test circle
console.log('원')
sizeCircle(4)
sizeCircle('문자')
sizeCircle();

function sizeSquare(lowerSide, height) {
    if (arguments.length != 2) {
        return console.log('인자의 개수가 맞지 않습니다.')
    } else if (isNum(lowerSide) || isNum(height)) {
        return console.log('숫자만 계산 가능합니다.')
    }
    const squareArea = lowerSide * height
    console.log('밑변과 높이가 ' + lowerSide + ', ' + height + '인 사각형의 넓이는' + squareArea + '입니다.')
}

//test square
console.log('사각형')
sizeSquare(4, 3)
sizeSquare(3)
sizeSquare()
sizeSquare('문자', '문자');
sizeSquare('문자');

function sizeTrapezoid(topSide, lowerSide, height) {
    if (arguments.length != 3) {
        return console.log('인자의 개수가 맞지 않습니다.')
    } else if (isNum(topSide) || isNum(lowerSide) || isNum(height)) {
        return console.log('숫자만 계산할 수 있습니다.')
    }
    const trapezoidArea = (topSide + lowerSide) * height / 2
    console.log('윗변과 아랫변과 높이가 ' + topSide + ', ' + lowerSide + ', ' + height + '인 사다리꼴의 넓이는' + trapezoidArea + '입니다.')
}

//test trapezoid
console.log('사다리꼴')
sizeTrapezoid(2, 3, 4)
sizeTrapezoid(2, 3)
sizeTrapezoid('문자', 2, 3)
sizeTrapezoid('문자', '문자', '문자')
sizeTrapezoid()

function sizeSylinder(radius, height) {
    if (arguments.length != 2) {
        return console.log('인자의 갯수가 맞지 않습니다.')
    } else if (isNum(radius) || isNum(height)) {
        return console.log('숫자만 계산할 수 있습니다.')
    }
    const sylinderArea = (Math.PI * radius * radius) + ((2 * radius * Math.PI) * height)
    console.log('반지름과 높이가' + radius + ', ' + height + '인 원기둥의 겉넓이는 ' + sylinderArea + '입니다.')
}

//test sizeSylinder
console.log('원기둥')
sizeSylinder(2, 3)
sizeSylinder(2)
sizeSylinder('문자', '문자')
sizeSylinder('문자', 3)
sizeSylinder()

