
/* Address: 0x180011430; Evidence: ev_915b71b2d449287e617a846cedf808b7934cd8c4868c6333774e51eddb45c441 */

undefined8 FUN_180011430(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_18001236c(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_180028520)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_180012478(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_1800114a7;
    DVar3 = GetLastError();
    p_Var4 = FUN_18000b750();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_18000b774();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_1800114a7:
  FUN_180012394(*param_4);
  return uVar5;
}

