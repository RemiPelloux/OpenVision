
/* Address: 0x18000aeb4; Evidence: ev_aeab362c048a2b48a4bf86b6a3f918a2ab731461818ab8ece9138cec6bfa0896 */

undefined4 FUN_18000aeb4(longlong param_1)

{
  undefined4 uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 == 0) {
    p_Var2 = FUN_1800072a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_180005fec();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}

