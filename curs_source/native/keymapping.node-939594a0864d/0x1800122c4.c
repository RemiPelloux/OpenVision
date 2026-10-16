
/* Address: 0x1800122c4; Evidence: ev_fe62e09c4835c60b2505d5fc2e8549902e1e3a0641f7261a6e0f36faa1256b76 */

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
    iVar1 = DAT_180028920;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_180028520)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_180028520)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_180028920 + 0x40;
        DAT_180028920 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_18000b774();
    *(undefined4 *)p_Var2 = 9;
    FUN_18000821c();
    lVar3 = 9;
  }
  return lVar3;
}

