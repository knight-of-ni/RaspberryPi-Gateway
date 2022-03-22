exports.metrics = {
  //Solar Power Supply
  POWER_ON : { name:'POWER', regexp:/POWER\:ON/i, value:'ON', pin:1, graph:1, logValue:1},
  POWER_OFF : { name:'POWER', regexp:/POWER\:OFF/i, value:'OFF', pin:1, graph:1, logValue:0},
}

exports.motes = {
  SolarPSMote: {
    label   : 'Solar Power Supply',
    icon : '3rdparty/icon_solarpanel.png',
    settings : { lowVoltageValue: '3.55' },
   },
}

