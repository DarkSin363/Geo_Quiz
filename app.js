const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        create: create
    }
};
const game = new Phaser.Game(config);
function create() {
    this.add.text(400, 300, 'Тест работает!', { 
        fontSize: '32px', 
        fill: '#ffffff' 
    }).setOrigin(0.5);
}
