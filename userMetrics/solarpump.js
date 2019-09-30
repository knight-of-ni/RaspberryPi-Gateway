exports.metrics = {
  //Solar Pump Mote
  running : { name:'PUMP', regexp:/PUMP\:(RUNNING)/i, value:'', pin:1, graph:1, logValue:1},
  off : { name:'PUMP', regexp:/PUMP\:(OFF)/i, value:'', pin:1, graph:1, logValue:0},
  stopped : { name:'PUMP', regexp:/PUMP\:(STOPPED)/i, value:'', pin:1, graph:1, logValue:0},
  normal : { name:'STATUS', regexp:/STATUS\:(NORMAL)/i, value:'', graph:1, logValue:0},
  trouble : { name:'STATUS', regexp:/STATUS\:(TROUBLE)/i, value:'', graph:1, logValue:1},
  day : { name:'MODE', regexp:/MODE\:(DAY)/i, value:'', graph:1, logValue:1},
  night : { name:'MODE', regexp:/MODE\:(NIGHT)/i, value:'', graph:1, logValue:0},
  schedule : { name:'SCHEDULE', regexp:/SCHED\:([\d\.]+)/i, value:'', unit:'hrs', },
  duration : { name:'DURATION', regexp:/DUR\:([\d\.]+)/i, value:'', unit:'min', },
}

exports.motes = {
  SolarPumpMote: {
    label   : 'Solar Pump Controller',
    icon : 'icon_solar_pump.png',
    settings : { lowVoltageValue: '11.2' },
    controls : { power : { states: [{ label:'On', action:'PWR', icon:'power', css:'background-color:#9BFFBE;', condition:''+function(node) { return node.metrics['PUMP']!=null && node.metrics['PUMP'].value == 'OFF';}},
                                    { label:'Off', action:'PWR', icon:'power', css:'background-color:#FF9B9B;', condition:''+function(node) { return node.metrics['PUMP']!=null && node.metrics['PUMP'].value != 'OFF';}}
                                   ]},
                 refresh : { states: [{ label:'Refresh', action:'STS', icon:'refresh' }]}, 
                 run : { states: [{ label:'Run', action:'RUN', icon:'arrow-u', css:'background-color:#9BFFBE;'}]},
                 stop : { states:[{ label:'Stop', action:'STP', icon:'arrow-d', css:'background-color:#FF9B9B;'}]},
                 up1 : { states: [{ label:'Schedule', action:'UP1', icon:'arrow-u' }]},
                 down1 : { states: [{ label:'Schedule', action:'DN1', icon:'arrow-d' }]},
                 up5 : { states: [{ label:'Duration', action:'UP5', icon:'arrow-u' }]},
                 down5 : { states: [{ label:'Duration', action:'DN5', icon:'arrow-d' }]},
               },
   },
}
