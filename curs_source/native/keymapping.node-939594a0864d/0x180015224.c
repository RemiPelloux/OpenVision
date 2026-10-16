
/* Address: 0x180015224; Evidence: ev_89f4bca04ecf68342e1bc517bdaa8bd3adc339daead756676f15eae142ea7b98 */

undefined8 FUN_180015224(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_180012478(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_180028520 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_180028520 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_180012478(2);
      lVar4 = FUN_180012478(1);
      if (lVar4 == lVar3) goto LAB_180015246;
    }
    hObject = (HANDLE)FUN_180012478(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_1800152a4;
    }
  }
LAB_180015246:
  DVar2 = 0;
LAB_1800152a4:
  FUN_1800123bc(param_1);
  *(undefined1 *)
   ((&DAT_180028520)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_18000b72c(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}

