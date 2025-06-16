// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // Раскрываем на весь экран

// Конфиг Phaser
const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'assets/background.png');
    this.load.image('button', 'assets/button.png');
}

function create() {
    // Добавляем фон (на весь экран)
    this.add.image(tg.viewportStableWidth / 2, tg.viewportStableHeight / 2, 'background')
        .setDisplaySize(tg.viewportStableWidth, tg.viewportStableHeight);

    // Кнопка с обработчиком Telegram
    const btn = this.add.image(tg.viewportStableWidth / 2, tg.viewportStableHeight / 2, 'button')
        .setInteractive()
        .on('pointerdown', () => {
            tg.sendData("Button clicked!"); // Отправляем данные в бота
        });
}
