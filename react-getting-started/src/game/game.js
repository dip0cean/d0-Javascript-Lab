import '../game/game.css';
import React from 'react';
import Board from '../board/board';

class Game extends React.Component {
    render() {
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div>{/* status */}</div>
                    <div>{/* TODO */}</div>
                </div>
            </div>
        );
    }
}

export default Game;