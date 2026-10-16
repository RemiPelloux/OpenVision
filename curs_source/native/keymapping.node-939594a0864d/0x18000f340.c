
/* Address: 0x18000f340; Evidence: ev_64f134aa8498ac15ebb5a5a74e96725376ec57532be7c82c6f49d3ec6d8be5a1 */

ulonglong thunk_FUN_18000ec20(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  __acrt_ptd *p_Var2;
  ulonglong uVar3;
  byte *pbVar4;
  LPVOID pvVar5;
  longlong lVar6;
  longlong *plVar7;
  longlong *plVar8;
  char *pcVar9;
  ulonglong uVar10;
  longlong *plVar11;
  longlong lVar12;
  longlong lStackX_10;
  ulonglong uStackX_18;
  char *pcStackX_20;
  longlong *plStack_58;
  longlong *plStack_50;
  undefined8 uStack_48;
  
  if (param_2 == (undefined8 *)0x0) {
    p_Var2 = FUN_18000b774();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000821c();
    uVar3 = 0x16;
  }
  else {
    *param_2 = 0;
    pbVar4 = (byte *)*param_1;
    plStack_58 = (longlong *)0x0;
    plStack_50 = (longlong *)0x0;
    uStack_48 = 0;
    while (plVar7 = plStack_50, plVar8 = plStack_58, pbVar4 != (byte *)0x0) {
      lStackX_10 = CONCAT53(lStackX_10._3_5_,0x3f2a);
      pbVar4 = FUN_180014770(pbVar4,(byte *)&lStackX_10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000ee5c((longlong)*param_1,0,0,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_18000bff0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000ed6f;
        }
      }
      else {
        uVar10 = FUN_18000efe0((uchar *)*param_1,pbVar4,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_18000bff0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000ed6f;
        }
      }
      param_1 = param_1 + 1;
      pbVar4 = (byte *)*param_1;
    }
    uVar10 = ((longlong)plStack_50 - (longlong)plStack_58 >> 3) + 1;
    uStackX_18 = 0;
    for (plVar11 = plStack_58; plVar11 != plStack_50; plVar11 = plVar11 + 1) {
      lVar6 = -1;
      do {
        lVar6 = lVar6 + 1;
      } while (*(char *)(*plVar11 + lVar6) != '\0');
      uStackX_18 = uStackX_18 + 1 + lVar6;
    }
    pvVar5 = __acrt_allocate_buffer_for_argv(uVar10,uStackX_18,1);
    if (pvVar5 == (LPVOID)0x0) {
      FUN_18000bff0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000bff0((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_18000ed6f:
      FUN_18000bff0(plVar8);
    }
    else {
      pcVar9 = (char *)((longlong)pvVar5 + uVar10 * 8);
      pcStackX_20 = pcVar9;
      if (plVar8 != plVar7) {
        lStackX_10 = (longlong)pvVar5 - (longlong)plVar8;
        plVar11 = plVar8;
        do {
          lVar6 = -1;
          do {
            lVar12 = lVar6;
            lVar6 = lVar12 + 1;
          } while (*(char *)(*plVar11 + lVar6) != '\0');
          lVar12 = lVar12 + 2;
          iVar1 = FUN_1800145a0(pcVar9,(longlong)(pcStackX_20 + (uStackX_18 - (longlong)pcVar9)),
                                *plVar11,lVar12);
          if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
            _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
          }
          *(char **)(lStackX_10 + (longlong)plVar11) = pcVar9;
          pcVar9 = pcVar9 + lVar12;
          plVar11 = plVar11 + 1;
        } while (plVar11 != plVar7);
      }
      *param_2 = pvVar5;
      FUN_18000bff0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000bff0((LPVOID)*plVar11);
      }
      FUN_18000bff0(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}

