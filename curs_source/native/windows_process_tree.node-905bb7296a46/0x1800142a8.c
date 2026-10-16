
/* Address: 0x1800142a8; Evidence: ev_318977bb6ca932690003e8b4f3fb7011689b6a55b5ce556639d480e6e3e82462 */

undefined8 FUN_1800142a8(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_180012d40(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_1800247f0 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_1800247f0 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_180012d40(2);
      lVar4 = FUN_180012d40(1);
      if (lVar4 == lVar3) goto LAB_1800142ca;
    }
    hObject = (HANDLE)FUN_180012d40(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_180014328;
    }
  }
LAB_1800142ca:
  DVar2 = 0;
LAB_180014328:
  FUN_180012c84(param_1);
  *(undefined1 *)
   ((&DAT_1800247f0)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_18000d65c(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}

