
/* Address: 0x18000e368; Evidence: ev_ee588f74a8ff0ca23320a4ef6883cbcc81b2ed8e149cdeb58a47040cf41a6d35 */

void FUN_18000e368(uint param_1,ulonglong param_2)

{
  bool bVar1;
  
  if (param_1 < 0xdead) {
    if (param_1 != 0xdeac) {
      if (param_1 < 0xc434) {
        if ((((param_1 != 0xc433) && (param_1 != 0x2a)) && (param_1 != 0xc42c)) &&
           ((param_1 != 0xc42d && (param_1 != 0xc42e)))) {
          bVar1 = param_1 == 0xc431;
LAB_18000e3b5:
          if (!bVar1) goto LAB_18000e3b9;
        }
      }
      else if (param_1 != 0xc435) {
        if (param_1 == 0xd698) goto LAB_18000e3f3;
        if (param_1 != 0xdeaa) {
          bVar1 = param_1 == 0xdeab;
          goto LAB_18000e3b5;
        }
      }
    }
  }
  else if ((((param_1 != 0xdead) && (param_1 != 0xdeae)) && (param_1 != 0xdeaf)) &&
          (((param_1 != 0xdeb0 && (param_1 != 0xdeb1)) &&
           ((param_1 != 0xdeb2 && ((param_1 != 0xdeb3 && (param_1 != 65000)))))))) {
    if (param_1 != 0xfde9) goto LAB_18000e3b9;
LAB_18000e3f3:
    param_2 = (ulonglong)((uint)param_2 & 8);
    goto LAB_18000e3b9;
  }
  param_2 = 0;
LAB_18000e3b9:
                    /* WARNING: Could not recover jumptable at 0x00018000e3b9. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  MultiByteToWideChar(param_1,param_2);
  return;
}

