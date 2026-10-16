
/* Address: 0x18000fec4; Evidence: ev_440a78e8a96280993f8356c9a933560e4ab22eebe9e2e2d0c7f850717791f2b7 */

undefined4 FUN_18000fec4(longlong param_1)

{
  undefined4 uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 == 0) {
    p_Var2 = FUN_18000c2b4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000affc();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}

