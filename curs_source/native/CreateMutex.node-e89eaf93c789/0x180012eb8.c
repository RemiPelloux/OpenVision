
/* Address: 0x180012eb8; Evidence: ev_4e995c5b4513aa2b3be3c60d543ec762569f3b3582956b463d642e0ee70464a1 */

undefined8 FUN_180012eb8(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_180011950(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_1800237f0 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_1800237f0 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_180011950(2);
      lVar4 = FUN_180011950(1);
      if (lVar4 == lVar3) goto LAB_180012eda;
    }
    hObject = (HANDLE)FUN_180011950(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_180012f38;
    }
  }
LAB_180012eda:
  DVar2 = 0;
LAB_180012f38:
  FUN_180011894(param_1);
  *(undefined1 *)
   ((&DAT_1800237f0)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_18000c26c(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}

