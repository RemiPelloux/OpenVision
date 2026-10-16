
/* Address: 0x180012c38; Evidence: ev_0412bc5cf1c41db63d8b370c0e871fa69c9168fa439989a21fed34070ed7df66 */

undefined8 FUN_180012c38(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_1800116d0(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_1800227f0 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_1800227f0 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_1800116d0(2);
      lVar4 = FUN_1800116d0(1);
      if (lVar4 == lVar3) goto LAB_180012c5a;
    }
    hObject = (HANDLE)FUN_1800116d0(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_180012cb8;
    }
  }
LAB_180012c5a:
  DVar2 = 0;
LAB_180012cb8:
  FUN_180011614(param_1);
  *(undefined1 *)
   ((&DAT_1800227f0)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_18000bfec(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}

