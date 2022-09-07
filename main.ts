"use strict";
import { Account } from './interfaces/account';
import { Bar } from './interfaces/bar';
import { Position } from './interfaces/position';

const Alpaca = require('@alpacahq/alpaca-trade-api');
const alpaca = new Alpaca({ paper: true });

alpaca.getAccount().then((account: Account) => {
  console.log('Current Account:', account);
});

alpaca.getPositions().then((positions: Position[]) => {
  console.log('Current Positions:', positions);
  const symbols = positions.map((pos: Position) => pos.symbol);

  const today = new Date();
  today.setDate(-10);

  alpaca.getMultiBarsV2(
    symbols,
    {
      start: today.toISOString().split('T')[0],
      timeframe: alpaca.newTimeframe(1, alpaca.timeframeUnit.DAY),
      limit: 10,
    },
  ).then((multiBars: any) => {
    console.log('Multibars were:', multiBars);
    
    symbols.forEach((symbol: string) => {
      const stockBars: Bar[] = multiBars[symbol];
      const stockPrices = stockBars.map((bar: Bar) => bar.ClosePrice);
      // Prices are returned old to new
      stockPrices.reverse();
      // Reversing makes it easier to calculate short-term average
      
    });
  });
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