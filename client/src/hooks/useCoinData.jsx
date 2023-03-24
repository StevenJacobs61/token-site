import React, { useEffect, useState } from 'react'
import protobuf from 'protobufjs'
import { Buffer } from 'buffer'

const useCoinData = (ticker) => {
    const [data, setData] = useState();

    useEffect(() => {
        const ws = new WebSocket('wss://streamer.finance.yahoo.com');
      protobuf.load('./YPricingData.proto', (error, root) => {
      if(error){
        return console.error(error)
      }
          const Yaticker = root.lookupType("yaticker");
      
          ws.onopen = function open() {
            console.log('connected');
            ws.send(JSON.stringify({
              subscribe: [ticker]
            }));
          };
      
          ws.onclose = function close() {
            console.log('disconnected');
          };
      
          ws.onmessage = function incoming(message) {
            console.log('comming message')
            setData(Yaticker.decode(new Buffer(message.data, 'base64')))
          };
    });
    }, [])

  return (
    data
  )
}

export default useCoinData