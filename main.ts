"use strict";
import { Position } from './interfaces/position';

const Alpaca = require('@alpacahq/alpaca-trade-api');
const alpaca = new Alpaca({ paper: true });

alpaca.getAccount().then((account: any) => {
  console.log('Current Account:', account);
});

alpaca.getPositions().then((positions: Position[]) => {
  console.log('Current Positions:', positions);
});

/**
  general flow
  1. get my current positions,
  2. get their data for the time period,
  3. determine if any are sellable,
  4.   sell any sellable,
  5. get my current cash,
  6.   if I have money,
  7.     check if any symbols that I can afford are buyable,
  8.       if there are, buy what I can
  9.         after buying one, filter out the stocks I cannot afford anymore
  10.          and buy another one, repeat
*/