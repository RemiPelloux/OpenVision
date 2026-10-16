
/* Address: 0x18000605b; Evidence: ev_661ff678e70778b9754830742a663b15ad044b7f0cf68da76ff809b0a8ff9322 */

void FUN_18000605b(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_RCX;
  undefined8 in_XMM1_Qa;
  undefined8 in_XMM2_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_180014980(&ImgDelayDescr_180021db4.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x0001800060d2. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(in_RCX,in_XMM1_Qa,in_XMM2_Qa,param_4);
  return;
}

