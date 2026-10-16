
/* Address: 0x18000b94c; Evidence: ev_77e9ad590d73149235cc4bf884d4e8e2ca90cec99c2cdc4ffc02d874286da924 */

/* Library Function - Single Match
    __acrt_lowio_ensure_fh_exists
   
   Library: Visual Studio 2019 Release */

longlong __acrt_lowio_ensure_fh_exists(uint param_1)

{
  int iVar1;
  __acrt_ptd *p_Var2;
  longlong lVar3;
  undefined8 *puVar4;
  longlong lVar5;
  
  if (param_1 < 0x2000) {
    lVar3 = 0;
    __acrt_lock(7);
    lVar5 = lVar3;
    iVar1 = DAT_18001ba80;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_18001b680)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_18001b680)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_18001ba80 + 0x40;
        DAT_18001ba80 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_180006350();
    *(undefined4 *)p_Var2 = 9;
    FUN_1800061a8();
    lVar3 = 9;
  }
  return lVar3;
}

