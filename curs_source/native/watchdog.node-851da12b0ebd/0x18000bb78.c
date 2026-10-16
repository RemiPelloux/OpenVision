
/* Address: 0x18000bb78; Evidence: ev_f24f135301c17aed456238130326668d8fcd1322f74a87aaa2ec05d6ca9bb4a7 */

undefined8 FUN_18000bb78(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_18000b9f4(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_18001b680)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_18000bb00(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_18000bbef;
    DVar3 = GetLastError();
    p_Var4 = FUN_18000632c();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_180006350();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_18000bbef:
  FUN_18000ba1c(*param_4);
  return uVar5;
}

