
/* Address: 0x18000126f; Evidence: ev_328d6ccc5d69cd433b31ef723f13e8457a2d5a29cf43c7b714e94feda33c900e */

void FUN_18000126f(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_18000d590(&ImgDelayDescr_1800184e4.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x0001800012e6. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_2,param_3,param_4);
  return;
}

