
/* Address: 0x18000ceb8; Evidence: ev_9a126ecfddfff22a557c6d3e3a90743daf75f991656515cb91c1fca82be20a73 */

undefined8 FUN_18000ceb8(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_18000b950(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_18001b680 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_18001b680 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_18000b950(2);
      lVar4 = FUN_18000b950(1);
      if (lVar4 == lVar3) goto LAB_18000ceda;
    }
    hObject = (HANDLE)FUN_18000b950(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_18000cf38;
    }
  }
LAB_18000ceda:
  DVar2 = 0;
LAB_18000cf38:
  FUN_18000b894(param_1);
  *(undefined1 *)
   ((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_180006158(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}

