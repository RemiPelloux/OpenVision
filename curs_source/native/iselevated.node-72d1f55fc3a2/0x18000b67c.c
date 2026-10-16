
/* Address: 0x18000b67c; Evidence: ev_208090a2998e8af5c8b072fb07a6d2b9c43d06c3c59a1ec093eb792e5a8bcf7f */

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
    iVar1 = DAT_18001aa80;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_18001a680)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_18001a680)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_18001aa80 + 0x40;
        DAT_18001aa80 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 9;
    FUN_180005ed8();
    lVar3 = 9;
  }
  return lVar3;
}

