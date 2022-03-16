input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Angry)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
basic.forever(function () {
	
})
