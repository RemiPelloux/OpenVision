
/* Address: 0x18000e5e8; Evidence: ev_69778f5cd1b02403827a23544f66bab08111d23c69dfa81035a6aa8ddc5b28f2 */

void FUN_18000e5e8(uint param_1,ulonglong param_2)

{
  bool bVar1;
  
  if (param_1 < 0xdead) {
    if (param_1 != 0xdeac) {
      if (param_1 < 0xc434) {
        if ((((param_1 != 0xc433) && (param_1 != 0x2a)) && (param_1 != 0xc42c)) &&
           ((param_1 != 0xc42d && (param_1 != 0xc42e)))) {
          bVar1 = param_1 == 0xc431;
LAB_18000e635:
          if (!bVar1) goto LAB_18000e639;
        }
      }
      else if (param_1 != 0xc435) {
        if (param_1 == 0xd698) goto LAB_18000e673;
        if (param_1 != 0xdeaa) {
          bVar1 = param_1 == 0xdeab;
          goto LAB_18000e635;
        }
      }
    }
  }
  else if ((((param_1 != 0xdead) && (param_1 != 0xdeae)) && (param_1 != 0xdeaf)) &&
          (((param_1 != 0xdeb0 && (param_1 != 0xdeb1)) &&
           ((param_1 != 0xdeb2 && ((param_1 != 0xdeb3 && (param_1 != 65000)))))))) {
    if (param_1 != 0xfde9) goto LAB_18000e639;
LAB_18000e673:
    param_2 = (ulonglong)((uint)param_2 & 8);
    goto LAB_18000e639;
  }
  param_2 = 0;
LAB_18000e639:
                    /* WARNING: Could not recover jumptable at 0x00018000e639. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  MultiByteToWideChar(param_1,param_2);
  return;
}

