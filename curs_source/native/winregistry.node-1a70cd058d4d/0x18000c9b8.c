
/* Address: 0x18000c9b8; Evidence: ev_3ae1b4e2e0e91b30759716c70eb41921c00eb5cadd4e99e15a01949fd2cdb173 */

undefined8 FUN_18000c9b8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_18000c834(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_18001c750)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_18000c940(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_18000ca2f;
    DVar3 = GetLastError();
    p_Var4 = FUN_180007280();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_1800072a4();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_18000ca2f:
  FUN_18000c85c(*param_4);
  return uVar5;
}

