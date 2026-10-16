
/* Address: 0x180012b8c; Evidence: ev_56167c804a7347baaf5dca96d5f67b6e7d83fa30bf79dc569fb007c412594dab */

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
    iVar1 = DAT_180024bf0;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_1800247f0)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_1800247f0)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_180024bf0 + 0x40;
        DAT_180024bf0 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_18000d6a4();
    *(undefined4 *)p_Var2 = 9;
    FUN_18000c3ec();
    lVar3 = 9;
  }
  return lVar3;
}

