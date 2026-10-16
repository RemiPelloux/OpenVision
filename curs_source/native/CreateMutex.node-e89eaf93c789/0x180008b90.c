
/* Address: 0x180008b90; Evidence: ev_33bcbd4f5f6ee597d9a63ea4928d48d4275d40258e150a9a3c3f9ca0832ecabc */

undefined8 FUN_180008b90(byte *param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  
  iVar1 = *(int *)(param_1 + 4);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_1800069d0(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 4);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_1800069d0();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') && (((*param_1 & 0x80) == 0 || ((*param_2 & 0x10) == 0))))
    {
      iVar1 = *(int *)(param_1 + 4);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_1800069d0();
        lVar2 = lVar2 + iVar1;
      }
      lVar3 = FUN_1800069e4();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 4);
        if (iVar1 != 0) {
          lVar4 = FUN_1800069d0();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_1800069e4();
        iVar1 = strcmp((char *)(lVar4 + 0x10),(char *)((longlong)iVar1 + 0x10 + lVar2));
        if (iVar1 != 0) {
          return 0;
        }
      }
      if (((*param_2 & 2) != 0) && ((*param_1 & 8) == 0)) {
        return 0;
      }
      if (((*param_3 & 1) != 0) && ((*param_1 & 1) == 0)) {
        return 0;
      }
      if (((*param_3 & 4) != 0) && ((*param_1 & 4) == 0)) {
        return 0;
      }
      if (((*param_3 & 2) != 0) && ((*param_1 & 2) == 0)) {
        return 0;
      }
      return 1;
    }
  }
  return 1;
}

