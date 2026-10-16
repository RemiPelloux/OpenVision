
/* Address: 0x180005384; Evidence: ev_f8c233a13ab6e1fa1bebc6f63576f53ac7df5452cbb58715163f46c9e3cc31aa */

undefined8 * FUN_180005384(char *param_1)

{
  longlong lVar1;
  longlong lVar2;
  undefined8 *puVar3;
  char *pcVar4;
  undefined8 uVar5;
  char cVar6;
  longlong lVar7;
  ulonglong uVar8;
  undefined8 *puVar9;
  
  cVar6 = *param_1;
  lVar7 = 0;
  pcVar4 = param_1;
  while (cVar6 != '\0') {
    lVar1 = lVar7 + 1;
    if (cVar6 == '=') {
      lVar1 = lVar7;
    }
    lVar7 = -1;
    do {
      lVar2 = lVar7;
      lVar7 = lVar2 + 1;
    } while (pcVar4[lVar7] != '\0');
    pcVar4 = pcVar4 + lVar2 + 2;
    lVar7 = lVar1;
    cVar6 = *pcVar4;
  }
  puVar3 = _calloc_base(lVar7 + 1,8);
  puVar9 = puVar3;
  if (puVar3 == (undefined8 *)0x0) {
LAB_1800053e7:
    FUN_180006a30((LPVOID)0x0);
    puVar3 = (undefined8 *)0x0;
  }
  else {
    for (; *param_1 != '\0'; param_1 = param_1 + uVar8) {
      lVar7 = -1;
      do {
        lVar1 = lVar7;
        lVar7 = lVar1 + 1;
      } while (param_1[lVar7] != '\0');
      uVar8 = lVar1 + 2;
      if (*param_1 != '=') {
        pcVar4 = _calloc_base(uVar8,1);
        if (pcVar4 == (char *)0x0) {
          free_environment<>(puVar3);
          FUN_180006a30((LPVOID)0x0);
          goto LAB_1800053e7;
        }
        uVar5 = FUN_180005940(pcVar4,uVar8,(longlong)param_1);
        if ((int)uVar5 != 0) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        *puVar9 = pcVar4;
        puVar9 = puVar9 + 1;
        FUN_180006a30((LPVOID)0x0);
      }
    }
    FUN_180006a30((LPVOID)0x0);
  }
  return puVar3;
}

