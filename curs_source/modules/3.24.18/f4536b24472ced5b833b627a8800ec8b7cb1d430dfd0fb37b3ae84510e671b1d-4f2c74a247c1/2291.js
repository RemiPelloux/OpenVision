function p_(e,t){if(e>>>0<128){t.push(e);return}if(e>=0){for(;e>127;)t.push(e&127|128),e=e>>>7;t.push(e)}else{for(let r=0;r<9;r++)t.push(e&127|128),e=e>>7;t.push(1)}}
