
/* Address: 0x18000a070; Evidence: ev_8a452fe975972a70f3fc806b80ea23a3752c2b987ecef6661d45c5af933b3fba */

undefined4 FUN_18000a070(longlong param_1)

{
  undefined4 uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 == 0) {
    p_Var2 = FUN_180006350();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_1800061a8();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}

