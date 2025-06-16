// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Расширяем приложение на весь экран
tg.expand();

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Загрузка изображений
    this.load.image('background', 'assets/background.png');
    this.load.image('button', 'assets/button.png');
}

function create() {
    // Фон
    this.add.image(400, 300, 'background');

    // Кнопка "Начать игру"
    const startButton = this.add.image(400, 400, 'button')
        .setInteractive()
        .on('pointerdown', () => {
            alert('Игра началась! (Здесь будет переход в основной геймплей)');
        });

    // Текст на кнопке
    this.add.text(400, 400, 'Начать игру', { 
        font: '24px Arial', 
        fill: '#ffffff' 
    }).setOrigin(0.5);
}
