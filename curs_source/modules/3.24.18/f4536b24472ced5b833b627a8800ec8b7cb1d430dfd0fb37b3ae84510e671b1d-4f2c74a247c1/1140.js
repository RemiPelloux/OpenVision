function VC(e){return e===null||!e.enabled?null:e.threshold.unitMicros>=e.amount.unitMicros?{code:"THRESHOLD_NOT_BELOW_AMOUNT"}:null}
