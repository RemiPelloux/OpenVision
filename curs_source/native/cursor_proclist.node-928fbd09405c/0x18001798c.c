
/* Address: 0x18001798c; Evidence: ev_cd4b961eb08f35829e252dcb86eec2cb5f7140e44008a4905a9ab7a3b367d8c9 */

undefined8 FUN_18001798c(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_180016430(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_180029920 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_180029920 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_180016430(2);
      lVar4 = FUN_180016430(1);
      if (lVar4 == lVar3) goto LAB_1800179ae;
    }
    hObject = (HANDLE)FUN_180016430(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_180017a0c;
    }
  }
LAB_1800179ae:
  DVar2 = 0;
LAB_180017a0c:
  FUN_180016374(param_1);
  *(undefined1 *)
   ((&DAT_180029920)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_180010d9c(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}

