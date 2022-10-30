const chartProperties = {
  width:1200,
  height:600,
  timeScale:{
    timeVisible:true,
    secondsVisible:false,
  }
}

const domElement = document.getElementById('tvchart');
const chart = LightweightCharts.createChart(domElement,chartProperties);
const candleSeries = chart.addCandlestickSeries();
const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1m'); 

fetch(`https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000`)
  .then(res => res.json())
  .then(data => {
    const cdata = data.map(d => {
      return {time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
    });
    candleSeries.setData(cdata);
  })
  .catch(err => log(err))



ws.addEventListener('message', event => { 
    const d = JSON.parse(event.data).k;
    candleSeries.update({time:d['t']/1000,open:parseFloat(d['o']),high:parseFloat(d['h']),low:parseFloat(d['l']),close:parseFloat(d['c'])})
}); 
