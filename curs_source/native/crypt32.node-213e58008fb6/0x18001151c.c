
/* Address: 0x18001151c; Evidence: ev_f0c873f9806158a92bbc0aa905d95ba680f0422614141282b6ce3bb60ae2e206 */

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
    iVar1 = DAT_180022bf0;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_1800227f0)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_1800227f0)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_180022bf0 + 0x40;
        DAT_180022bf0 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_18000c034();
    *(undefined4 *)p_Var2 = 9;
    FUN_18000ad7c();
    lVar3 = 9;
  }
  return lVar3;
}

