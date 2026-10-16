
/* Address: 0x18000fc44; Evidence: ev_8196e16fcf9830b29e044a8049fdbb12066b1eec300879241f9a816311b29ee6 */

undefined4 FUN_18000fc44(longlong param_1)

{
  undefined4 uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 == 0) {
    p_Var2 = FUN_18000c034();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000ad7c();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}

