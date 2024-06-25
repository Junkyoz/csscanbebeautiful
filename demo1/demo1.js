class BackgroundBlocks {
    constructor(layer, screenWidth, screenHeight) {
        this.layer = layer;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
    }

    createBackground() {
        if (this.screenWidth > 1200) {
            var boxHeight = this.screenHeight - 5 + "px";
            var boxWidth = this.screenWidth / 7 + "px";
            var colors = ["red", "purple", "blue", "orange"]
            var randomColor = colors[Math.floor(Math.random() * colors.length)]
            var block = document.createElement("div")
            block.style.backgroundColor = randomColor
            block.style.height = boxHeight;
            block.style.marginTop = "1.25px"
            block.style.width = boxWidth;
            block.style.position = "absolute"
            block.style.borderRadius = "5%"

            var set_layer = document.getElementById(this.layer)
            set_layer.appendChild(block)
            
            var marginLeft = Math.round(Math.random() * (this.screenWidth - parseInt(boxWidth)))
            var spd = (Math.random() < 0.5) ? 0.5 : -0.5

            setInterval(() => {
                if (marginLeft >= this.screenWidth - parseInt(boxWidth)) {
                    spd = -0.5
                } else if (marginLeft < 0) {
                    spd = 0.5
                }
                marginLeft += spd
                block.style.marginLeft = marginLeft + "px"
            }, 10)
        }
    }
}

var layers = ["bg_layer1", "bg_layer2", "bg_layer3", "bg_layer4", "bg_layer5", "bg_layer6", "bg_layer7"]
layers.forEach(layer => {
    var background = new BackgroundBlocks(layer, document.getElementById(layer).offsetWidth, document.getElementById(layer).offsetHeight)
    background.createBackground()
});
layers.forEach(layer => {
    var background = new BackgroundBlocks(layer, document.getElementById(layer).offsetWidth, document.getElementById(layer).offsetHeight)
    background.createBackground()
});
layers.forEach(layer => {
    var background = new BackgroundBlocks(layer, document.getElementById(layer).offsetWidth, document.getElementById(layer).offsetHeight)
    background.createBackground()
});
layers.forEach(layer => {
    var background = new BackgroundBlocks(layer, document.getElementById(layer).offsetWidth, document.getElementById(layer).offsetHeight)
    background.createBackground()
});