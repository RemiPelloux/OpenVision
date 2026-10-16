
/* Address: 0x180008508; Evidence: ev_29d37bd91da3f20bf6ca298d19af71601001f3866d5fbaafc170812ae15540ab */

void FUN_180008508(uint param_1,uint param_2,undefined8 param_3,undefined4 param_4)

{
  int iVar1;
  uint uVar2;
  bool bVar3;
  undefined4 *in_stack_00000040;
  
  uVar2 = 0;
  if (param_1 < 0xdead) {
    if (param_1 == 0xdeac) goto LAB_1800085a8;
    if (0xc433 < param_1) {
      if ((param_1 == 0xc435) || (param_1 == 0xd698)) goto LAB_1800085a8;
      iVar1 = param_1 - 0xdeaa;
      goto LAB_180008599;
    }
    if ((((param_1 == 0xc433) || (param_1 == 0x2a)) || (param_1 == 0xc42c)) ||
       ((param_1 == 0xc42d || (param_1 == 0xc42e)))) goto LAB_1800085a8;
    bVar3 = param_1 == 0xc431;
  }
  else {
    if (((((param_1 == 0xdead) || (param_1 == 0xdeae)) || (param_1 == 0xdeaf)) ||
        ((param_1 == 0xdeb0 || (param_1 == 0xdeb1)))) ||
       ((param_1 == 0xdeb2 || (param_1 == 0xdeb3)))) goto LAB_1800085a8;
    iVar1 = param_1 - 65000;
LAB_180008599:
    if (iVar1 == 0) goto LAB_1800085a8;
    bVar3 = iVar1 == 1;
  }
  if (!bVar3) {
    uVar2 = param_2 & 0xffffff7f;
  }
LAB_1800085a8:
  if ((param_1 - 65000 < 2) && (in_stack_00000040 != (undefined4 *)0x0)) {
    *in_stack_00000040 = 0;
  }
                    /* WARNING: Could not recover jumptable at 0x0001800085df. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  WideCharToMultiByte(param_1,uVar2,param_3,param_4);
  return;
}

