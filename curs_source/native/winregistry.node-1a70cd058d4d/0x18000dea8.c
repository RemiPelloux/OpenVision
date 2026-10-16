
/* Address: 0x18000dea8; Evidence: ev_be60bef20e3dd4ba36769ab55de259aaba829c4c940f0d7340f1f5af896aa6af */

undefined8 FUN_18000dea8(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_18000c940(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_18001c750 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_18001c750 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_18000c940(2);
      lVar4 = FUN_18000c940(1);
      if (lVar4 == lVar3) goto LAB_18000deca;
    }
    hObject = (HANDLE)FUN_18000c940(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_18000df28;
    }
  }
LAB_18000deca:
  DVar2 = 0;
LAB_18000df28:
  FUN_18000c884(param_1);
  *(undefined1 *)
   ((&DAT_18001c750)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_18000725c(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}

