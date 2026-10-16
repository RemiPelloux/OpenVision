
/* Address: 0x180012db8; Evidence: ev_62f02aa07cd0dca827776c24edd8aa5ad434bf6bae4ea63611478e204b7da15a */

undefined8 FUN_180012db8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_180012c34(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_1800247f0)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_180012d40(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_180012e2f;
    DVar3 = GetLastError();
    p_Var4 = FUN_18000d680();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_18000d6a4();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_180012e2f:
  FUN_180012c5c(*param_4);
  return uVar5;
}

