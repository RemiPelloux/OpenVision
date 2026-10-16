
/* Address: 0x180002052; Evidence: ev_3f7080d07cbca0903a031061f087d7785894da177aac4bb31392bb1fd400c2c4 */

void FUN_180002052(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_XMM0_Qa;
  undefined8 in_XMM1_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_18000e580(&ImgDelayDescr_180019acc.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x0001800020c9. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(in_XMM0_Qa,in_XMM1_Qa,param_3,param_4);
  return;
}

