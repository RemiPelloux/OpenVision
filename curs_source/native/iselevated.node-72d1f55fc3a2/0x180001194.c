
/* Address: 0x180001194; Evidence: ev_28589c0f1830cec79fbfd3a8c69570d8625e863fba946a71dbd42faeb8e94c0b */

void FUN_180001194(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_XMM3_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_18000d470(&ImgDelayDescr_18001846c.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x00018000120b. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_2,param_3,in_XMM3_Qa);
  return;
}

