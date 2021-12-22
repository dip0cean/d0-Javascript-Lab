import '../game/game.css';
import React from 'react';
import Board from '../board/board';

/**
 * 
 */
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true
        };
    }

    /**
     * 해당 함수는 Square 컴포넌트에서 onClick 이벤트 발생 시 수행된다.
     *  1. 불변성을 유지하여 과거에 누른 Square 를 기억하기 위해서, this.state.squares 데이터를 slice() 함수로 다시 나누어 새로운 식별자에 정의한다.
     *  2. 승자가 존재하는 경우, Square 클릭 시 게임을 멈추도록 return
     *  3. 현재 클릭의 다음 순번이 'X' 라면 Square 에 'X' 를, 아니라면 'O' 를 정의한다.
     *  4. Board 의 this.state 를 setState() 를 통해서 재정의한다.
     * 
     * @param {*} i 
     * @returns hasWinner return null
     */
     handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares || squares[i])) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    };

    /**
     * 3칸을 먼저 만든 유저가 승리한다.
     * 
     * @param {*} squares 
     * @returns Winner or null
     */
    calculateWinner(squares) {
        const lines =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }
    

    render() {
        const history = this.state.history;
        console.log(history);
        console.log(this.state.stepNumber);
        const current = history[this.state.stepNumber];
        console.log(current);
        const winner = this.calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner : ' + winner;
        } else {
            status = 'Next Player : ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className='game'>
                <div className='game-board'>
                    <Board 
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className='game-info'>
                    <div>{status}</div>
                    <div>{moves}</div>
                </div>
            </div>
        );
    }
}

export default Game;