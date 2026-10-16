
/* Address: 0x18000942f; Evidence: ev_932ddf330098d7fe0dc15cc2a3adaf5fbd400028502d2e0061679fc2d5e602c9 */

void FUN_18000942f(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_R9;
  
  UNRECOVERED_JUMPTABLE = FUN_180018074(&ImgDelayDescr_180025fbc.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x0001800094a6. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_2,param_3,in_R9);
  return;
}

