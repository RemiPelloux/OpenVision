
/* Address: 0x180006250; Evidence: ev_5a34c6a8064f4515a6314fcc44ac9368637802c4003f7b9a37de56a72988d0c1 */

undefined4 * FUN_180006250(longlong *param_1,undefined4 *param_2,undefined4 *param_3)

{
  ulonglong uVar1;
  ulonglong uVar2;
  longlong lVar3;
  longlong lVar4;
  undefined4 *puVar5;
  void *pvVar6;
  __uint64 _Var7;
  undefined4 *puVar8;
  undefined4 *puVar9;
  undefined4 *puVar10;
  undefined4 *puVar11;
  ulonglong uVar12;
  
  lVar3 = *param_1;
  lVar4 = (param_1[1] - lVar3) / 0xb0;
  if (lVar4 == 0x1745d1745d1745d) {
                    /* WARNING: Subroutine does not return */
    FUN_180005fd0();
  }
  uVar1 = lVar4 + 1;
  uVar2 = (param_1[2] - lVar3) / 0xb0;
  if (uVar2 <= 0x1745d1745d1745d - (uVar2 >> 1)) {
    uVar2 = (uVar2 >> 1) + uVar2;
    uVar12 = uVar1;
    if (uVar1 <= uVar2) {
      uVar12 = uVar2;
    }
    if (uVar12 < 0x1745d1745d1745e) {
      _Var7 = uVar12 * 0xb0;
      if (_Var7 == 0) {
        puVar8 = (undefined4 *)0x0;
      }
      else if (_Var7 < 0x1000) {
        puVar8 = operator_new(_Var7);
      }
      else {
        if (_Var7 + 0x27 <= _Var7) goto LAB_180006457;
        pvVar6 = operator_new(_Var7 + 0x27);
        if (pvVar6 == (void *)0x0) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        puVar8 = (undefined4 *)((longlong)pvVar6 + 0x27U & 0xffffffffffffffe0);
        *(void **)(puVar8 + -2) = pvVar6;
      }
      puVar11 = puVar8 + (((longlong)param_2 - lVar3) / 0xb0) * 0x2c;
      FUN_180006d40(puVar11,param_3);
      puVar10 = (undefined4 *)param_1[1];
      puVar9 = (undefined4 *)*param_1;
      puVar5 = puVar8;
      if (param_2 == puVar10) {
        for (; puVar9 != puVar10; puVar9 = puVar9 + 0x2c) {
          FUN_180006d40(puVar5,puVar9);
          puVar5 = puVar5 + 0x2c;
        }
      }
      else {
        for (; puVar9 != param_2; puVar9 = puVar9 + 0x2c) {
          FUN_180006d40(puVar5,puVar9);
          puVar5 = puVar5 + 0x2c;
        }
        puVar10 = (undefined4 *)param_1[1];
        puVar9 = puVar11;
        if (param_2 != puVar10) {
          do {
            FUN_180006d40(puVar9 + 0x2c,param_2);
            param_2 = param_2 + 0x2c;
            puVar9 = puVar9 + 0x2c;
          } while (param_2 != puVar10);
        }
      }
      FUN_1800069f0(param_1,(longlong)puVar8,uVar1,uVar12);
      return puVar11;
    }
  }
LAB_180006457:
                    /* WARNING: Subroutine does not return */
  FUN_180001250();
}

