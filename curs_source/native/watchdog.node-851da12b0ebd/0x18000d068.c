
/* Address: 0x18000d068; Evidence: ev_94c10fc32a246439212c35157f25c74dc0a67324747c460ffb52f9e31945e88f */

undefined8 FUN_18000d068(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_18000bb00(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_18001b680 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_18001b680 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_18000bb00(2);
      lVar4 = FUN_18000bb00(1);
      if (lVar4 == lVar3) goto LAB_18000d08a;
    }
    hObject = (HANDLE)FUN_18000bb00(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_18000d0e8;
    }
  }
LAB_18000d08a:
  DVar2 = 0;
LAB_18000d0e8:
  FUN_18000ba44(param_1);
  *(undefined1 *)
   ((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_180006308(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}

