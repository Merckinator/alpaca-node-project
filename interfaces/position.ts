export interface Position {
    asset_id:                 string;
    symbol:                   string;
    exchange:                 string;
    asset_class:              string;
    asset_marginable:         boolean;
    qty:                      string;
    avg_entry_price:          string;
    side:                     string;
    market_value:             string;
    cost_basis:               string;
    unrealized_pl:            string;
    unrealized_plpc:          string;
    unrealized_intraday_pl:   string;
    unrealized_intraday_plpc: string;
    current_price:            string;
    lastday_price:            string;
    change_today:             string;
    qty_available:            string;
}