
/* Address: 0x18000cd98; Evidence: ev_e6371d01641a5069fa80b48df3531bd1a4c193e182008dabe9546e7c8a8f5762 */

undefined8 FUN_18000cd98(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_18000b830(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_18001a680 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_18001a680 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_18000b830(2);
      lVar4 = FUN_18000b830(1);
      if (lVar4 == lVar3) goto LAB_18000cdba;
    }
    hObject = (HANDLE)FUN_18000b830(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_18000ce18;
    }
  }
LAB_18000cdba:
  DVar2 = 0;
LAB_18000ce18:
  FUN_18000b774(param_1);
  *(undefined1 *)
   ((&DAT_18001a680)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_180006038(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}

