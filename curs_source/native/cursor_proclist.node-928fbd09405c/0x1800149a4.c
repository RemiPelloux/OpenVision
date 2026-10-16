
/* Address: 0x1800149a4; Evidence: ev_a98eefa370a66ebfdd394988e70c31827baf6c53862f71407f21a7ab7806cd90 */

undefined4 FUN_1800149a4(longlong param_1)

{
  undefined4 uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 == 0) {
    p_Var2 = FUN_180010de4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000f91c();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}

