import React from 'react';

export default class Board extends React.Component {
    onClick(id) {
        if (this.isActive(id)) {
            // passed from parent Game config, this would trigger flow endGameif()?!
            this.props.moves.clickCell(id);
            this.props.events.endTurn();
        }
    }

    /**
     * cell with null value is Active, can be edited.
     * @param {*id of Cell} id 
     */
    isActive(id) {
        if (!this.props.isActive) return false;
        if (this.props.G.cells[id] !== null) return false;
        return true;
    }

    render() {
        let winner = '';
        if (this.props.ctx.gameover !== null) {
            winner = <h3>Winner: <b>{this.props.ctx.gameover }</b> </h3>
        }

        const xy = Math.sqrt(this.props.G.cells.length);
        // render board UI.. Hexgrid things etc..
        let tbody = [];
        for (let i = 0; i < xy; i++) {
            let cells = [];
            for (let j = 0; j < xy; j++) {
                const id = xy * i + j;
                cells.push(
                    <td className='cell-style' key={id} onClick={() => this.onClick(id)}>
                        {this.props.G.cells[id]}
                        </td>
                )
            }
            tbody.push(<tr key={i}>{cells}</tr>)
        }
        return (
            <div>
                <table id="board">
                    <tbody>{tbody}</tbody>
                </table>
                {winner}
            </div>
        )
    }
}
