
/* Address: 0x1800031e4; Evidence: ev_3471abfe25088ef26a552759ef59a20f6ca3fa74072f85ed08b0bd9ce2fef841 */

undefined8 FUN_1800031e4(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  uint uVar1;
  longlong lVar2;
  uint *puVar3;
  int iVar4;
  ulonglong uVar5;
  uint uVar6;
  ulonglong uVar7;
  uint uVar8;
  ulonglong uVar9;
  ulonglong uVar10;
  PEXCEPTION_RECORD local_38;
  longlong local_30;
  
  __except_validate_context_record(param_3);
  lVar2 = param_4[1];
  puVar3 = (uint *)param_4[7];
  uVar10 = *param_4 - lVar2;
  uVar8 = *(uint *)(param_4 + 9);
  local_38 = param_1;
  local_30 = param_3;
  if ((param_1->ExceptionFlags & 0x66) == 0) {
    for (; uVar8 < *puVar3; uVar8 = uVar8 + 1) {
      uVar5 = (ulonglong)uVar8;
      if (((puVar3[uVar5 * 4 + 1] <= uVar10) && (uVar10 < puVar3[uVar5 * 4 + 2])) &&
         (puVar3[uVar5 * 4 + 4] != 0)) {
        if (puVar3[uVar5 * 4 + 3] != 1) {
          iVar4 = (*(code *)((ulonglong)puVar3[uVar5 * 4 + 3] + lVar2))(&local_38,param_2);
          if (iVar4 < 0) {
            return 0;
          }
          if (iVar4 < 1) goto LAB_180003312;
        }
        if ((param_1->ExceptionCode == 0xe06d7363) &&
           (uVar5 = FUN_18000e8d0(0x180010540), (int)uVar5 != 0)) {
          FUN_180003610((int *)param_1);
        }
        FUN_180003790();
        RtlUnwindEx(param_2,(PVOID)((ulonglong)puVar3[((ulonglong)uVar8 + 1) * 4] + lVar2),param_1,
                    (PVOID)(ulonglong)param_1->ExceptionCode,(PCONTEXT)param_4[5],
                    (PUNWIND_HISTORY_TABLE)param_4[8]);
        FUN_1800037c0();
      }
LAB_180003312:
    }
  }
  else {
    uVar5 = param_4[4] - lVar2;
    for (; uVar1 = *puVar3, uVar8 < uVar1; uVar8 = uVar8 + 1) {
      uVar9 = (ulonglong)uVar8;
      if ((puVar3[uVar9 * 4 + 1] <= uVar10) && (uVar10 < puVar3[uVar9 * 4 + 2])) {
        if ((param_1->ExceptionFlags & 0x20) != 0) {
          uVar7 = 0;
          if (uVar1 != 0) {
            do {
              if ((((puVar3[uVar7 * 4 + 1] <= uVar5) && (uVar5 < puVar3[uVar7 * 4 + 2])) &&
                  (puVar3[uVar7 * 4 + 4] == puVar3[uVar9 * 4 + 4])) &&
                 (puVar3[uVar7 * 4 + 3] == puVar3[uVar9 * 4 + 3])) break;
              uVar6 = (int)uVar7 + 1;
              uVar7 = (ulonglong)uVar6;
            } while (uVar6 < uVar1);
          }
          if ((uint)uVar7 != *puVar3) {
            return 1;
          }
        }
        if (puVar3[((ulonglong)uVar8 + 1) * 4] == 0) {
          *(uint *)(param_4 + 9) = uVar8 + 1;
          (*(code *)((ulonglong)puVar3[(ulonglong)uVar8 * 4 + 3] + lVar2))
                    (CONCAT71((int7)((ulonglong)uVar8 * 2 >> 8),1));
        }
        else if ((uVar5 == puVar3[((ulonglong)uVar8 + 1) * 4]) &&
                ((param_1->ExceptionFlags & 0x20) != 0)) {
          return 1;
        }
      }
    }
  }
  return 1;
}

