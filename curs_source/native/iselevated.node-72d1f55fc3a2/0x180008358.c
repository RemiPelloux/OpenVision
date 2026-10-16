
/* Address: 0x180008358; Evidence: ev_0bcabcebe06d65ec3f05bd71181c52ac82bb3f0eef5ec2a210f5c51ef3b64dc9 */

void FUN_180008358(uint param_1,ulonglong param_2)

{
  bool bVar1;
  
  if (param_1 < 0xdead) {
    if (param_1 != 0xdeac) {
      if (param_1 < 0xc434) {
        if ((((param_1 != 0xc433) && (param_1 != 0x2a)) && (param_1 != 0xc42c)) &&
           ((param_1 != 0xc42d && (param_1 != 0xc42e)))) {
          bVar1 = param_1 == 0xc431;
LAB_1800083a5:
          if (!bVar1) goto LAB_1800083a9;
        }
      }
      else if (param_1 != 0xc435) {
        if (param_1 == 0xd698) goto LAB_1800083e3;
        if (param_1 != 0xdeaa) {
          bVar1 = param_1 == 0xdeab;
          goto LAB_1800083a5;
        }
      }
    }
  }
  else if ((((param_1 != 0xdead) && (param_1 != 0xdeae)) && (param_1 != 0xdeaf)) &&
          (((param_1 != 0xdeb0 && (param_1 != 0xdeb1)) &&
           ((param_1 != 0xdeb2 && ((param_1 != 0xdeb3 && (param_1 != 65000)))))))) {
    if (param_1 != 0xfde9) goto LAB_1800083a9;
LAB_1800083e3:
    param_2 = (ulonglong)((uint)param_2 & 8);
    goto LAB_1800083a9;
  }
  param_2 = 0;
LAB_1800083a9:
                    /* WARNING: Could not recover jumptable at 0x0001800083a9. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  MultiByteToWideChar(param_1,param_2);
  return;
}

