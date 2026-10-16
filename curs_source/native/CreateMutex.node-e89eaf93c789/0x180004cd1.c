
/* Address: 0x180004cd1; Evidence: ev_c41b796e42defecc18eac8c6c98927b83a2228efcfcebaf76fa120521d3f6c25 */

void FUN_180004cd1(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_RDX;
  undefined8 in_XMM0_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_180013590(&ImgDelayDescr_1800208d4.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x000180004d48. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(in_XMM0_Qa,in_RDX,param_3,param_4);
  return;
}

