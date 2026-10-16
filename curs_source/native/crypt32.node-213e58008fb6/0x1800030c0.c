
/* Address: 0x1800030c0; Evidence: ev_7d066857a5ed26db87ccd58e187f346e98320cb2789d2c4ae3ce847593fbc13a */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 *
FUN_1800030c0(undefined8 *param_1,undefined8 param_2,undefined8 param_3,ulonglong param_4,
             longlong param_5)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  undefined4 uVar6;
  undefined4 uVar7;
  undefined4 uVar8;
  undefined4 uVar9;
  undefined4 uVar10;
  undefined4 uVar11;
  undefined4 uVar12;
  undefined4 uVar13;
  undefined4 uVar14;
  undefined4 uVar15;
  undefined4 uVar16;
  undefined4 uVar17;
  int iVar18;
  undefined1 (*pauVar19) [32];
  longlong lVar20;
  undefined8 uVar21;
  ulonglong uVar22;
  undefined8 *puVar23;
  undefined1 *puVar24;
  undefined1 (*pauVar25) [32];
  undefined8 local_res10;
  undefined1 auStackY_108 [32];
  undefined8 local_c0;
  undefined1 (*pauStack_a8) [32];
  longlong local_98 [10];
  ulonglong local_48;
  
  local_48 = DAT_180021000 ^ (ulonglong)auStackY_108;
  pauStack_a8 = (undefined1 (*) [32])0x0;
  local_res10 = param_2;
  if (param_4 == 0) {
    pauVar19 = (undefined1 (*) [32])0x0;
  }
  else {
    if (0x3ffffffffffffff < param_4) {
      FUN_180004a20();
      goto LAB_18000354f;
    }
    pauVar19 = FUN_1800049a0(param_4 * 0x40);
    pauStack_a8 = pauVar19 + param_4 * 2;
    FUN_180013a30(pauVar19,0,param_4 << 6);
  }
  uVar22 = 0;
  if (param_4 != 0) {
    puVar23 = (undefined8 *)(pauVar19[1] + 8);
    lVar20 = param_5 - (longlong)pauVar19;
    do {
      puVar1 = (undefined4 *)(lVar20 + -0x28 + (longlong)puVar23);
      uVar3 = puVar1[1];
      uVar4 = puVar1[2];
      uVar5 = puVar1[3];
      puVar2 = (undefined4 *)(lVar20 + -0x18 + (longlong)puVar23);
      uVar6 = *puVar2;
      uVar7 = puVar2[1];
      uVar8 = puVar2[2];
      uVar9 = puVar2[3];
      puVar2 = (undefined4 *)(lVar20 + -8 + (longlong)puVar23);
      uVar10 = *puVar2;
      uVar11 = puVar2[1];
      uVar12 = puVar2[2];
      uVar13 = puVar2[3];
      puVar2 = (undefined4 *)(lVar20 + 8 + (longlong)puVar23);
      uVar14 = *puVar2;
      uVar15 = puVar2[1];
      uVar16 = puVar2[2];
      uVar17 = puVar2[3];
      *(undefined4 *)(puVar23 + -5) = *puVar1;
      *(undefined4 *)((longlong)puVar23 + -0x24) = uVar3;
      *(undefined4 *)(puVar23 + -4) = uVar4;
      *(undefined4 *)((longlong)puVar23 + -0x1c) = uVar5;
      *(undefined4 *)(puVar23 + -3) = uVar6;
      *(undefined4 *)((longlong)puVar23 + -0x14) = uVar7;
      *(undefined4 *)(puVar23 + -2) = uVar8;
      *(undefined4 *)((longlong)puVar23 + -0xc) = uVar9;
      *(undefined4 *)(puVar23 + -1) = uVar10;
      *(undefined4 *)((longlong)puVar23 + -4) = uVar11;
      *(undefined4 *)puVar23 = uVar12;
      *(undefined4 *)((longlong)puVar23 + 4) = uVar13;
      *(undefined4 *)(puVar23 + 1) = uVar14;
      *(undefined4 *)((longlong)puVar23 + 0xc) = uVar15;
      *(undefined4 *)(puVar23 + 2) = uVar16;
      *(undefined4 *)((longlong)puVar23 + 0x14) = uVar17;
      if ((code *)puVar23[-3] == FUN_180003c80) {
        uVar21 = puVar23[2];
        iVar18 = napi_create_function(param_2,"Crypt32",0xffffffffffffffff);
        if ((iVar18 != 0) ||
           (iVar18 = napi_add_finalizer(param_2,*puVar23,uVar21,FUN_180003d80), iVar18 != 0)) {
          uVar21 = FUN_180001210(&local_res10);
          FUN_1800014f0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
          FUN_180006d04(local_98,&DAT_18001f750);
        }
LAB_180003271:
        puVar23[2] = 0;
        puVar23[-3] = 0;
      }
      else if ((code *)puVar23[-3] == FUN_180003c50) {
        uVar21 = puVar23[2];
        iVar18 = napi_create_function(param_2,"Crypt32",0xffffffffffffffff);
        if ((iVar18 != 0) ||
           (iVar18 = napi_add_finalizer(param_2,*puVar23,uVar21,FUN_180003d80), iVar18 != 0)) {
          uVar21 = FUN_180001210(&local_res10);
          FUN_1800014f0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
          FUN_180006d04(local_98,&DAT_18001f750);
        }
        goto LAB_180003271;
      }
      uVar22 = uVar22 + 1;
      puVar23 = puVar23 + 8;
    } while (uVar22 < param_4);
  }
  iVar18 = napi_define_class();
  if (iVar18 == 0) {
    uVar22 = 0;
    if (param_4 != 0) {
      puVar24 = pauVar19[1] + 0x18;
      do {
        if ((*(code **)(puVar24 + -0x20) == FUN_180003cb0) ||
           (*(code **)*(undefined1 (*) [32])(puVar24 + -0x18) == FUN_180003ce0)) {
          iVar18 = napi_add_finalizer();
          if (iVar18 != 0) {
            uVar21 = FUN_180001210(&local_res10);
            FUN_1800014f0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
            FUN_180006d04(local_98,&DAT_18001f750);
          }
        }
        else if ((*(uint *)(puVar24 + -8) & 0x400) == 0) {
          if (*(code **)(puVar24 + -0x28) == FUN_180004130) {
            iVar18 = napi_add_finalizer();
            if (iVar18 != 0) {
              FUN_1800014f0(local_98,param_2);
                    /* WARNING: Subroutine does not return */
              FUN_180006d04(local_98,&DAT_18001f750);
            }
          }
          else if (*(code **)(puVar24 + -0x28) == FUN_180004160) {
            iVar18 = napi_add_finalizer();
            if (iVar18 != 0) {
              FUN_1800014f0(local_98,param_2);
                    /* WARNING: Subroutine does not return */
              FUN_180006d04(local_98,&DAT_18001f750);
            }
          }
          else if (((*(code **)(puVar24 + -0x20) == FUN_180004190) ||
                   (*(code **)*(undefined1 (*) [32])(puVar24 + -0x18) == FUN_1800041c0)) &&
                  (iVar18 = napi_add_finalizer(), iVar18 != 0)) {
            FUN_1800014f0(local_98,param_2);
                    /* WARNING: Subroutine does not return */
            FUN_180006d04(local_98,&DAT_18001f750);
          }
        }
        uVar22 = uVar22 + 1;
        puVar24 = puVar24 + 0x40;
      } while (uVar22 < param_4);
    }
    *param_1 = param_2;
    param_1[1] = local_c0;
    if (pauVar19 != (undefined1 (*) [32])0x0) {
      pauVar25 = pauVar19;
      if ((0xfff < ((longlong)pauStack_a8 - (longlong)pauVar19 & 0xffffffffffffffc0U)) &&
         (pauVar25 = *(undefined1 (**) [32])(pauVar19[-1] + 0x18),
         0x1f < (ulonglong)((longlong)pauVar19 + (-8 - (longlong)pauVar25)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_18000c960(pauVar25);
    }
    return param_1;
  }
LAB_18000354f:
  uVar21 = FUN_180001210(&local_res10);
  FUN_1800014f0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
  FUN_180006d04(local_98,&DAT_18001f750);
}

