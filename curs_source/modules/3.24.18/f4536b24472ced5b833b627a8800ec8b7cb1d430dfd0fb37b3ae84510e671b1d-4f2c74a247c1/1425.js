function zl(e,t){const r=e.getValue("willChange");if(E5(r))return r.add(t);if(!r&&gn.WillChange){const n=new gn.WillChange("auto");e.addValue("willChange",n),n.add(t)}}
