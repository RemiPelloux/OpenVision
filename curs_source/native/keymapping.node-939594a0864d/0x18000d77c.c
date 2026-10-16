
/* Address: 0x18000d77c; Evidence: ev_f740c01264a7845f3258e84fb51f7c9c0aa1252112c9988ae43f3997bb6be5cd */

undefined8
FUN_18000d77c(undefined1 (*param_1) [32],undefined8 param_2,int param_3,int *param_4,char param_5,
             longlong *param_6)

{
  undefined1 (*pauVar1) [32];
  bool bVar2;
  int iVar3;
  undefined1 (*pauVar4) [32];
  longlong lVar5;
  longlong lVar6;
  
  if ((param_5 != '\0') && (param_4[1] + -1 == param_3)) {
    *(undefined2 *)(param_1[-1] + (longlong)param_4[1] + (ulonglong)(*param_4 == 0x2d) + 0x1f) =
         0x30;
  }
  if (*param_4 == 0x2d) {
    (*param_1)[0] = 0x2d;
    param_1 = (undefined1 (*) [32])(*param_1 + 1);
  }
  iVar3 = param_4[1];
  if (iVar3 < 1) {
    if ((iVar3 == 0) && (**(char **)(param_4 + 2) == '0')) {
      bVar2 = true;
    }
    else {
      bVar2 = false;
    }
    if ((param_5 == '\0') || (!bVar2)) {
      lVar6 = -1;
      do {
        lVar5 = lVar6;
        lVar6 = lVar5 + 1;
      } while ((*param_1)[lVar6] != '\0');
      FUN_180017e30((undefined1 (*) [32])(*param_1 + 1),param_1,lVar5 + 2);
    }
    (*param_1)[0] = 0x30;
    pauVar4 = (undefined1 (*) [32])(*param_1 + 1);
  }
  else {
    pauVar4 = (undefined1 (*) [32])(*param_1 + iVar3);
  }
  if (0 < param_3) {
    pauVar1 = (undefined1 (*) [32])(*pauVar4 + 1);
    lVar6 = -1;
    do {
      lVar5 = lVar6;
      lVar6 = lVar5 + 1;
    } while ((*pauVar4)[lVar6] != '\0');
    FUN_180017e30(pauVar1,pauVar4,lVar5 + 2);
    if ((char)param_6[5] == '\0') {
      FUN_18000a2a0(param_6);
    }
    (*pauVar4)[0] = *(undefined1 *)**(undefined8 **)(param_6[3] + 0xf8);
    if (param_4[1] < 0) {
      iVar3 = -param_4[1];
      if ((param_5 != '\0') || (iVar3 < param_3)) {
        param_3 = iVar3;
      }
      lVar6 = -1;
      do {
        lVar5 = lVar6;
        lVar6 = lVar5 + 1;
      } while ((*pauVar1)[lVar6] != '\0');
      FUN_180017e30((undefined1 (*) [32])(*pauVar1 + param_3),pauVar1,lVar5 + 2);
      FUN_180017a70(pauVar1,0x30,(longlong)param_3);
    }
  }
  return 0;
}

