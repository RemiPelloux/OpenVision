
/* Address: 0x1800125c8; Evidence: ev_854ca5f8747011f24cdc1d7a100ac862d2c87cbc2797cf96903bbf35604bb013 */

undefined4
FUN_1800125c8(undefined1 (*param_1) [32],ulonglong param_2,int param_3,int *param_4,int param_5,
             int param_6,longlong *param_7)

{
  char *pcVar1;
  longlong lVar2;
  char cVar3;
  bool bVar4;
  int iVar5;
  char *pcVar6;
  undefined4 uVar7;
  undefined1 (*pauVar8) [32];
  longlong lVar9;
  
  if ((param_1 != (undefined1 (*) [32])0x0) && (param_2 != 0)) {
    (*param_1)[0] = 0;
    iVar5 = 0;
    if (0 < param_3) {
      iVar5 = param_3;
    }
    if (param_2 <= (ulonglong)(longlong)(iVar5 + 1)) {
      uVar7 = 0x22;
      goto LAB_1800125ec;
    }
    if (param_4 != (int *)0x0) {
      pcVar1 = *(char **)(param_4 + 2);
      (*param_1)[0] = 0x30;
      pcVar6 = pcVar1;
      pauVar8 = param_1;
      while( true ) {
        pauVar8 = (undefined1 (*) [32])(*pauVar8 + 1);
        if (param_3 < 1) break;
        cVar3 = *pcVar6;
        if (cVar3 == '\0') {
          cVar3 = '0';
        }
        else {
          pcVar6 = pcVar6 + 1;
        }
        (*pauVar8)[0] = cVar3;
        param_3 = param_3 + -1;
      }
      (*pauVar8)[0] = 0;
      if ((-1 < param_3) && (bVar4 = FUN_1800124f8(pcVar1,pcVar6,*param_4,param_5,param_6), bVar4))
      {
        while( true ) {
          pauVar8 = (undefined1 (*) [32])(pauVar8[-1] + 0x1f);
          if ((*pauVar8)[0] != '9') break;
          (*pauVar8)[0] = 0x30;
        }
        (*pauVar8)[0] = (*pauVar8)[0] + '\x01';
      }
      if ((*param_1)[0] == '1') {
        param_4[1] = param_4[1] + 1;
      }
      else {
        lVar2 = -1;
        do {
          lVar9 = lVar2;
          lVar2 = lVar9 + 1;
        } while ((*param_1)[lVar9 + 2] != '\0');
        FUN_180017e30(param_1,(undefined1 (*) [32])(*param_1 + 1),lVar9 + 2);
      }
      return 0;
    }
  }
  uVar7 = 0x16;
LAB_1800125ec:
  *(undefined4 *)((longlong)param_7 + 0x2c) = uVar7;
  *(undefined1 *)(param_7 + 6) = 1;
  FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_7);
  return uVar7;
}

