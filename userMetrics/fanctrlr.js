exports.metrics = {
  //PWM Fan Controller
  duty : { name:'Duty', regexp:/\bDTY\:(\d+)\b/i, value:'', unit:'%', pin:1, graph:1},
  lotemp : { name:'HiTemp', regexp:/\bHIT\:(\d+)\b/i, value:'', unit:'°', pin:0, graph:1, graphValSuffix:'F', graphOptions:{ legendLbl:'Temperature', lines: { lineWidth:1 } }},
  hitemp : { name:'LoTemp', regexp:/\bLOT\:(\d+)\b/i, value:'', unit:'°', pin:0, graph:1, graphValSuffix:'F', graphOptions:{ legendLbl:'Temperature', lines: { lineWidth:1 } }},
}

exports.motes = {
  FanController: {
    label   : 'Fan Controller',
    icon : 'icon_fan_controller.png',
    settings : { lowVoltageValue: '11.2' },
    controls : { refresh : { states: [{ label:'Refresh', action:'STS', icon:'refresh' }]}, 
                 upl : { states: [{ label:'LoTemp', action:'UPL', icon:'arrow-u' }]},
                 downl : { states: [{ label:'LoTemp', action:'DNL', icon:'arrow-d' }]},
                 uph : { states: [{ label:'HiTemp', action:'UPH', icon:'arrow-u' }]},
                 downh : { states: [{ label:'HiTemp', action:'DNH', icon:'arrow-d' }]},
               },
   },
}
