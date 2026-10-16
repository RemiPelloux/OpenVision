
/* Address: 0x1800112b4; Evidence: ev_f4b652b30c2f85df74674b4a914a30b50d96303e78de947efc148cf6563e9111 */

undefined4 FUN_1800112b4(longlong param_1)

{
  undefined4 uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 == 0) {
    p_Var2 = FUN_18000d6a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000c3ec();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}

