
/* Address: 0x18000b9c8; Evidence: ev_77343129141f11d86dd92628dadada2f5515617fc64da2dd39a2a0f4848b27ab */

undefined8 FUN_18000b9c8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  DWORD *pDVar4;
  undefined4 *puVar5;
  undefined8 uVar6;
  
  FUN_18000b844(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_18001b680)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_18000b950(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar6 = 0;
    if (BVar2 != 0) goto LAB_18000ba3f;
    DVar3 = GetLastError();
    pDVar4 = (DWORD *)FUN_18000617c();
    *pDVar4 = DVar3;
  }
  puVar5 = (undefined4 *)FUN_1800061a0();
  *puVar5 = 9;
  uVar6 = 0xffffffff;
LAB_18000ba3f:
  FUN_18000b86c(*param_4);
  return uVar6;
}

