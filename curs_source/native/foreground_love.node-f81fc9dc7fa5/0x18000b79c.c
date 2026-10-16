
/* Address: 0x18000b79c; Evidence: ev_3eb232e2b7f43a7fcba1f35fac63bd2cef884a3a9e0e4e8c50f479b1f1e27d55 */

/* Library Function - Single Match
    __acrt_lowio_ensure_fh_exists
   
   Library: Visual Studio 2019 Release */

longlong __acrt_lowio_ensure_fh_exists(uint param_1)

{
  int iVar1;
  undefined4 *puVar2;
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
    puVar2 = (undefined4 *)FUN_1800061a0();
    *puVar2 = 9;
    FUN_180005ff8();
    lVar3 = 9;
  }
  return lVar3;
}

