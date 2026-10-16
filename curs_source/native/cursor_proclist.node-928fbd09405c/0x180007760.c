
/* Address: 0x180007760; Evidence: ev_710e75372737e4f207ba9d38c7349d0c5edd23f806a9980ffc9abaadb47f54d2 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

longlong * FUN_180007760(longlong *param_1,undefined8 *param_2,undefined1 param_3)

{
  uint uVar1;
  uint uVar2;
  int iVar3;
  undefined8 *puVar4;
  int *piVar5;
  longlong lVar6;
  int *piVar7;
  longlong *plVar8;
  longlong lVar9;
  longlong lVar10;
  ulonglong uVar11;
  int *piVar12;
  ulonglong uVar13;
  int *piVar14;
  int local_res18 [2];
  undefined4 local_res20;
  int *local_c8;
  int *piStack_c0;
  int *local_b8;
  int *local_b0;
  int *local_a8;
  undefined8 local_a0;
  char local_98;
  undefined8 local_90;
  char local_88;
  float local_78 [16];
  
  local_res18[0] = CONCAT31(local_res18[0]._1_3_,param_3);
  local_res20 = 1;
  FUN_180007400();
  *param_1 = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  local_res20 = 1;
  puVar4 = operator_new(0x200);
  FUN_180018c60(puVar4,(undefined8 *)*param_1,param_1[1] - *param_1);
  FUN_180006ca0(param_1,(longlong)puVar4,0,0x80);
  if (DAT_180029dd0 != '\0') {
    FUN_180005400(local_78);
    piVar12 = (int *)*param_2;
    piVar14 = (int *)param_2[1];
    local_b0 = piVar12;
    local_a8 = piVar14;
    if (piVar12 != piVar14) {
      do {
        local_res18[0] = *piVar12;
        if ((local_res18[0] != 0) &&
           (local_b0 = piVar12, FUN_180005b40(local_78,&local_a0,(byte *)local_res18),
           iVar3 = local_res18[0], local_98 != '\0')) {
          piVar5 = (int *)param_1[1];
          if (piVar5 == (int *)param_1[2]) {
            FUN_180006470(param_1,(undefined8 *)piVar5,local_res18);
          }
          else {
            *piVar5 = local_res18[0];
            param_1[1] = param_1[1] + 4;
          }
          uVar13 = 1;
          local_c8 = (int *)0x0;
          piStack_c0 = (int *)0x0;
          local_b8 = (int *)0x0;
          piVar5 = operator_new(0x200);
          FUN_180018c60((undefined8 *)piVar5,(undefined8 *)local_c8,
                        (longlong)piStack_c0 - (longlong)local_c8);
          if (local_c8 != (int *)0x0) {
            piVar7 = local_c8;
            if ((0xfff < ((longlong)local_b8 - (longlong)local_c8 & 0xfffffffffffffffcU)) &&
               (piVar7 = *(int **)(local_c8 + -2),
               0x1f < (ulonglong)((longlong)local_c8 + (-8 - (longlong)piVar7)))) {
                    /* WARNING: Subroutine does not return */
              _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
            }
            thunk_FUN_1800116e0(piVar7);
          }
          local_b8 = piVar5 + 0x80;
          local_c8 = piVar5;
          if (piVar5 == local_b8) {
            piStack_c0 = piVar5;
            FUN_180006470((longlong *)&local_c8,(undefined8 *)piVar5,local_res18);
          }
          else {
            *piVar5 = iVar3;
            piStack_c0 = piVar5 + 1;
          }
          uVar11 = 0;
          piVar5 = local_c8;
          lVar10 = DAT_180029e28;
          if ((longlong)piStack_c0 - (longlong)local_c8 >> 2 != 0) {
            do {
              piVar12 = local_b0;
              piVar14 = local_a8;
              if (0xfff < uVar13) break;
              uVar2 = piVar5[uVar11];
              uVar11 = uVar11 + 1;
              plVar8 = (longlong *)
                       (((((ulonglong)(uVar2 >> 0x10 & 0xff) ^
                          (((ulonglong)uVar2 & 0xff ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                          (ulonglong)(uVar2 >> 8) & 0xff) * 0x100000001b3) * 0x100000001b3 ^
                         (ulonglong)(uVar2 >> 0x18)) * 0x100000001b3 & _DAT_180029e50) * 0x10 +
                       DAT_180029e38);
              lVar6 = plVar8[1];
              if (lVar6 == lVar10) {
LAB_1800079d1:
                lVar6 = 0;
              }
              else {
                uVar1 = *(uint *)(lVar6 + 0x10);
                while (uVar2 != uVar1) {
                  if (lVar6 == *plVar8) goto LAB_1800079d1;
                  lVar6 = *(longlong *)(lVar6 + 8);
                  uVar1 = *(uint *)(lVar6 + 0x10);
                }
              }
              lVar9 = lVar10;
              if (lVar6 != 0) {
                lVar9 = lVar6;
              }
              if (lVar9 != lVar10) {
                piVar14 = *(int **)(lVar9 + 0x20);
                for (piVar12 = *(int **)(lVar9 + 0x18); piVar12 != piVar14; piVar12 = piVar12 + 1) {
                  local_res18[0] = *piVar12;
                  if ((local_res18[0] != 0) &&
                     (FUN_180005b40(local_78,&local_90,(byte *)local_res18), iVar3 = local_res18[0],
                     local_88 != '\0')) {
                    piVar5 = (int *)param_1[1];
                    if (piVar5 == (int *)param_1[2]) {
                      FUN_180006470(param_1,(undefined8 *)piVar5,local_res18);
                    }
                    else {
                      *piVar5 = local_res18[0];
                      param_1[1] = param_1[1] + 4;
                    }
                    if (piStack_c0 == local_b8) {
                      FUN_180006470((longlong *)&local_c8,(undefined8 *)piStack_c0,local_res18);
                    }
                    else {
                      *piStack_c0 = iVar3;
                      piStack_c0 = piStack_c0 + 1;
                    }
                    uVar13 = uVar13 + 1;
                    piVar5 = local_c8;
                    lVar10 = DAT_180029e28;
                    if (0xfff < uVar13) break;
                  }
                  piVar5 = local_c8;
                  lVar10 = DAT_180029e28;
                }
              }
              piVar12 = local_b0;
              piVar14 = local_a8;
            } while (uVar11 < (ulonglong)((longlong)piStack_c0 - (longlong)piVar5 >> 2));
          }
          if (piVar5 != (int *)0x0) {
            piVar7 = piVar5;
            if ((0xfff < ((longlong)local_b8 - (longlong)piVar5 & 0xfffffffffffffffcU)) &&
               (piVar7 = *(int **)(piVar5 + -2),
               0x1f < (ulonglong)((longlong)piVar5 + (-8 - (longlong)piVar7)))) {
                    /* WARNING: Subroutine does not return */
              _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
            }
            thunk_FUN_1800116e0(piVar7);
          }
        }
        piVar12 = piVar12 + 1;
        local_b0 = piVar12;
      } while (piVar12 != piVar14);
    }
    FUN_180004640((longlong)local_78);
  }
  return param_1;
}

