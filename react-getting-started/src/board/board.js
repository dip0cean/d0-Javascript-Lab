import '../board/board.css';
import React from 'react';
import Square from '../square/square';

class Board extends React.Component {

    /**
     * 각 Square 에게 Board 의 현재 this.state.square 값을 표현하도록 한다.
     * 
     * @param {*} i 
     * @returns Square Component
     */
    renderSquare(i) {
        return (
        <Square 
            // 각 Square 의 인텍스를 기준으로 this.state.square 의 값 props 으로 전달
            value={this.props.squares[i]} 
            /*
                Square 클릭 시, Board 의 this.handleClick 함수 호출하도록 설정
                Square 에서 Board 의 this.state 를 직접 컨트롤 할 수 없다.
            */
            onClick={() => this.props.onClick(i)}
        />
        );
    }

    /**
     * 
     * @returns Squares in Board
     */
    render() {
        return (
            <div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;