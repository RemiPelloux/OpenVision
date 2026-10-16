
/* Address: 0x180004a31; Evidence: ev_42b429fe53147aecdf69435a580abae71bbc57ce5294ba5e2add704fa5597f6a */

void FUN_180004a31(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_RCX;
  undefined8 in_R8;
  undefined8 in_XMM3_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_180013310(&ImgDelayDescr_18001f854.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x000180004aa8. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(in_RCX,param_2,in_R8,in_XMM3_Qa);
  return;
}

