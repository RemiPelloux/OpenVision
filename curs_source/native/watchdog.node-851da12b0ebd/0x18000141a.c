
/* Address: 0x18000141a; Evidence: ev_939c2c101d8a484a57fc2750a2ddb283b366ed71837f34b1cf0fb7fd1f9a9b59 */

void FUN_18000141a(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_RDX;
  undefined8 in_XMM0_Qa;
  undefined8 in_XMM3_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_18000d740(&ImgDelayDescr_180018564.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x000180001491. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(in_XMM0_Qa,in_RDX,param_3,in_XMM3_Qa);
  return;
}

