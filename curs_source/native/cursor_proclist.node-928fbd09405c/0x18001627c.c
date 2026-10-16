
/* Address: 0x18001627c; Evidence: ev_bfa6ac107599048dd441df8e6e96f02433f533729de2d92d743e5a686dce2409 */

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
    iVar1 = DAT_180029d20;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_180029920)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_180029920)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_180029d20 + 0x40;
        DAT_180029d20 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_180010de4();
    *(undefined4 *)p_Var2 = 9;
    FUN_18000f91c();
    lVar3 = 9;
  }
  return lVar3;
}

