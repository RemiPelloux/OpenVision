
/* Address: 0x18000c78c; Evidence: ev_ccb347fee9692e0860679e3eada21fb73d2559e684da9f428ede6ea488809f39 */

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
    iVar1 = DAT_18001cb50;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_18001c750)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_18001c750)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_18001cb50 + 0x40;
        DAT_18001cb50 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_1800072a4();
    *(undefined4 *)p_Var2 = 9;
    FUN_180005fec();
    lVar3 = 9;
  }
  return lVar3;
}

