import React, { Component } from 'react';
import { Client } from 'boardgame.io/client';
import { Game } from 'boardgame.io/core';
import Board from './boardui';

// test, 3 in one-line win !
function IsVictory(cells) {
    // victory condition. return true
    if (!Array.isArray(cells)) return false;
    const xy = Math.sqrt(cells.length);
    for(let i = 1; i < cells.length-1; i++) {
        if (!cells[i]) continue;
        if (!isEdgeCell(i, xy) && cells[i-1] == cells[i] && cells[i] == cells[i+1]) {
            return true;
        } else if (!isEdgeCell(i, xy) && cells[i-xy-1] == cells[i] && cells[i] == cells[i+xy+1]) {
            return true;
        } else if (!isEdgeCell(i, xy) && cells[i-xy+1] == cells[i] && cells[i] == cells[i+xy-1]) {
            return true;
        } else if (cells[i-xy] == cells[i] && cells[i] == cells[i+xy]) {
            return true;
        }
    }
    return false;
}

function isEdgeCell(id, xy) {
    if ((id+1)%xy == 0 || (id)%xy == 0) return true;
    return false;
}

const Grids = Game({
    // game config.
    setup: () => ({
        cells: Array(16).fill(null) // init value..
    }),
    // move function must be pure. arguments is passed in movefunc after G, ctx.
    moves: {
        clickCell(G, ctx, id) {
            const cells = [...G.cells];  // immutable cells
            if (cells[id] === null)
                cells[id] = ctx.currentPlayer;
            return {...G, cells};    
        }
    },

    flow: {
        // this function would set returned to ctx.gameover.. pretty good.
        endGameIf: (G, ctx) => {
            if (IsVictory(G.cells)) {
                console.warn("winner: player " + ctx.currentPlayer)
                return ctx.currentPlayer;
            }
        }
    }
})

const Dashboard = Client({ 
    game: Grids, // config and logics in this.
    board: Board
 });

export default Dashboard;
