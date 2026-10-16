
/* Address: 0x1800040d2; Evidence: ev_fa6171778138c57f3e52d89df83e4807c0a1e23957a9db74c3878988c2aab109 */

void FUN_1800040d2(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_XMM0_Qa;
  undefined8 in_XMM2_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_180017330(&ImgDelayDescr_18002611c.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x000180004149. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(in_XMM0_Qa,param_2,in_XMM2_Qa,param_4);
  return;
}

