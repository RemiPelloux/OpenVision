
/* Address: 0x180001180; Evidence: ev_59749317bacf38ce96cdb975392fe06d929defb835bcc355701120373e4ce12d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined1 (*) [32]
FUN_180001180(undefined1 (*param_1) [32],undefined1 (*param_2) [32],uint param_3)

{
  code *pcVar1;
  undefined1 auVar2 [16];
  __uint64 _Var3;
  undefined1 (*pauVar4) [32];
  longlong lVar5;
  undefined2 *puVar6;
  int iVar7;
  longlong lVar8;
  undefined1 auStack_78 [32];
  undefined1 local_58 [32];
  ulonglong local_38;
  
  local_38 = DAT_180027000 ^ (ulonglong)auStack_78;
  lVar8 = (longlong)(int)param_3;
  if ((int)param_3 < 10) {
    iVar7 = 0;
    if (((0 < (int)param_3) && (7 < param_3)) &&
       ((param_2[-1] + lVar8 * 2 + 0x1e < &DAT_180028c88 ||
        ((undefined1 (*) [32])(&DAT_180028c86 + lVar8 * 2) < param_2)))) {
      FUN_180017e30((undefined1 (*) [32])&DAT_180028c88,param_2,lVar8 * 2);
      do {
        iVar7 = iVar7 + 1;
      } while (iVar7 < (int)param_3);
    }
    for (lVar5 = (longlong)iVar7; lVar5 < lVar8; lVar5 = lVar5 + 1) {
      *(undefined2 *)(&DAT_180028c88 + lVar5 * 2) = *(undefined2 *)(*param_2 + lVar5 * 2);
    }
    if (0x13 < (ulonglong)(lVar8 * 2)) {
      FUN_180004374();
      pcVar1 = (code *)swi(3);
      pauVar4 = (undefined1 (*) [32])(*pcVar1)();
      return pauVar4;
    }
    *(undefined2 *)(&DAT_180028c88 + lVar8 * 2) = 0;
    FUN_180001320(param_1,(ushort *)&DAT_180028c88);
  }
  else {
    auVar2._8_8_ = 0;
    auVar2._0_8_ = (longlong)(int)(param_3 + 1);
    _Var3 = SUB168(ZEXT816(2) * auVar2,0);
    if (SUB168(ZEXT816(2) * auVar2,8) != 0) {
      _Var3 = 0xffffffffffffffff;
    }
    pauVar4 = operator_new(_Var3);
    iVar7 = 0;
    if ((7 < param_3) &&
       (((undefined1 (*) [32])(param_2[-1] + lVar8 * 2 + 0x1e) < pauVar4 ||
        ((undefined1 (*) [32])(pauVar4[-1] + lVar8 * 2 + 0x1e) < param_2)))) {
      FUN_180017e30(pauVar4,param_2,lVar8 * 2);
      do {
        iVar7 = iVar7 + 1;
      } while (iVar7 < (int)param_3);
    }
    lVar5 = (longlong)iVar7;
    if (lVar5 < lVar8) {
      puVar6 = (undefined2 *)(*pauVar4 + lVar5 * 2);
      lVar5 = lVar8 - lVar5;
      do {
        *puVar6 = *(undefined2 *)(((longlong)param_2 - (longlong)pauVar4) + (longlong)puVar6);
        puVar6 = puVar6 + 1;
        lVar5 = lVar5 + -1;
      } while (lVar5 != 0);
    }
    *(undefined2 *)(*pauVar4 + lVar8 * 2) = 0;
    FUN_180001320(&local_58,(ushort *)pauVar4);
    thunk_FUN_18000bff0(pauVar4);
    *(undefined8 *)*param_1 = local_58._0_8_;
    *(undefined8 *)(*param_1 + 8) = local_58._8_8_;
    *(undefined8 *)(*param_1 + 0x10) = local_58._16_8_;
    *(undefined8 *)(*param_1 + 0x18) = local_58._24_8_;
  }
  return param_1;
}

