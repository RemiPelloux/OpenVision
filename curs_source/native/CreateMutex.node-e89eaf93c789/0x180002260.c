
/* Address: 0x180002260; Evidence: ev_1ea292ea3f5831e59428cdaf634566a500f9d39add41c63490f36bc8bb4d5887 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong * FUN_180002260(ulonglong *param_1,ulonglong param_2,ulonglong param_3)

{
  undefined1 auVar1 [16];
  int iVar2;
  __uint64 _Var3;
  void *pvVar4;
  undefined1 auStack_b8 [32];
  ulonglong *local_98;
  ulonglong *local_90;
  longlong local_88 [10];
  ulonglong local_38;
  
  local_38 = DAT_180022000 ^ (ulonglong)auStack_b8;
  param_1[1] = param_2;
  param_1[2] = param_3;
  local_90 = param_1 + 0xd;
  *param_1 = 6;
  local_98 = param_1 + 3;
  param_1[0xc] = 0;
  *local_90 = 0;
  *local_98 = 0;
  param_1[4] = 6;
  param_1[5] = (ulonglong)(param_1 + 6);
  iVar2 = napi_get_cb_info(param_2,param_3,param_1 + 4);
  if (iVar2 != 0) {
    FUN_1800014c0(local_88,param_1[1]);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_88,&DAT_180020780);
  }
  if (*param_1 < param_1[4]) {
    auVar1._8_8_ = 0;
    auVar1._0_8_ = param_1[4];
    _Var3 = SUB168(ZEXT816(8) * auVar1,0);
    if (SUB168(ZEXT816(8) * auVar1,8) != 0) {
      _Var3 = 0xffffffffffffffff;
    }
    pvVar4 = operator_new(_Var3);
    local_90 = (ulonglong *)0x0;
    param_1[0xc] = (ulonglong)pvVar4;
    param_1[5] = (ulonglong)pvVar4;
    local_98 = (ulonglong *)0x0;
    iVar2 = napi_get_cb_info(param_2,param_3,param_1 + 4,pvVar4);
    if (iVar2 != 0) {
      FUN_1800014c0(local_88,param_1[1]);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_88,&DAT_180020780);
    }
  }
  return param_1;
}

