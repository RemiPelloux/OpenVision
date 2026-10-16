
/* Address: 0x1800078a0; Evidence: ev_ead51b7cc8dde2a038eb5370e8f1ae10d893fac7cb9d5d506313f5e712366a7f */

ulonglong FUN_1800078a0(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_18001c3c8 = FUN_180009d20();
  DAT_18001b098 = FlsAlloc(FUN_1800074c0);
  uVar2 = CONCAT44(extraout_var,DAT_18001b098);
  if (DAT_18001b098 != 0xffffffff) {
    p_Var3 = FUN_1800077a8();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_1800078f0();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}

